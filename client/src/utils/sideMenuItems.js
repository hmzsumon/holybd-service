import { FaUsers } from 'react-icons/fa';
import { MdMedicalServices, MdOutlineDashboard } from 'react-icons/md';

import { BiUserPlus } from 'react-icons/bi';

const sideMenuItems = [
  {
    id: 1,
    name: 'Dashboard',
    icon: <MdOutlineDashboard />,
    path: '/admin/dashboard',
    access: 'admin',
  },

  {
    id: 11,
    name: 'Dashboard',
    icon: <MdOutlineDashboard />,
    path: '/seller/dashboard',
    access: 'seller',
  },

  {
    id: 2,
    name: 'All Sellers',
    icon: <FaUsers />,
    path: '/all-sellers',
    access: 'admin',
  },
  {
    id: 3,
    name: 'Create Seller',
    icon: <BiUserPlus />,
    path: '/create-seller',
    access: 'admin',
  },

  {
    id: 4,
    name: 'Services',
    icon: <MdMedicalServices />,
    path: '/admin/services',
    access: 'admin',
  },

  //   {
  //     id: 14,
  //     name: 'E-commerce',
  //     icon: (
  //       <svg className='shrink-0 h-6 w-6' viewBox='0 0 24 24'>
  //         <path d='M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z' />
  //         <path d='M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z' />
  //         <path d='M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z' />
  //       </svg>
  //     ),
  //     path: '/',
  //     childItems: [
  //       { id: 1, name: 'Item01' },
  //       { id: 2, name: 'Item02' },
  //       { id: 3, name: 'Item03' },
  //     ],
  //   },
];

export default sideMenuItems;
