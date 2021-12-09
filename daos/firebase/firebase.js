const admin = require("firebase-admin");

const serviceAccount = require('./firebaseconfig.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const dbfirebase = admin.firestore();

module.exports = {dbfirebase};