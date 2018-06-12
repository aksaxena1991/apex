import {RouteInfo} from './sidebar.metadata';

// Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'ft-home',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [ ]
  },
  {
    path: '', title: 'Inventory', icon: 'ft-box', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [

      {
        path: '',
        title: 'Category',
        icon: '',
        class: 'has-sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [
          {
            path: '/inventory/add-category',
            title: 'Add Category',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/inventory/view-category',
            title: 'View Category',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          }
        ]
      },
      {
        path: '',
        title: 'Products',
        icon: '',
        class: 'has-sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [
          {
            path: '/inventory/add-product',
            title: 'Add Product',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/inventory/view-product',
            title: 'View Product',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          }
        ]
      }
    ]
  },
  // {
  //   path: '', title: 'Pages', icon: 'ft-copy', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
  //   submenu: [
  //     {
  //       path: '/pages/forgotpassword',
  //       title: 'Forgot Password',
  //       icon: '',
  //       class: '',
  //       badge: '',
  //       badgeClass: '',
  //       isExternalLink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/pages/login',
  //       title: 'Login',
  //       icon: '',
  //       class: '',
  //       badge: '',
  //       badgeClass: '',
  //       isExternalLink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/pages/register',
  //       title: 'Register',
  //       icon: '',
  //       class: '',
  //       badge: '',
  //       badgeClass: '',
  //       isExternalLink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/pages/profile',
  //       title: 'User Profile',
  //       icon: '',
  //       class: '',
  //       badge: '',
  //       badgeClass: '',
  //       isExternalLink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/pages/lockscreen',
  //       title: 'Lock Screen',
  //       icon: '',
  //       class: '',
  //       badge: '',
  //       badgeClass: '',
  //       isExternalLink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/pages/invoice',
  //       title: 'Invoice',
  //       icon: '',
  //       class: '',
  //       badge: '',
  //       badgeClass: '',
  //       isExternalLink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/pages/error',
  //       title: 'Error',
  //       icon: '',
  //       class: '',
  //       badge: '',
  //       badgeClass: '',
  //       isExternalLink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/pages/comingsoon',
  //       title: 'Coming Soon',
  //       icon: '',
  //       class: '',
  //       badge: '',
  //       badgeClass: '',
  //       isExternalLink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/pages/maintenance',
  //       title: 'Maintenance',
  //       icon: '',
  //       class: '',
  //       badge: '',
  //       badgeClass: '',
  //       isExternalLink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/pages/gallery',
  //       title: 'Gallery',
  //       icon: '',
  //       class: '',
  //       badge: '',
  //       badgeClass: '',
  //       isExternalLink: false,
  //       submenu: []
  //     },
  //   ]
  // }
  {path: '', title: 'Ordering', icon: 'ft-copy', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '/ordering/takeaway',
        title: 'Takeaway',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ]}
  ];
