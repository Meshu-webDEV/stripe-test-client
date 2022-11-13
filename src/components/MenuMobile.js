import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import constants from '../lib/constants';

const MenuMobile = ({ open, setOpen, context, setContext }) => {
  //
  const navigate = useNavigate();

  useEffect(() => {
    if (open) document.body.classList.add('disable-scroll');
    if (open) document.body.classList.remove('enable-scroll');

    if (!open) document.body.classList.remove('disable-scroll');
    if (!open) document.body.classList.add('enable-scroll');
  }, [open]);

  if (!open) return null;

  return (
    <div className='menu absolute pb-10 text-gray-800 font-display bg-gradient-to-br menu-slide-in z-[999] h-[100vh] w-[100%] inset-0 text-bud-blue-600'>
      <div className='bg-transparent'>
        <div className='py-6 px-5 text-bud-blue-600 flex justify-end items-center'>
          <svg onClick={() => setOpen(false)} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-7 h-7 text-gray-800 self-edn'>
            <path
              fillRule='evenodd'
              d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>

      {/* backdrop */}
      <div onClick={() => setOpen(false)} className='absolute z-[999] w-full h-full filter backdrop-blur-lg menu-backdrop-fade-in bg-gray-800/50' />
      <div className='relative py-4 bg-white z-[999] transform '>
        {/* Tabs */}
        <div className='w-1/2 m-auto h-full flex flex-col space-y-10 justify-center items-start pt-8 pb-16'>ITEMS</div>
      </div>
    </div>
  );
};

export default MenuMobile;
