import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import constants from '../lib/constants';

const MenuDesktop = ({ setOpen, context, setContext }) => {
  //
  const navigate = useNavigate();

  return <div className={`flex space-x-10 whitespace-nowrap justify-center text-gray-800 items-end text-base font-display lg:text-lg 2xl:text-xl 5xl:text-3xl`}>Menu desktop</div>;
};

export default MenuDesktop;
