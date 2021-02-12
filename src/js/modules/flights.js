import FlightDirect from "./directFlight"
import FlightReturn from "./returnFlight"
import {field} from './directFlight'

export default function createFlightList(data) {
    field.innerHTML = '';
    data.forEach(item => {

        if (item.flight.legs[0].segments[1] && item.flight.legs[1].segments[1]) {

            const point_A = item.flight.legs[0].segments[0].departureCity.caption;
            const point_B = item.flight.legs[0].segments[0].arrivalCity.caption;

            const point_C = () => {
                if (item.flight.legs[0].segments[1].arrivalCity) {
                    return item.flight.legs[0].segments[1].arrivalCity.caption;
                }
            }
            const point_D = point_B;
            const point_E = point_A;

            const depTimeA = item.flight.legs[0].segments[0].departureDate.replace(/T/, " Время: ");
            const arrTimeC = item.flight.legs[0].segments[1].arrivalDate.replace(/T/, " Время: ");
            const depTimeC = item.flight.legs[1].segments[0].departureDate.replace(/T/, " Время: ");
            const arrTimeE = item.flight.legs[1].segments[1].arrivalDate.replace(/T/, " Время: ");

            const price = item.flight.price.totalFeeAndTaxes.amount;
            const carrier = item.flight.carrier.caption;
            const durationDirect = item.flight.legs[0].duration;
            const durationReturn = item.flight.legs[1].duration;

            new FlightDirect(point_A, point_B, point_C(), depTimeA, arrTimeC, price, carrier, durationDirect).render();
            new FlightReturn(point_C(), point_D, point_E, depTimeC, arrTimeE, carrier, durationReturn).render();
        }
    });
}