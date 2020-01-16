export const VTEX_HOSTS = [
  'myvtex.com',
  'vtexcommercestable.com.br',
  'vtexcommercebeta.com.br',
  'vtexlocal.com.br',
];

export const VTEXMenu = [
  {
    name: 'Orders',
    path: '/orders',
    icon: 'Cart',
    children: [

      {
        name: 'Managment',
        path: '/orders/managment',
        icon: 'Cart',
        children: [
          { name: 'All Orders', icon: 'Cart', path: '~/admin/checkout', },
          { name: 'Subscriptions', icon: 'Cart', path: '~/admin/checkout/#/subscriptions', },
          { name: 'Settings', icon: 'Cart', path: '~/admin/checkout/#/configurations', },
        ]
      },

      {
        name: 'Stock & Shipping',
        path: '/orders/logistics',
        icon: 'Cart',
        children: [
          { name: 'Mainboard', icon: 'Cart', path: '~/admin/logistics/', },
          { name: 'Shipping Fees', icon: 'Cart', path: '~/admin/logistics/#/freight-table-management', },
          { name: 'Freight Simulation', icon: 'Cart', path: '~/admin/logistics/#/freight-simulation', },
          { name: 'Inventory', icon: 'Cart', path: '~/admin/logistics/#/warehouse-management', },
          { name: 'Geolocation', icon: 'Cart', path: '~/admin/logistics/#/geolocation', },
          { name: 'Holidays', icon: 'Cart', path: '~/admin/logistics/#/holidays', },
          { name: 'Settings', icon: 'Cart', path: '~/admin/logistics/#/config', },
          { name: 'Pickup Points', icon: 'Cart', path: '~/admin/logistics/#/pickup-points', },
        ]
      }

    ]
  },

  { name: 'Transactions', path: '/transactions', icon: 'CreditCard' },
  { name: 'Products', path: '/products', icon: 'Catalog' },
  {
    name: 'Analytics', path: '/analytics', icon: 'BarChart',
  },
  { name: 'Customer', path: '/customer', icon: 'Group' },
  { name: 'Store', path: '/store', icon: 'Template' },
  { name: 'Marketplace', path: '/marketplace', icon: 'Action' },
  { name: 'Account', path: '/account', icon: 'UserSettings' },

];
