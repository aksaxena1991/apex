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
    ]},
  {path: '', title: 'Setting', icon: 'ft-settings', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '/setting/profile',
        title: 'User Profile',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/setting/app-setting',
        title: 'App Settings',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ]}
  ];
