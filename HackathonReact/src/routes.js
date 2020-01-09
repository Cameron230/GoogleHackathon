export default [
  {
    path: '/about',
    name: 'About',
    loader: () => import('modules/About'),
  },
  {
    path: '/foodbanks',
    name: 'Food Banks',
    loader: () => import('modules/FoodBanks'),
  },
  {
    path: '/productsrequired',
    name: 'Products Required',
    loader: () => import('modules/ProductsRequired'),
  },
  {
    path: '/analytics',
    name: 'Analytics',
    loader: () => import('modules/Analytics'),
  },
]
