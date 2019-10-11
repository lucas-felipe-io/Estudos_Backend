module.exports = app =>{
    app.get("/api", (req, res) => {res.json({ message:"teste" })});

    app.get("/teste", app.src.controllers.sessionController.store);
}
