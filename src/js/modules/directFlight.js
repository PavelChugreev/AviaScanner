const field = document.querySelector('.field');

export default class FlightDirect {
    constructor(from, change, to, dep_date, arr_date, price, carrier, duration){
        this.from = from;
        this.change = change;
        this.to = to;
        this.dep_date = dep_date;
        this.arr_date = arr_date;
        this.price = price;
        this.carrier = carrier;
        this.duration = duration;

    }

    render(){
        const el = document.createElement('div');
        el.classList.add("item")
        el.innerHTML = `


            <div class="title">
                <div class="logo">LOGO</div>
                <div class="price">${this.price} руб</div>
            </div>
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

export {field};



{/* <h3>Перелет Цена: ${this.price}руб</h3>
<h4>Туда</h4>
<div class="from">Из ${this.from}</div>
<div class="change">Через ${this.change}</div>
<div class="to">В ${this.to}</div>
<div class="dep-date">Дата: ${this.dep_date}; </div>
<div class="arr-date">Дата: ${this.arr_date}; </div>
<div class="carrier">Авиакомпания ${this.carrier}</div>
<div class="duration">Продолжительность ${this.duration}</div> */}