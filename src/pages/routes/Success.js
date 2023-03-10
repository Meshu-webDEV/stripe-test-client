import React, { useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { backendAPI } from "../../lib/backend";

const success_checkout_body = {
  user: {
    full_name: "Joe",
    email: "Joe@Joe.com",
    mobile: "971582820122",
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
    date: "2023-03-28",
  },
};

const lead_uuid = "f775cd17-ba33-4ae0-b0b5-94eadaf98728";

const Success = () => {
  useEffect(() => {
    const _handleError = async () => {
      try {
        backendAPI.defaults.baseURL =
          "http://localhost:6060/v1/client/leads/order/checkout";
        // backendAPI.defaults.baseURL

        await backendAPI.patch(`/success/${lead_uuid}`, success_checkout_body);
      } catch (error) {
        console.log(error);
      }
    };

    _handleError();
  });

  return <div className="text-black">Success</div>;
};

export default Success;
