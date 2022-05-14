import React, {useEffect, useState} from 'react';
import {useOrderDetails} from "../../contexts/OrderDetails";
import axios from "axios";
import AlertBanner from "../common/AlertBanner";
import Button from "react-bootstrap/Button";

function OrderConfirmation({setOrderPhase}) {


    const [, , resetOrder] = useOrderDetails();
    const [orderNumber, setOrderNumber] = useState(null);
    const [error, setError] = useState(false);


    useEffect(() => {

        axios
            .post(`http://localhost:3030/order`)
            .then(response => {
                setOrderNumber((response.data.orderNumber))
            })
            .catch(error => setError(true));
    }, []);

    if (error) {
        return <AlertBanner/>;
    }

    function handleClick() {

        resetOrder();
        setOrderPhase('inProgress');
    }

    if (orderNumber) {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Thank you</h1>
                <p>Your order number is {orderNumber}</p>
                <p style={{fontSize: '75%'}}>
                    as per our terms and conditions, nothing will happen now!
                </p>
                <Button onClick={handleClick}>Create new order</Button>
            </div>
        );
    } else {
        return <div>Loading</div>
    }
}

export default OrderConfirmation;