import axios from 'axios';
import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router-dom';
const KEY = process.env.REACT_STRIPE_KEY
const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory(); 

    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        const makeRequest = async() => {
            try {
            const res = await axios.post(
                "https://cocoboloapinodejs.herokuapp.com/api/checkout/payment", 
                  {
                    tokenId:stripeToken.id,
                    amount: cart.total * 100,
                  }
                );
                console.log(res.data);
                history.push("/success");
              } catch(err) {
                console.log(err);
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, history]);
    
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        >
            { stripeToken ? (
                <span>Processing. Please wait...</span>
            ) : (
            <StripeCheckout
                name="Cocobolo Shop"
                image="https://avatars.githubusercontent.com/u/1486366?v=4"
                description = "Your total is ui 1 rupees"
                amount={1}
                token={onToken}
                stripeKey={KEY}
            >
        <button
            style={{
                border: "none",
                width: 120,
                borderRadius: 5,
                padding: "20px",
                backgroundColor: "black",
                color: "white",
                fontWeight: "600",
                cursor:"pointer",
            }}
            >
            Pay Now
           </button>
         </StripeCheckout>
            )}
        </div>
    );
};

export default Pay;