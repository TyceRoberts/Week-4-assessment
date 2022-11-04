const baseURL = "http://localhost:4000";

const complimentBtn = document.getElementById("complimentButton");

const getSportsBtn = document.getElementById("getSports");

const newSports = document.getElementById("displaySports");

const addSport = document.getElementById("addSport");
const addInput = document.getElementById("addInput");

const deleteSport = document.getElementById("deleteSport");
const deleteInput = document.getElementById("deleteInput");

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/").then((res) => {
        const data = res.data;
        alert(data);
    });
};

const getSports = () => {
    axios
        .get(`${baseURL}/api/sports`)
        .then((res) => {
            console.log(res.data);
            const sports = res.data;
            newSports.innerHTML = "";
            for (let i = 0; i < sports.length; i++) {
                let newSport = document.createElement("li");
                newSport.textContent = sports[i];
                newSports.appendChild(newSport);
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

const addNewSport = (event) => {
    event.preventDefault();

    let bodyObj = {
        item: addInput.value,
    };

    axios
        .post(`${baseURL}/api/addSport`, bodyObj)
        .then((res) => {
            console.log(res.data);
            const sports = res.data;
            newSports.innerHTML = "";
            for (let i = 0; i < sports.length; i++) {
                let newSport = document.createElement("li");
                newSport.textContent = sports[i];
                newSports.appendChild(newSport);
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

const deleteNewSport = (event) => {
    event.preventDefault();
    axios
        .delete(`${baseURL}/api/deleteSport/${deleteInput.value}`)
        .then((res) => {
            const sports = res.data;
            newSports.innerHTML = "";
            for (let i = 0; i < sports.length; i++) {
                let newSport = document.createElement("li");
                newSport.textContent = sports[i];
                newSports.appendChild(newSport);
            }
            deleteInput.value = "";
        });
};

complimentBtn.addEventListener("click", getCompliment);
getSportsBtn.addEventListener("click", getSports);
addSport.addEventListener("submit", addNewSport);