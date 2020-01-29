export const VTEX_HOSTS = [
  { label: 'my-vtex', host: 'myvtex.com', },
  { label: 'stable', host: 'vtexcommercestable.com.br', },
  { label: 'beta', host: 'vtexcommercebeta.com.br', },
  { label: 'local', host: 'vtexlocal.com.br', },
];

export const VTEXMenu = [
  {
    name: 'Products',
    path: '/products',
    icon: 'Catalog',
    children: [
      {
        name: 'Products & SKUs',
        path: '~/admin/Site/Produto.aspx',
        icon: 'Bike',
      },
      {
        name: 'Prices',
        path: '~/admin/pricing/#/prices',
        icon: 'Currency',
      },
      {
        name: 'Promos & Fees',
        path: '~/admin/rnb/#/campaigns',
        icon: 'Tag',
      }
    ]
  },
  {
    name: 'Store',
    path: '/store',
    icon: 'Template',
    children: [
      {
        name: 'CMS',
        path: '~/admin/a',
        icon: 'Template',
      },
      {
        name: 'Checkout',
        path: '~/admin/portal',
        icon: 'Basket',
      }
    ]
  },

  {
    name: 'Orders',
    path: '/orders',
    icon: 'Notes',
    children: [

      // {
      //   name: 'Managment',
      //   path: '/orders/managment',
      //   icon: 'Briefcase',
      //   children: [
      //   ]
      // },
      { name: 'All Orders', icon: 'UnorderedList', path: '~/admin/checkout', },
      { name: 'Subscriptions', icon: 'Link', path: '~/admin/checkout/#/subscriptions', },

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
      },

      { name: 'Settings', icon: 'SettingsOption', path: '~/admin/checkout/#/configurations', },

    ]
  },

  {
    name: 'Payments',
    path: '/payments',
    icon: 'CreditCard',
    children: [
      {
        name: 'Transactions',
        path: '~/admin/pci-gateway/#/transactions',
        icon: 'Transaction',
      },
      {
        name: 'Bank Conciliations',
        path: '~/admin/pci-gateway/#/bank-conciliations',
        icon: 'Bundle',
      },
      {
        name: 'Gift Card',
        path: '~/admin/Site/Vale.aspx',
        icon: 'Gift',
      },
      {
        name: 'Settings',
        path: '~/admin/Site/Vale.aspx',
        icon: 'SettingsOption',
      }


      // {
      //   name: 'Payments',
      //   icon: 'Currency',
      //   path: '/transactions/payments',
      //   children: [
      //   ]
      // },
    ]
  },

  {
    name: 'Analytics', path: '/analytics', icon: 'BarChart', disabled: true,
  },
  { name: 'Customer', path: '/customer', icon: 'Group', disabled: true, },
  { name: 'Marketplace', path: '/marketplace', icon: 'Action', disabled: true, },
  { name: 'Account', path: '/account', icon: 'UserSettings', disabled: true, },

];
