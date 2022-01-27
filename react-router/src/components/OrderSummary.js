import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderSummary() {

    const navigate = useNavigate();

    const HandleGoBack = () => {
        navigate( '/', { replace: true });
    }
  return <div>
      <h1> Order Confirmed!</h1>
      <p> Thank you for placing your order!!</p>

      <button onClick={HandleGoBack}> Go back </button>
  </div>;
}

export default OrderSummary;
