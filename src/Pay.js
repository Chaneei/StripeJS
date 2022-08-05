import React from "react";
import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51LTNEgFZdgFKFQNVTyohdxjEwAA4lljko5g1DL3HyMHtyz2wKUT88hsuULuqZm2MRR8KHoezaN2I268OXNPnQH3P00Uw7f1c9g";
const Pay = () => {
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="Chan Shop"
        image="https://avatars.githubusercontent.com/u/148366?v=4"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
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
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
