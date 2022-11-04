const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
    getCompliment,
    getSports,
    addSport,
    deleteSport,
} = require("./controller");

app.get("/api/compliment", getCompliment);

app.get("/api/sports", getSports);

app.post("/api/addSport", addSport);

app.delete("/api/deleteSport/:id", deleteSport);
app.put("/api/putSport/:id", putSport);

app.listen(4000, () => console.log("Server running on 4000"));