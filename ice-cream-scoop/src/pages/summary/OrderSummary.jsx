import React from 'react';
import {useOrderDetails} from "../../contexts/OrderDetails";
import SummaryForm from "./SummaryForm";

function OrderSummary({setOrderPhase}) {


    const [orderDetails] = useOrderDetails();

    const scoopArray = Array.from(orderDetails.scoops.entries());

    const scoopList = scoopArray.map(([key, value]) => (
        <li key={key}>
            {value}{key}
        </li>
    ));


    const hasToppings = orderDetails.totals.toppings !== '$0.00';
    let toppingsDisplay = null;

    if (hasToppings) {
        const toppingsArray = Array.from(orderDetails.toppings.keys());
        const toppingsList = toppingsArray.map(key => (
            <li key={key}>
                {key}
            </li>
        ));

        toppingsDisplay = (
            <>
                <h2>Toppings: {orderDetails.totals.toppings}</h2>
                <ul>{toppingsList}</ul>
            </>
        )
    }

    return (
        <div>
            <h1>Order Summary</h1>
            <h2>Scoops: {orderDetails.totals.scoops}</h2>
            <ul>{scoopList}</ul>
            {toppingsDisplay}

            <SummaryForm setOrderPhase={setOrderPhase}/>
        </div>
    );
}

export default OrderSummary;