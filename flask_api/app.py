from flask import Flask, request
import cohere
import pinecone
from PyPDF2 import PdfReader
import re
import openai
import os
from dotenv import load_dotenv

#API keys
load_dotenv()
cohere_key = os.environ.get('cohere_key')
openai_key = os.environ.get('openai_key')
pinecone_key = os.environ.get('pinecone_key')

#Initialize API
openai.api_key = openai_key
index_name = 'batteries'
pinecone.init(pinecone_key, environment='us-east1-gcp')
index = pinecone.Index(index_name)
co = cohere.Client(cohere_key)

def get_text_from_pdf(pdf_file):
    '''
    Extracts pure text from pdf file
    '''
    reader = PdfReader(pdf_file)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    return text

def split(string, maxsplit=0, delimiters=[".","?"]):
    '''
    Splits given text into a list of sentences based on delimiters
    '''
    import re
    regex_pattern = '|'.join(map(re.escape, delimiters))
    return re.split(regex_pattern, string, maxsplit)

def embed_sentences(sentences):
    '''
    Returns embeded sentences from cohere API
    '''
    embedings = co.embed(
        texts=sentences,
        model='multilingual-22-12',
        truncate='NONE'
    ).embeddings
    return embedings

def upsert_data(sentences, embedings, index):
    '''
    Upserts the data embedings with sentences as metadata into pinecone index
    '''
    dimensions = len(embedings[0])
    length = len(embedings)
    ids_batch = [str(n) for n in range(0, length)]
    meta = [{'text': line} for line in sentences]
    to_upsert = zip(ids_batch, embedings, meta)
    index.upsert(vectors=list(to_upsert))

def embed_query(query):
    que_embed = co.embed(
        texts=[query],
        model='multilingual-22-12',
        truncate='NONE'
    ).embeddings
    return que_embed

def get_context(query_embedings):
    dimensions = len(query_embedings[0])
    res = index.query(query_embedings, top_k=5, include_metadata=True)
    context = ''
    for match in res['matches']:
      text = match['metadata']['text'].replace("\n"," ")
      context = context + text
    print(f"Context:{context}")
    return context

def complete(query,context=" "):
    if context == " ":
        final_query = query
    else:
        final_query = f"Based on context:{context} answer following question:{query}"
    response = openai.Completion.create(
      model="text-davinci-003",
      prompt=final_query,
      temperature=0,
      max_tokens=100,
      top_p=1,
      frequency_penalty=0,
      presence_penalty=0
    )
    return response['choices'][0]['text'].strip()

app = Flask(__name__)

@app.route("/file_query", methods=['POST'])
def file_query():
    '''
    Endpoint responsible for answering questions based on context
    extracted from a pinecone vector database index built upon user-provided f ile
    '''
    query = request.json.get("query")
    e_query = embed_query(query)
    context = get_context(e_query)
    response = complete(query, context)
    return {'response': response}

@app.route("/query", methods=['POST'])
def query():
    '''
    Endpoint responsible for answering questions by using gpt-3
    in the future we plan to add prompt engineering based on user provided info
    '''
    query = request.json.get("query")
    response = complete(query)
    return {'response': response}

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)




