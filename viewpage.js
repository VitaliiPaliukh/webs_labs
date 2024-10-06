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

const chainsaw4 = {
    id: '4',
    image: "../assets/depositphotos_5935363-stock-photo-chainsaw.jpg",
    title: 'Husqvarna Mark 120',
    revolutions: 1300,
    power: 400,
}

const chainsaws = [chainsaw1, chainsaw2, chainsaw3, chainsaw4];

window.addEventListener("load", showChainsaws(chainsaws));

let count_chainsaws = document.getElementById("count-chainsaws");
let search_input = document.getElementById("search-button");
let reset_search = document.getElementById("reset-button");
let sort_value = document.getElementById("sort");
let search_form = document.getElementById("search-form");
search_form.addEventListener("submit", function (event) {
    event.preventDefault();
    searchChainsaws();
});
sort_value.addEventListener("change", sortChainsaws, this);
reset_search.addEventListener("click", resetChainsaws);
search_input.addEventListener("click", searchChainsaws);
count_chainsaws.addEventListener("click", countChainsaws);

function showChainsaws(chainsaws) {
    for (let i in chainsaws) {
        const temp_container = document.getElementById("chainsaws-container");
        const template = document.getElementById("chainsaw-template");
        const clone = template.content.cloneNode(true);
        const id = clone.querySelector("#id");
        id.innerText = chainsaws[i].id;
        const image = clone.querySelector("#item-image");
        image.src = chainsaws[i].image;
        const title = clone.querySelector("#title");
        title.innerText = chainsaws[i].title;
        const revolutions = clone.querySelector("#revolutions");
        revolutions.innerText = `RPM = ${chainsaws[i].revolutions}`;
        const power = clone.querySelector("#power");
        power.innerText = `power = ${chainsaws[i].power} V`;
        clone.querySelector("#update").addEventListener("click", updateElement, this);
        clone.querySelector("#delete").addEventListener("click", deleteElement, this);
        temp_container.appendChild(clone);
    }
}

function sortChainsaws() {
    const chainsawElements = document.querySelectorAll(".chainsaw-item");
    const item_list = [];
    for (let item of chainsawElements) {
        let id = item.querySelector("#id").innerText;
        let title = item.querySelector("#title").innerText;
        const revolutions = parseInt(item.querySelector("#revolutions").innerText.replace('RPM = ', ''));
        const power = parseInt(item.querySelector("#power").innerText.replace('power = ', ''));
        const image = "../assets/depositphotos_5935363-stock-photo-chainsaw.jpg";
        const object = new chainsaw(id, image, title, revolutions, power);
        item_list.push(object);
    }

    const sort_value = document.getElementById("sort").value;
    if (sort_value === "name (A-Z)") {
        item_list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort_value === "name (Z-A)") {
        item_list.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort_value === "power (0-99+)") {
        item_list.sort((a, b) => a.power - b.power);
    } else if (sort_value === "power (99-0)") {
        item_list.sort((a, b) => b.power - a.power);
    }
    clearChainsaws();
    showChainsaws(item_list);
}

function clearChainsaws() {
    const chainsaws_container = document.getElementById("chainsaws-container");
    chainsaws_container.innerHTML = "";
}

function deleteElement(elem) {
    elem = elem.srcElement;
    let element = elem.parentNode.parentNode;
    let id = element.querySelector("#id").innerText;
    const obj_to_delete = chainsaws.find(chainsaw => chainsaw.id === id);
    chainsaws.splice(chainsaws.indexOf(obj_to_delete), 1);
    element.remove();
}

function countChainsaws() {
    const items = document.querySelectorAll("#power");
    let amount = 0;
    for (const item of items) {
        const powerValue = parseInt(item.innerText.replace('power = ', ''));
        if (!isNaN(powerValue)) {
            amount += powerValue;
        }
    }
    document.querySelector("#amount").innerText = amount;
}

function updateElement(elem) {
    console.log("update");
}

function resetChainsaws() {
    clearChainsaws();
    showChainsaws(chainsaws);
}

function searchChainsaws() {
    const search_text = document.getElementById("search-input").value;
    const chainsaws_search = chainsaws.filter(chainsaw => chainsaw.title.toLowerCase().includes(search_text.toLowerCase().trim()));
    clearChainsaws();
    showChainsaws(chainsaws_search);
}

// function closure(elem) {
//     let a = "dasdasd";
//
//     function inner() {
//         console.log(inner2());
//     }
//     function inner2(){
//         return a
//     }
//     function inner() {
//         console.log("haha");
//     }
//     return inner();
// }
//
// closure();
// inner();