export const VTEX_HOSTS = [
  { label: 'my-vtex', host: 'myvtex.com', },
  { label: 'stable', host: 'vtexcommercestable.com.br', },
  { label: 'beta', host: 'vtexcommercebeta.com.br', },
  { label: 'local', host: 'vtexlocal.com.br', },
];

export const VTEXMenu = [
  {
    name: 'Orders',
    path: '/orders',
    icon: 'Notes',
    children: [

      {
        name: 'Managment',
        path: '/orders/managment',
        icon: 'Briefcase',
        children: [
          { name: 'All Orders', icon: 'Cart', path: '~/admin/checkout', },
          { name: 'Subscriptions', icon: 'Cart', path: '~/admin/checkout/#/subscriptions', },
          { name: 'Settings', icon: 'Cart', path: '~/admin/checkout/#/configurations', },
        ]
      },

      {
        name: 'Stock & Shipping',
        path: '/orders/logistics',
        icon: 'Deliver',
        children: [
          { name: 'Mainboard', icon: 'LineChart', path: '~/admin/logistics/', },
          { name: 'Shipping Fees', icon: 'Flag', path: '~/admin/logistics/#/freight-table-management', },
          { name: 'Freight Simulation', icon: 'Calculator', path: '~/admin/logistics/#/freight-simulation', },
          { name: 'Inventory', icon: 'Folder', path: '~/admin/logistics/#/warehouse-management', },
          { name: 'Geolocation', icon: 'Compass', path: '~/admin/logistics/#/geolocation', },
          { name: 'Holidays', icon: 'Calendar', path: '~/admin/logistics/#/holidays', },
          { name: 'Pickup Points', icon: 'Location', path: '~/admin/logistics/#/pickup-points', },
          { name: 'Settings', icon: 'SettingsOption', path: '~/admin/logistics/#/config', },
        ]
      }

    ]
  },

  {
    name: 'Transactions',
    path: '/transactions',
    icon: 'CreditCard',
    children: [
      {
        name: 'Payments',
        icon: 'Currency',
        path: '/transactions/payments',
        children: [
          {
            name: 'Transactions',
            path: '~/admin/pci-gateway/#/transactions',
            icon: 'Transaction',
          },
          {
            name: 'Bank conciliations',
            path: '~/admin/pci-gateway/#/bank-conciliations',
            icon: 'Bundle',
          },
          {
            name: 'Worth Shopping',
            path: '~/admin/Site/Vale.aspx',
            icon: 'Ticket',
          },
          {
            name: 'Settings',
            path: '~/admin/Site/Vale.aspx',
            icon: 'SettingsOption',
          }
        ]
      },
    ]
  },
  {
    name: 'Products',
    path: '/products',
    icon: 'Catalog',
    children: [
      {
        name: 'Produtos e SKUs',
        path: '~/admin/Site/Produto.aspx',
        icon: 'Bike',
      }
    ]
  },
  {
    name: 'Analytics', path: '/analytics', icon: 'BarChart',
  },
  { name: 'Customer', path: '/customer', icon: 'Group' },
  {
    name: 'Store',
    path: '/store',
    icon: 'Template',
    children: [
      {
        name: 'CMS',
        path: '~/admin/Site/Produto.aspx',
        icon: 'Template',
      },
      {
        name: 'Checkout',
        path: '~/admin/portal',
        icon: 'Basket',
      }
    ]
  },
  { name: 'Marketplace', path: '/marketplace', icon: 'Action' },
  { name: 'Account', path: '/account', icon: 'UserSettings' },

];
