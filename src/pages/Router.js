import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout.context";
import Fail from "./routes/Fail";

// Routes/pages
import Home from "./routes/Home";
import Success from "./routes/Success";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/success-whore" element={<Success />} />
        <Route path="/failure-whore" element={<Fail />} />
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default Router;
