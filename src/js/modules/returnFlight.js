import {field} from './directFlight'

export default class FlightReturn {
    constructor(from, change, to, dep_date, arr_date, carrier, duration){
        this.from = from;
        this.change = change;
        this.to = to;
        this.dep_date = dep_date;
        this.arr_date = arr_date;
        this.carrier = carrier;
        this.duration = duration;
    }

    render(){
        const el = document.createElement('div');
        el.classList.add("item")
        el.innerHTML = `
            <div class="direction">
                <div class="route">
                    <div class="from">Из ${this.from}</div>
                    <div class="to">В ${this.to}</div>
                </div>
                <div class="change">Пересадка в ${this.change}</div>
                <div class="info">
                    <div class="dep_time">Вылет: ${this.dep_date} </div>
                    <div class="duration">Продолжительность ${this.duration} мин</div>
                    <div class="arr_time">Прилет Дата: ${this.arr_date}</div>
                </div>
                <div class="carrier">Авиакомпания ${this.carrier}</div>
            </div>


        `;

        field.append(el);
    }
}

{/* <h4>Обратно</h4>
<div class="from">Из ${this.from}</div>
<div class="change">Через ${this.change}</div>
<div class="to">В ${this.to}</div>
<div class="dep-date">Дата: ${this.dep_date}; </div>
<div class="arr-date">Дата: ${this.arr_date}; </div>
<div class="carrier">Авиакомпания ${this.carrier}</div>
<div class="duration">Продолжительность ${this.duration}</div>
<hr> */}