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

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: 1000,
            })
        }).then(res => res.json());

        const {paymentIntent: { client_secret }} = response;

        console.log(client_secret);

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Jenny Rosen'
                }
            }
        });

        if(paymentResult.error) {
            console.log(paymentResult.error);
        } else if(paymentResult.paymentIntent.status === 'succeeded') {
            alert('Payment Successful');
        }
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={PaymentHandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement/>
                <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay</ButtonComponent>
            </FormContainer>
        </PaymentFormContainer>
    );
}

export default PaymentFormComponent;