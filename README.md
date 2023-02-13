# serverless-apis-firebase



1. A serverless firebase function/api that creates a firestore document that contains following data for an individual:

  a. Name

  b. Id

  c. List of symptoms to track for this individual (headache, hyperactivity, crying. anxiety, depression). This is a master set of symptoms and any given      individual

  d. Date of birth

  e. Hobbies (list of things individual enjoys. Master list is cycling, tennis, soccer, running)

  f. Location (street address, state code and country) 
  
  g. Care Provider (individual will have various care providers. There will be a primary doctor, physical therapist, neuro doctor, nanny, speech     therapist) 
  
---> functions/createIndividual (solution to above problem)


2. Write some separate nodejs code to call the api 100 times with different random values call the in each field. Find some package that creates good real looking fake data and above api with the random data.

---> client/client.js (used falso to create fake data and made 100 post request to createIndividual API)


3. On write of this document, there should be a trigger that pushes this doc data to a bigquery table. 

---> functions/pushToBigQuery (wrote a hook, that detects the changes in the collections and further retreives the from firestores and saves it in a bigquerry)


4. Write an firebase function/api to get all the documents of individuals that enjoy cycling and tennis. Use python for that.

---> client/client.py (wrote the method that fetches the data from the collection)

