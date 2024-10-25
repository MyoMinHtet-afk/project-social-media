const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const contentRouter = require("./routers/content");
app.use("/content", contentRouter);

const prisma = require("./prismaClient");

app.get("/info", (req, res) => {
    res.json({ msg: "Yaycha API" });
});

const sever = app.listen(8000, () => {
    console.log("Yaycha API started at 8000..");
});

const gracefulShutdown = async () => {
    await prisma.$disconnect();
    sever.close(() => {
        console.log("Yaycha API closed.");
        process.exit(0);
    });
};

process.on("SIGTERM",gracefulShutdown);
process.on("SIGINT", gracefulShutdown);