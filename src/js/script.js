import filter from "./modules/filter"
import createCarriersFilter from "./modules/carriers"
import "../sass/style.sass"

window.addEventListener("DOMContentLoaded", () => {
    createCarriersFilter();
    filter();
});