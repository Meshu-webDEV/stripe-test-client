import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  //

  const [scroll, setScroll] = useState(window.scrollY);
  const [context, setContext] = useState({
    navFixed: false,
    navHeight: null,
    state: false,
  });

  const handleNavigation = useCallback((e) => {
    setScroll(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', (e) => handleNavigation(e));

    return () => {
      window.removeEventListener('scroll', (e) => handleNavigation(e));
    };
  });

  return (
    <div
      className={`relative overflow-hidden tracking-wide text-white`}
      style={{
        marginTop: `${context.navFixed ? `${context.navHeight}px` : '0px'}`,
      }}>
      <Navbar context={context} setContext={setContext} />
      <Outlet context={[context, setContext]} />
    </div>
  );
};

export default Layout;
