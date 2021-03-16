const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


exports.myfunction = functions.https.onRequest((req, res) => {
    res.json({from: 'Amit Chaudhary', message: 'Hello, how are you?'})
})

exports.userCreated = functions.firestore.document('/users/{docId}').onCreate((snapshot, context) => {
    console.log(`Oncreate function is executed by creating ${snapshot.data().name}` )
    console.log(snapshot.data())
    return Promise.resolve()
})


exports.userDeleted = functions.firestore.document('/users/{docId}').onDelete((snapshot, context) => {
    console.log(`User data --- ${snapshot.data().name} --- deleted successfully`)
    return Promise.resolve()
})