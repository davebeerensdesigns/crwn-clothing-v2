import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";

import ButtonComponent, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import {PaymentFormContainer, FormContainer} from "./payment-form.styles";

const PaymentFormComponent = () => {
    const stripe = useStripe();
    const elements = useElements();

    const PaymentHandler = async (e) => {
        e.preventDefault();
        if(!stripe || !elements) {
            return;
        }

        
    }

    return (
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Card Payment:</h2>
                <CardElement/>
                <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay</ButtonComponent>
            </FormContainer>
        </PaymentFormContainer>
    );
}

export default PaymentFormComponent;