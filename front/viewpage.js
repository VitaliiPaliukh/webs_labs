class chainsaw {
    constructor(id, image, title, revolutions, power) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.revolutions = revolutions;
        this.power = power
    }
}

const chainsaw1 = {
    id: '3',
    image: "../assets/depositphotos_5935363-stock-photo-chainsaw.jpg",
    title: 'Dewalt DCCS620B',
    revolutions: 1500,
    power: 100,
};

const chainsaw2 = {
    id: '2',
    image: "../assets/depositphotos_5935363-stock-photo-chainsaw.jpg",
    title: 'Majster Polska',
    revolutions: 1100,
    power: Power = 200,
};

const chainsaw3 = {
    id: '1',
    image: "../assets/depositphotos_5935363-stock-photo-chainsaw.jpg",
    title: 'Dnipro-M DSG-25H',
    revolutions: 1200,
    power: 70,
};

// const chainsaw4 = {
//     id: '4',
//     image: "../assets/depositphotos_5935363-stock-photo-chainsaw.jpg",
//     title: 'Husqvarna Mark 120',
//     revolutions: 1300,
//     power: 400,
// }

const chainsaws = [];

window.addEventListener("load", showChainsaws(chainsaws));

let count_chainsaws = document.getElementById("count-chainsaws");
let search_input = document.getElementById("search-button");
let reset_search = document.getElementById("reset-button");
let sort_value = document.getElementById("sort");
let search_form = document.getElementById("search-form");
search_form.addEventListener("submit", function (event) {
    event.preventDefault();

});
sort_value.addEventListener("change", showChainsaws);
reset_search.addEventListener("click", resetChainsaws);
search_input.addEventListener("click", showChainsaws);
count_chainsaws.addEventListener("click", countChainsaws);

function showChainsaws() {
    let sort = document.querySelector("#sort").value;
    let filter = document.querySelector("#search-input").value;
    clearChainsaws();
    console.log(filter);
    get(sort, filter).then(data => {
        data.forEach(chainsaw => {
            const temp_container = document.getElementById("chainsaws-container");
            const template = document.getElementById("chainsaw-template");
            const clone = template.content.cloneNode(true);
            const id = clone.querySelector("#id");
            id.innerText = chainsaw.id;
            const image = clone.querySelector("#item-image");
            image.src = "../assets/depositphotos_5935363-stock-photo-chainsaw.jpg";
            const title = clone.querySelector("#title");
            title.innerText = chainsaw.title;
            const revolutions = clone.querySelector("#revolutions");
            revolutions.innerText = `RPM = ${chainsaw.RPM}`;
            const power = clone.querySelector("#power");
            power.innerText = `power = ${chainsaw.power} V`;
            clone.querySelector("#update").addEventListener("click", updateElement, this);
            clone.querySelector("#delete").addEventListener("click", deleteElement, this);
            temp_container.appendChild(clone);
        });
    });
}

function get(sort, filter) {
    console.log(sort, filter);
    let url;
    filter = filter.toLowerCase().trim();
    if (sort && filter) {
        url = `http://localhost:3000/api/v1/get?sort=${sort}&filter=${filter}`;
    } else if (sort) {
        url = `http://localhost:3000/api/v1/get?sort=${sort}`;
    } else if (filter) {
        url = `http://localhost:3000/api/v1/get?filter=${filter}`;
    } else {
        url = `http://localhost:3000/api/v1/get`;
    }

    return fetch(url, {
        method: 'GET'
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch chainsaws');
            }
        })
        .then(data => {
            console.log(data.data);
            return data.data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function clearChainsaws() {
    const chainsaws_container = document.getElementById("chainsaws-container");
    chainsaws_container.innerHTML = "";
}

function deleteChainsawEndpoint(id) {
    return fetch(`http://localhost:3000/api/v1/delete/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.status === 204) {
                return;
            } else {
                throw new Error('Failed to delete reminder');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function deleteElement(elem) {
    elem = elem.srcElement;
    let element = elem.parentNode.parentNode;
    let id = element.querySelector("#id").innerText;
    deleteChainsawEndpoint(id)
        .then(data => {
            clearChainsaws();
            showChainsaws();
        });
}

function countChainsawsEndpoint(ids) {
    return fetch('http://localhost:3000/api/v1/count-price', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ids: ids})
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to count chainsaws');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function countChainsaws() {
    const items = document.querySelectorAll("#id");
    const ids = [];
    for (const item of items) {
        const id = item.innerText/1;
        if (!isNaN(id)) {
            ids.push(id);
        }
        countChainsawsEndpoint(ids).then(data => {
            document.querySelector("#amount").innerText = data.totalPrice;
        })
    }
    // document.querySelector("#amount").innerText = totalPrice;
}

// function updateElement(elem) {
//     console.log("update");
// }

function resetChainsaws() {
    clearChainsaws();
    showChainsaws(chainsaws);
}

// function searchChainsaws() {
//     const search_text = document.getElementById("search-input").value;
//     const chainsaws_search = chainsaws.filter(chainsaw => chainsaw.title.toLowerCase().includes(search_text.toLowerCase().trim()));
//     clearChainsaws();
//     showChainsaws(chainsaws_search);
// }

document.getElementById("add-chainsaw-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addChainsaw();
});

function createChainsawEndpoint(data) {
    return fetch('http://localhost:3000/api/v1/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else if (response.status === 409) {
                throw new Error('Chainsaw already exists');
            } else {
                throw new Error('Failed to create chainsaw');
            }
        })
        .catch(error => {
            console.error('Error:', error.message);
            return { error: error.message };
        });
}

function addChainsaw() {
    const id = document.getElementById("new-id").value;
    const title = document.getElementById("new-title").value;
    const RPM = parseInt(document.getElementById("new-revolutions").value);
    const power = parseInt(document.getElementById("new-power").value);
    const image = "../assets/depositphotos_5935363-stock-photo-chainsaw.jpg";

    // const notDuplicate = chainsaws.find(chainsaw => chainsaw.id === id);
    // if (notDuplicate){
    //     alert("already exists");
    //     return;
    // }

    if (RPM < 0 || power < 0) {
        alert("<0");
        return;
    }

    const newChainsaw = new chainsaw(id, image, title, RPM, power);
    createChainsawEndpoint({id, image, title, rpm: RPM, power})
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                chainsaws.push(newChainsaw);
                clearChainsaws();
                showChainsaws();
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

    // chainsaws.push(newChainsaw);
    document.getElementById("add-chainsaw-form").reset();
}

function getChainsawById(id) {
    return fetch(`http://localhost:3000/api/v1/get/${id}`, {
        method: 'GET'
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch chainsaw');
            }
        })
        .then(data => {
            return data.data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


document.addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains("update-button")) {
        updateElement(event.target);
    }
});

document.addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains("save-button")) {
        saveElement(event.target);
    }
});

function updateChainsawEndpoint(data) {
    return fetch(`http://localhost:3000/api/v1/update/${data.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.status === 204) {
                return { success: true };
            } else {
                throw new Error('Failed to update chainsaw');
            }
        })
        .catch(error => {
            return { error: error.message };
        });
}

function updateElement(elem) {
    let element = elem.closest(".chainsaw-item");
    let title = element.querySelector("#title");
    let revolutions = element.querySelector("#revolutions");
    let power = element.querySelector("#power");

    title.innerHTML = `<input type="text" value="${title.innerText}" class="edit-input">`;
    revolutions.innerHTML = `<input type="number" value="${revolutions.innerText.replace('RPM = ', '')}" class="edit-input">`;
    power.innerHTML = `<input type="number" value="${power.innerText.replace('power = ', '').replace(' V', '')}" class="edit-input">`;

    element.querySelector(".save-button").style.display = "inline-block";
    elem.style.display = "none";
}

function saveElement(elem) {
    let element = elem.closest(".chainsaw-item");
    let id = element.querySelector("#id").innerText;
    let title = element.querySelector("#title input").value;
    let revolutions = parseInt(element.querySelector("#revolutions input").value);
    let power = parseInt(element.querySelector("#power input").value);
    const image = "../assets/depositphotos_5935363-stock-photo-chainsaw.jpg";

    const updatedChainsaw = new chainsaw(id, image, title, revolutions, power);
    const index = chainsaws.findIndex(chainsaw => chainsaw.id === id);
    chainsaws[index] = updatedChainsaw;
    updateChainsawEndpoint({id, image, title, revolutions, power})
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                clearChainsaws();
                showChainsaws();
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}



const f = async () => {
    const promise = new Promise((resolve, reject) => {
        let success= true;
        if (success) {
            resolve('Success');
        } else {
            reject('Error');
        }
    });
    let result = await promise;
}


promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Error:', error);
    });


const arr = [1, 2, 3, 4, 5];
const first = arr[0];
const second = arr[1];

const obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'da': 5
}

const {a: x, b: y,...rest} = obj;
