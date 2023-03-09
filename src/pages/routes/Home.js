import React, { useState, useEffect } from "react";
import { backendAPI } from "../../lib/backend";
import { useNavigate } from "react-router-dom";
import "./App.css";

const initiate_checkout_body = {
  user: {
    full_name: "Rey",
    email: "Rey@Rey.com",
    mobile: "971582820152",
    password: "1qaz2wsx",
    confirm_password: "1qaz2wsx",
    address: {
      unit: "801",
      floor: "8",
      building: "Building 2",
      street: "Hessa st.",
      city: "63f582ab007474675aaf6619",
      area: "63f582af007474675aaf6702",
    },
  },
  delivery: {
    day: "63fe19efe849c56fe3ebb0c7",
    period: "63fe19d4e849c56fe3ebb0ba",
    date: "2023-03-14",
  },
};

console.log(JSON.stringify(initiate_checkout_body));

const lead_uuid = "0a26c0c9-9ddd-4ea7-b0ba-9c5944a07b0e";

// success-checkout?session_id=cs_test_b13CNvTahuEj7YCGRq1HtQbyQaruelotDHK9FkndUvUAfqZgNIQunTk0sK&lead_uuid=0a26c0c9-9ddd-4ea7-b0ba-9c5944a07b0e&delivery_date=2023-03-14&delivery_day=tuesday&delivery_period=6pm-10pm

const ProductDisplay = () => {
  //

  const navigate = useNavigate();

  const handleCheckout = async (e) => {
    try {
      e.preventDefault();

      backendAPI.defaults.baseURL = `http://localhost:6060/v1/client/leads/order/checkout/initiate/${lead_uuid}`;
      // backendAPI.defaults.baseURL
      const { data } = await backendAPI.post("/", initiate_checkout_body);

      console.log(data);

      window.location.href = data.data.url;
    } catch (error) {
      console.log(error);
      return navigate(`/failure-checkout?uuid=${lead_uuid}`);
    }
  };

  return (
    <section>
      <div className="product">
        <Logo />
        <div className="description">
          <h3>Starter plan</h3>
          <h5>$20.00 / month</h5>
        </div>
      </div>
      <form>
        {/* Add a hidden field with the lookup_key of your Price */}
        <input type="hidden" name="lookup_key" value="{{PRICE_LOOKUP_KEY}}" />
        <button
          className="text-black bg-slate-200"
          id="checkout-and-portal-button"
          type="submit"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </form>
    </section>
  );
};

const SuccessDisplay = ({ sessionId }) => {
  return (
    <section>
      <div className="product Box-root">
        <Logo />
        <div className="description Box-root">
          <h3>Subscription to starter plan successful!</h3>
        </div>
      </div>
      <form action="/create-portal-session" method="POST">
        <input
          type="hidden"
          id="session-id"
          name="session_id"
          value={sessionId}
        />
        <button id="checkout-and-portal-button" type="submit">
          Manage your billing information
        </button>
      </form>
    </section>
  );
};

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  let [message, setMessage] = useState("");
  let [success, setSuccess] = useState(false);
  let [sessionId, setSessionId] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    console.log(query);

    if (query.get("success")) {
      setSuccess(true);
      setSessionId(query.get("session_id"));
    }

    if (query.get("canceled")) {
      setSuccess(false);
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, [sessionId]);

  if (!success && message === "") {
    return <ProductDisplay />;
  } else if (success && sessionId !== "") {
    return <SuccessDisplay sessionId={sessionId} />;
  } else {
    return <Message message={message} />;
  }
}

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="14px"
    height="16px"
    viewBox="0 0 14 16"
    version="1.1"
  >
    <defs />
    <g id="Flow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="0-Default"
        transform="translate(-121.000000, -40.000000)"
        fill="#E184DF"
      >
        <path
          d="M127,50 L126,50 C123.238576,50 121,47.7614237 121,45 C121,42.2385763 123.238576,40 126,40 L135,40 L135,56 L133,56 L133,42 L129,42 L129,56 L127,56 L127,50 Z M127,48 L127,42 L126,42 C124.343146,42 123,43.3431458 123,45 C123,46.6568542 124.343146,48 126,48 L127,48 Z"
          id="Pilcrow"
        />
      </g>
    </g>
  </svg>
);
