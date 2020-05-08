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
      },
      {
        name: 'Trade Policies',
        path: '~/admin/Site/Store.aspx',
        icon: 'Language', //Tools
      },
    ],
  },

  {
    name: 'Orders',
    path: '/orders',
    icon: 'Notes',
    children: [
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
        path: '~/admin/pci-gateway/#/rules',
        icon: 'SettingsOption',
      },
    ],
  },
  {
    name: 'Analytics',
    path: '~/admin/insights',
    icon: 'BarChart',
  },
  {
    name: 'Customer',
    path: '/customer',
    icon: 'Group',
    children: [
      {
        name: 'Master Data',
        icon: 'Cloud',
      },
      {
        name: 'Message Center',
        path: '/costumer/messages',
        icon: 'MailOption',
        children: [
          {
            name: 'Templates',
            icon: 'Template',
            path: '~/admin/message-center/#/templates',
          },
          {
            name: 'Remetentes',
            icon: 'User',
            path: '~/admin/message-center/#/providers',
          },

        ],
      },
    ],
  },
  {
    name: 'Marketplace',
    path: '/marketplace',
    icon: 'Action',
    children: [
      {
        name: 'Sellers',
        icon: 'Template',
        path: '/marketplace/sellers',
        children: [
          {
            name: 'Sellers',
            icon: 'Workshop',
            path: '~/admin/Site/Seller.aspx',
          },
          {
            name: 'SKU Binding',
            icon: 'Contract',
            path: '~/admin/Site/SkuSeller.aspx',
          },
          {
            name: 'Received SKUs',
            icon: 'CloudDownload',
            path: '~/admin/received-skus/pending',
          },
          {
            name: 'Categories & Brands',
            icon: 'Tree',
            path: '~/admin/suggestion/config/catalog-mapping',
          },
        ],
      },
      {
        name: 'Integrations',
        icon: 'Integration',
        path: '/marketplace/integrations',
        children: [
          {
            name: 'Orders',
            icon: 'Notes',
            path: '~/admin/bridge/#/marketplace/order',
          },
          {
            name: 'Products',
            icon: 'Bike',
            path: '~/admin/bridge/#/marketplace/product',
          },
          {
            name: 'Tracking',
            icon: 'Deliver',
            path: '~/admin/bridge/#/marketplace/tracking',
          },
          {
            name: 'Price',
            icon: 'Currency',
            path: '~/admin/bridge/#/marketplace/price',
          },
          {
            name: 'Inventory',
            icon: 'Folder',
            path: '~/admin/bridge/#/marketplace/stock',
          },
          {
            name: 'Settings',
            icon: 'SettingsOption',
            path: '~/admin/bridge/#/settings',
          },
        ],
      },
    ],
  },
  {
    name: 'Account',
    path: '/account',
    icon: 'UserSettings',
    children: [
      {
        name: 'Authentications',
        icon: 'Shield',
        path: '~/admin/vtexid/#/',
      },
      {
        name: 'Users',
        icon: 'Group',
        path: '~/admin/license-manager/#/user-list',
      },
      {
        name: 'Billing',
        icon: 'Notes',
        path: '~/admin/billing/invoices',
      },

    ],
  },

];
