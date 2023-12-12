import Cart from "./Cart";
import Filter from "./Filter";
import Sort from "./Sort";

export default function Top() {
    return (
        <div className="top">
            <Cart />
            <h1>Mažasis KNYGYNĖLIS</h1>
            <div className="buttons">
            <Filter />
            <Sort />
            </div>
            <h3>Knygų sąrašas</h3>
        </div>
    );
}