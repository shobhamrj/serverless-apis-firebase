# serverless-apis-firebase



A serverless firebase function/api that creates a firestore document that contains following data for an individual:

  a. Name

  b. Id

  c. List of symptoms to track for this individual (headache, hyperactivity, crying. anxiety, depression). This is a master set of symptoms and any given      individual

  d. Date of birth

  e. Hobbies (list of things individual enjoys. Master list is cycling, tennis, soccer, running)

  f. Location (street address, state code and country) 
  
  g. Care Provider (individual will have various care providers. There will be a primary doctor, physical therapist, neuro doctor, nanny, speech     therapist) 

Write some separate nodejs code to call the api 100 times with different random values call the

in each field. Find some package that creates good real looking fake data and

above api with the random data. 3. On write of this document, there should be a trigger that pushes this doc data to

a

bigquery table. 4. Write an firebase function/api to get all the documents of individuals that enjoy cycling

and tennis. Use python for that.
[7:13 pm, 12/02/2023] Shobham Rajak: 1. Build a serverless firebase function/api (use nodejs) that creates a firestore document

that contains following data for an individual: a. Name

b. Id

c. List of symptoms to track for this individual (headache, hyperactivity, crying,

anxiety, depression). This is a master set of symptoms and any given individual

will have few. d. Date of birth Hobbies (list of things individual enjoys. Master list is cycling, tennis, soccer,

running) f. Location (street address, state code and country)

g. Care Provider (individual will have various care providers. There will be a primary

doctor, physical therapist, neuro doctor, nanny, speech therapist)
