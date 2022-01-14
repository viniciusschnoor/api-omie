// APP KEY: 1011945321387 // APP SECRET: 45efc088f8e481cafc67cb074b49aa51

const DEFAULT_URL = "http://localhost:3030/produtos";

async function load() {
    const response = 
        await axios.get(`${DEFAULT_URL}`);

    console.log(response);
}

load();



