import {render} from "@testing-library/react";
import {OrderDetailsProvider} from "../contexts/OrderDetails";
import options from "../pages/entry/Options";


const renderWithContext = (ui, options)=>{
    render(ui, {wrapper: OrderDetailsProvider, ...options})
}

export * from "@testing-library/react";
export {renderWithContext as render};
