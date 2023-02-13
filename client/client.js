const axios = require('axios');
const falso = require('@ngneat/falso');
require('dotenv').config()

const API_URL = process.env.API_URL;

async function createIndividual() {
  const individual = {
    name: falso.randFullName(),
    id: falso.randUuid(),
    symptoms: falso.rand([
      'headache',
      'hyperactivity',
      'crying',
      'anxiety',
      'depression'
    ]),
    dob: falso.randPastDate(),
    hobbies: falso.rand([
      'cycling',
      'tennis',
      'soccer',
      'running'
    ]),
    location: {
      streetAddress: falso.randStreetAddress(),
      stateCode: falso.randStateAbbr(),
      country: falso.randCounty()
    },
    careProvider: {
      primaryDoctor: falso.randFullName(),
      physicalTherapist: falso.randFullName(),
      neuroDoctor: falso.randFullName(),
      nanny: falso.randFullName(),
      speechTherapist: falso.randFullName()
    }
  };

  try {
    const response = await axios.post(API_URL, individual);
    console.log(response.data);
  } catch (error) {
    console.error(error.toString());
  }
}

(async () => {
  for (let i = 0; i < 100; i++) {
    await createIndividual();
  }
})();