import React, { useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { backendAPI } from "../../lib/backend";

const Fail = () => {
  const { search } = useLocation();

  const [[key, uuid]] = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    if (!key) return;

    const _handleError = async () => {
      try {
        backendAPI.defaults.baseURL =
          "http://localhost:6060/v1/client/leads/order/checkout";
        // backendAPI.defaults.baseURL

        await backendAPI.patch(`/failed/${uuid}`);
      } catch (error) {
        console.log(error);
      }
    };

    _handleError();
  });

  return <div className="text-black">Fail</div>;
};

export default Fail;
