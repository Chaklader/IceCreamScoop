import './App.css';
import {useState} from 'react';
import OrderEntry from "./pages/entry/OrderEntry";
import {OrderDetailsProvider} from "./contexts/OrderDetails";
import {Container} from "react-bootstrap";

function App() {


    const [orderPhase, setOrderPhase] = useState('inProgress');

    let Component = OrderEntry;

    switch (orderPhase) {

        case 'inProgress': {
            Component = OrderEntry;
            break;
        }

        case 'review': {
            break;
        }

        case 'completed': {
            break;
        }

        default: {

        }
    }


    return (

        <OrderDetailsProvider>
            <Container>{<Component setOrderPhase={setOrderPhase}/>}</Container>
        </OrderDetailsProvider>
    );
}

export default App;
