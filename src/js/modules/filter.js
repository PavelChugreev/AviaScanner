import dataBase from "../../../flights.json"
import createFlightList from "./flights"

const newData = [];
dataBase.result.flights.forEach(item => {
	newData.push(item);
});

let mainDB = newData;

export default function filter() {

	createFlightList(mainDB);

	const lowLimitField = document.querySelector('#lowLimit');
	const highLimitField = document.querySelector('#highLimit');
	const btn = document.querySelector('.sbmt');
	const lowFilter = document.querySelector("#low");
	const highFilter = document.querySelector("#high");
	const timeFilter = document.querySelector("#time");
	const durFilter = document.querySelector("#dur");
	const checkboxes = document.querySelectorAll(".checkbox");
	

	function checkPrice(data) {
		let filteredByPrice;
		filteredByPrice = data.filter(item => {
			if (+item.flight.price.totalFeeAndTaxes.amount.slice(0, -3) >= +lowLimitField.value &&
				+item.flight.price.totalFeeAndTaxes.amount.slice(0, -3) <= +highLimitField.value) {
				return item
			}
		});
		mainDB = filteredByPrice;
	}

	function checkCarriers(data){
		const chekedInputs = document.querySelectorAll(".checked");
		let filteredByCarriers = [];
		chekedInputs.forEach(item => {
			data.forEach(el => {
				if(item.name === el.flight.carrier.caption){
					filteredByCarriers.push(el);
				}
			});
		});
		mainDB = filteredByCarriers;
	}

	function render(){
		mainDB = newData;
		checkPrice(mainDB);
		checkCarriers(mainDB);
		createFlightList(mainDB)
	}
	function sort(arr){
		mainDB = arr;
		createFlightList(arr);
		checkPrice(mainDB);
	}
	

	btn.addEventListener("click", (e) => {
		e.preventDefault();
		render();
	});

	checkboxes.forEach(item => {
		item.addEventListener("change", () => {
			item.classList.toggle("checked");
			render();
		});
	});

	lowFilter.addEventListener("change", () => {
		let filteredArr = mainDB.sort((a, b) => {
			return b.flight.price.totalFeeAndTaxes.amount - a.flight.price.totalFeeAndTaxes.amount;
		});
		sort(filteredArr)
	});

	highFilter.addEventListener("change", () => {
		let filteredArr = mainDB.sort((a, b) => {
			return a.flight.price.totalFeeAndTaxes.amount - b.flight.price.totalFeeAndTaxes.amount;
		});
		sort(filteredArr)
	});

	timeFilter.addEventListener("change", () => {
		let filteredArr = mainDB.sort((a, b) => {
			return a.flight.legs[0].segments[0].departureDate.replace(/[^0-9]/g, '') - b.flight.legs[0].segments[0].departureDate.replace(/[^0-9]/g, '');
		});
		sort(filteredArr)
	});

	durFilter.addEventListener("change", () => {
		let filteredArr = mainDB.sort((a, b) => {
			return (a.flight.legs[0].duration + a.flight.legs[1].duration) - (b.flight.legs[0].duration + b.flight.legs[1].duration);
		});
		sort(filteredArr)
	});
}

export {newData};
export {mainDB};