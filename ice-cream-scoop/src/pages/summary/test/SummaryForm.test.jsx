import {fireEvent, render, screen} from '@testing-library/react';
import SummaryForm from "../SummaryForm";

test('Initial conditions', () => {
    render(<SummaryForm/>);

    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i
    });

    expect(checkbox).not.toBeChecked();

    const confirmOrder = screen.getByRole('button', {name: /confirm order/i});
    expect(confirmOrder).toBeDisabled();
});


test('Checkbox disables button on first click and enables on second click', () => {
    render(<SummaryForm/>);

    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i
    });

    const confirmOrder = screen.getByRole('button', {name: /confirm order/i});

    fireEvent.click(checkbox);
    expect(confirmOrder).toBeEnabled();


    fireEvent.click(checkbox);
    expect(confirmOrder).toBeDisabled();
});
