import {newData} from "./filter"

export default function createCarriersFilter(){
    let carriers = newData.map(item =>  item.flight.carrier.caption );

    carriers = carriers.filter((item, i) => carriers.indexOf(item) === i);

    const carriersField = document.querySelector(".carriers");

    carriers.forEach((item, i) => {
        const el = document.createElement("div");
        el.innerHTML = ` 
            <input class="checkbox checked" type="checkbox" name="${item}" id="uid_${++i}" checked><label for="uid_${i}">${item}</label> 
        `
        carriersField.append(el);
    });
}