import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import sideMenuItems from '../../../utils/sideMenuItems';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  //close on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }) => {
  //     if (!sidebar.current || !trigger.current) return;
  //     if (
  //       !sidebarOpen ||
  //       sidebar.current.contains(target) ||
  //       trigger.current.contains(target)
  //     )
  //       return;
  //     setSidebarOpen(false);
  //     console.log(sidebar.current.contains(target));
  //   };
  //   console.log('sidebarOpen', sidebarOpen);
  //   document.addEventListener('click', clickHandler);
  //   return () => document.removeEventListener('click', clickHandler);
  // });

  // close if the esc key is pressed

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      // console.log('key', keyCode);
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
      // console.log(keyCode);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-y-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden='true'
      ></div>

      {/* Sidebar */}
      <div
        id='sidebar'
        ref={sidebar}
        className={`flex  flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 ${
          sidebarExpanded ? 'lg:w-64' : 'lg:w-20'
        } 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className='flex justify-between mb-10 pr-3 sm:px-2'>
          {/* Close button */}
          <button
            ref={trigger}
            className='lg:hidden text-slate-500 hover:text-slate-400'
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls='sidebar'
            aria-expanded={sidebarOpen}
          >
            <span className='sr-only'>Close sidebar</span>
            <svg
              className='w-6 h-6 fill-current'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z' />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to='/' className='flex items-center justify-center'>
            <img src={logo} alt='Logo' className='lg:w-24' />
          </NavLink>
          {/* Expand / collapse button */}
        </div>
        <hr />
        <div className='hidden lg:inline-flex 2xl:hidden justify-end '>
          <div className='py-2'>
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <svg
                className={`w-6 h-6 fill-current ${
                  sidebarExpanded ? 'transform rotate-180' : ''
                }`}
                viewBox='0 0 24 24'
              >
                <path
                  className='text-slate-400'
                  d='M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z'
                />
                <path className='text-slate-600' d='M3 23H1V1h2z' />
              </svg>
            </button>
          </div>
        </div>

        {/* Links */}
        <div className='space-y-8'>
          {/* Pages group */}
          <div>
            <h3 className='text-xs uppercase text-slate-500 font-semibold pl-3'>
              <span
                className='hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6'
                aria-hidden='true'
              >
                •••
              </span>
              <span className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                Pages
              </span>
            </h3>
            <ul className='mt-3'>
              {/* Dashboard */}
              {sideMenuItems
                .filter((item) => item.access === user?.role)
                .map((item, index) => (
                  <li
                    key={index}
                    className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                      pathname === item.path && 'bg-slate-900'
                    }`}
                  >
                    <NavLink
                      to={item.path}
                      className={`block text-slate-200  truncate transition duration-150 ${
                        pathname === item.path
                          ? 'hover:text-slate-200'
                          : 'hover:text-white'
                      }`}
                    >
                      <div className='flex items-center'>
                        <i
                          className={`text-2xl lg:sidebar-expanded:text-xl ${
                            pathname === item.path && '!text-indigo-500'
                          }`}
                          viewBox='0 0 24 24'
                        >
                          {item.icon}
                        </i>
                        <span
                          className={`text-sm text-white font-medium ml-3 ${
                            sidebarExpanded ? 'lg:opacity-100' : 'lg:opacity-0'
                          }  2xl:opacity-100 duration-200`}
                        >
                          {item.name}
                        </span>
                      </div>
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
