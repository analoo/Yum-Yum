
module.exports = (app, path) => {
app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../yumyum/public/index.html"));
});

};