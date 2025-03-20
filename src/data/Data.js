import {
  FaBoxes,
  FaChartPie,
  FaClock,
  FaMoneyBill,
  FaFileInvoice,
  FaCog
} from 'react-icons/fa'

// chart data
export const data = [
  { name: 'Mon', value: 100 },
  { name: 'Tue', value: 200 },
  { name: 'Wed', value: 150 },
  { name: 'Thu', value: 250 },
  { name: 'Fri', value: 300 },
  { name: 'Sat', value: 350 }
]

// graph data
export const productGraphData = [
  { month: 'Jan', value: 500 },
  { month: 'Feb', value: 700 },
  { month: 'Mar', value: 1200 },
  { month: 'Apr', value: 900 },
  { month: 'May', value: 1500 },
  { month: 'Jun', value: 1134 }
]

export const earningsGraphData = [
  { month: 'Jan', value: 3000 },
  { month: 'Feb', value: 3500 },
  { month: 'Mar', value: 4000 },
  { month: 'Apr', value: 4200 },
  { month: 'May', value: 4100 },
  { month: 'Jun', value: 4231 }
]

// product data
export const products = [
  {
    name: 'Niky - Icon 3D Pack',
    category: '3D Illustrations',
    image: '/arrow.png'
  },
  {
    name: 'Lika - 3D Abstract',
    category: '3D Illustrations',
    image: '/arrow.png'
  },
  { name: 'Cube - 3D', category: '3D Illustrations', image: '/arrow.png' },
  {
    name: 'Heady - 3D Head',
    category: '3D Illustrations',
    image: '/arrow.png'
  },
  {
    name: 'Astro Illustrations',
    category: 'Illustrations',
    image: '/arrow.png'
  }
]

// sidebar data
export const menuItems = [
  { name: 'Overview', icon: FaChartPie },
  { name: 'Products', icon: FaBoxes },
  { name: 'Campaigns', icon: FaClock },
  { name: 'Schedules', icon: FaClock },
  { name: 'Payouts', icon: FaMoneyBill },
  { name: 'Statements', icon: FaFileInvoice },
  { name: 'Settings', icon: FaCog }
]
