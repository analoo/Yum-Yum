const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 4001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// Serve up static assets (usually on heroku)
// Add routes, both API and view
app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Requiring our Models for Syncing
var db = require("./models");

// Syncing Sequelize Models
db.sequelize.sync().then(function () {
    // Start the API server
    app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
});
