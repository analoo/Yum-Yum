const express = require("express");
const admin = require("firebase-admin");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Configure and Initialize Firebase for Authentication
var serviceAccount = require("./config/yumyum-project3-firebase-adminsdk-3dmi8-7a523c5d45.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://yumyum-project3.firebaseio.com"
});

// Requiring our Models for Syncing
var db = require("./models");

// Syncing Sequelize Models
db.sequelize.sync().then(function () {
    // Start the API server
    app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
});



//=============================================
// Dependencies
// const express = require("express");
// const admin = require("firebase-admin");
// const path = require("path");

// Set up the Express App
// var app = express();
// var PORT = process.env.PORT || 4000;

// Static Directory
// app.use(express.static(path.join(__dirname,"public")));

// Configure and Initialize Firebase for Authentication
// var serviceAccount = require("./config/yumyum-project3-firebase-adminsdk-3dmi8-7a523c5d45.json");

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://yumyum-project3.firebaseio.com"
// });

// Requiring our Models for Syncing
// var db = require("./models");

// // Parse Request Body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Routesyy
// require("./routes/api-routes.js")(app, path);
// // require("./routes/html-routes.js")(app);

// Syncing Sequelize Models
// db.sequelize.sync().then(function () {
    // Starting Express app
//     app.listen(PORT, function () {
//         console.log("Server listening at localhost:" + PORT);
//     });
// });