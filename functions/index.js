const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const { BigQuery } = require('@google-cloud/bigquery');

firebase.initializeApp();
const db = firebase.firestore();
const bigquery = new BigQuery();

exports.createIndividual = functions.https.onRequest(async (req, res) => {
  try {
    const individual = {
      name: req.body.name,
      id: req.body.id,
      symptoms: req.body.symptoms,
      dob: req.body.dob,
      hobbies: req.body.hobbies,
      location: req.body.location,
      careProvider: req.body.careProvider
    };

    const individualRef = db.collection('individuals').doc();
    await individualRef.set(individual);

    return res.status(200).send({ message: 'Individual added successfully', individual });
  } catch (error) {
    console.log(error.toString());
    return res.status(500).send({ message: 'Error adding individual', error});
  }
});

exports.pushToBigQuery = functions.firestore
  .document('individuals/{individualId}')
  .onWrite(async (change, context) => {
    const individual = change.after.data();
    const individualId = context.params.individualId;

    try {
        const location =  Object.values(individual.location).join(',');

        const query =  `INSERT INTO \`first-serverless-firebase-app.individuals.data\` (individualId, id, name, symptoms, dob, hobbies, location, care_provider_primary_doctor, care_provider_physical_therapist, care_provider_neuro_doctor, care_provider_nanny, care_provider_speech_therapist) VALUES ('${individualId}', '${individual.id}', '${individual.name}', '${individual.symptoms}', '${individual.dob}', '${individual.hobbies}', '${location}', '${individual.careProvider.primaryDoctor}',  '${individual.careProvider.physicalTherapist}', '${individual.careProvider.neuroDoctor}', '${individual.careProvider.nanny}', '${individual.careProvider.speechTherapist}')`;
    //   const rows = {
    //       individualId: individualId,
    //       name: individual.name,
    //       id: individual.id,
    //       symptoms: individual.symptoms,
    //       dob: individual.dob,
    //       hobbies: individual.hobbies,
    //       care_provider_primary_doctor: individual.careProvider.primaryDoctor,
    //       care_provider_physical_therapist: individual.careProvider.physicalTherapist,
    //       care_provider_neuro_doctor: individual.careProvider.neuroDoctor,
    //       care_provider_nanny: individual.careProvider.nanny,
    //       care_provider_speech_therapist: individual.careProvider.speechTherapist
    //     };
    //     console.log(rows);

      const options = {
        query: query
      };

      const [job] = await bigquery.createQueryJob(options);

      if (job && job.length > 0) {
        console.error('Insert errors:');
        job.forEach(err => console.error(err));
      } else {
        console.log(`Inserted 1 row`);
      }
    } catch (error) {
      console.error(error);
    }
});