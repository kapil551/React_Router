import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const handleOrderPlace = () => {
        navigate("order-summary", { replace: true });
    }
  return (
    <div>
      <h1>Home Page </h1>

      <button onClick={handleOrderPlace}> Place Order </button>
    </div>
  );
}

export default Home;
