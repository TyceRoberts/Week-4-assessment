const sports = ["Soccer", "Football", "Basketball"];

module.exports = {
    getCompliment: (req, res) => {
        const compliments = [
            "Gee, you're a smart cookie!",
            "Cool shirt!",
            "Your Javascript skills are stellar.",
        ];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    getSports: (req, res) => {
        res.status(200).send(sports);
    },

    addSport: (req, res) => {
        let { sport } = req.body;
        sports.push(sport);

        res.status(200).send(sports);
    },
    deleteSport: (req, res) => {
        let index = req.params.id;
        sports.splice(index, 1);
        res.status(200).send(sports);
    },

    putSport: (req, res) => {
        let index = req.params.id;
        let { item } = req.body;
    },
};