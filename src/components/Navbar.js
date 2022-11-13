import React, { useEffect, useRef, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';

const Navbar = ({ context, setContext }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const heightRef = useRef(null);

  useEffect(() => {
    return setContext((p) => {
      return { ...p, navHeight: heightRef.current.clientHeight };
    });
  }, []);

  return (
    <div
      ref={heightRef}
      className={`${context.navFixed && 'fixed top-0 menu-slide-in'} z-[990] bg-white w-full py-6 px-5 lg:px-7 xl:px-9 3xl:px-[5%] 5xl:px-[8%] text-bud-blue-600 flex justify-between items-center`}>
      {/* Logo */}
      {menuOpen ? (
        <MenuMobile context={context} setContext={setContext} open={menuOpen} setOpen={setMenuOpen} />
      ) : (
        <MenuMobile context={context} setContext={setContext} open={false} setOpen={setMenuOpen} />
      )}
      <Link to='/home#hero' className='text-gray-800 font-bold'>
        LOGO
      </Link>

      <div className='hidden xl:block'>
        <MenuDesktop context={context} setContext={setContext} open={menuOpen} setOpen={setMenuOpen} />
      </div>

      {!menuOpen && (
        <svg onClick={() => setMenuOpen(true)} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-7 h-7 text-gray-800 xl:hidden'>
          <path
            fillRule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z'
            clipRule='evenodd'
          />
        </svg>
      )}

      {/* Menu */}
    </div>
  );
};

export default Navbar;
