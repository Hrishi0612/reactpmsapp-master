// ** React Imports
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Chat = lazy(() => import('../../views/apps/chat'))
const Todo = lazy(() => import('../../views/apps/todo'))
const Email = lazy(() => import('../../views/apps/email'))
const Kanban = lazy(() => import('../../views/apps/kanban'))
const Calendar = lazy(() => import('../../views/apps/calendar'))

const BasicDetails = lazy(() => import('../../views/apps/configuration/basicguestdetails'))
const SourceGroup = lazy(() => import('../../views/apps/configuration/sourcegroup'))
const PackageDetails = lazy(() => import('../../views/apps/configuration/package'))
const Reservation = lazy(() => import('../../views/apps/reservation'))
const Dashboard = lazy(() => import('../../views/apps/dashboard'))
const Financials = lazy(() => import('../../views/apps/financials'))
const FrontDesk = lazy(() => import('../../views/apps/frontdesk'))
const Miscellaneous = lazy(() => import('../../views/apps/miscellaneous'))
const Reports = lazy(() => import('../../views/apps/reports'))
const RoomInventory = lazy(() => import('../../views/apps/roominventory'))

const InvoiceAdd = lazy(() => import('../../views/apps/invoice/add'))
const InvoiceList = lazy(() => import('../../views/apps/invoice/list'))
const InvoiceEdit = lazy(() => import('../../views/apps/invoice/edit'))
const InvoicePrint = lazy(() => import('../../views/apps/invoice/print'))
const InvoicePreview = lazy(() => import('../../views/apps/invoice/preview'))

const EcommerceShop = lazy(() => import('../../views/apps/ecommerce/shop'))
const EcommerceDetail = lazy(() => import('../../views/apps/ecommerce/detail'))
const EcommerceWishlist = lazy(() => import('../../views/apps/ecommerce/wishlist'))
const EcommerceCheckout = lazy(() => import('../../views/apps/ecommerce/checkout'))

const UserList = lazy(() => import('../../views/apps/user/list'))
const UserView = lazy(() => import('../../views/apps/user/view'))

const Roles = lazy(() => import('../../views/apps/roles-permissions/roles'))
const Permissions = lazy(() => import('../../views/apps/roles-permissions/permissions'))

const AppRoutes = [
  {
    element: <Email />,
    path: '/apps/email',
    meta: {
      appLayout: true,
      className: 'email-application'
    }
  },
  {
    element: <SourceGroup />,
    path: '/apps/configuration/sourcegroup',
    meta: {
      appLayout: true,
      className: 'configuration-pms'
    }
  },
  {
    element: <BasicDetails />,
    path: '/apps/configuration/guestdetails',
    meta: {
      // appLayout: true,
      className: 'configuration-pms'
    }
  },
  {
    element: <PackageDetails />,
    path: '/apps/configuration/package',
    meta: {
      // appLayout: true,
      className: 'configuration-pms'
    }
  },
  {
    element: <Reservation />,
    path: '/apps/reservation',
    meta: {
      // appLayout: true,
      className: 'configuration-pms'
    }
  },
  {
    element: <Dashboard />,
    path: '/apps/dashboard',
    meta: {
      // appLayout: true,
      className: 'configuration-pms'
    }
  },
  {
    element: <Financials />,
    path: '/apps/financials',
    meta: {
      // appLayout: true,
      className: 'configuration-pms'
    }
  },
  {
    element: <FrontDesk />,
    path: '/apps/frontDesk',
    meta: {
      // appLayout: true,
      className: 'configuration-pms'
    }
  },
  {
    element: <Miscellaneous />,
    path: '/apps/miscellaneous',
    meta: {
      // appLayout: true,
      className: 'configuration-pms'
    }
  },
  {
    element: <Reports />,
    path: '/apps/reports',
    meta: {
      // appLayout: true,
      className: 'configuration-pms'
    }
  },
  {
    element: <RoomInventory />,
    path: '/apps/roominventory',
    meta: {
      // appLayout: true,
      className: 'configuration-pms'
    }
  },
  {
    element: <Email />,
    path: '/apps/email/:folder',
    meta: {
      appLayout: true,
      className: 'email-application'
    }
  },
  {
    element: <Email />,
    path: '/apps/email/label/:label',
    meta: {
      appLayout: true,
      className: 'email-application'
    }
  },
  {
    element: <Email />,
    path: '/apps/email/:filter'
  },
  {
    path: '/apps/chat',
    element: <Chat />,
    meta: {
      appLayout: true,
      className: 'chat-application'
    }
  },
  {
    element: <Todo />,
    path: '/apps/todo',
    meta: {
      appLayout: true,
      className: 'todo-application'
    }
  },
  {
    element: <Todo />,
    path: '/apps/todo/:filter',
    meta: {
      appLayout: true,
      className: 'todo-application'
    }
  },
  {
    element: <Todo />,
    path: '/apps/todo/tag/:tag',
    meta: {
      appLayout: true,
      className: 'todo-application'
    }
  },
  {
    element: <Calendar />,
    path: '/apps/calendar'
  },
  {
    element: <Kanban />,
    path: '/apps/kanban',
    meta: {
      appLayout: true,
      className: 'kanban-application'
    }
  },
  {
    element: <InvoiceList />,
    path: '/apps/invoice/list'
  },
  {
    element: <InvoicePreview />,
    path: '/apps/invoice/preview/:id'
  },
  {
    path: '/apps/invoice/preview',
    element: <Navigate to='/apps/invoice/preview/4987' />
  },
  {
    element: <InvoiceEdit />,
    path: '/apps/invoice/edit/:id'
  },
  {
    path: '/apps/invoice/edit',
    element: <Navigate to='/apps/invoice/edit/4987' />
  },
  {
    element: <InvoiceAdd />,
    path: '/apps/invoice/add'
  },
  {
    path: '/apps/invoice/print',
    element: <InvoicePrint />,
    meta: {
      layout: 'blank'
    }
  },
  {
    element: <EcommerceShop />,
    path: '/apps/ecommerce/shop',
    meta: {
      className: 'ecommerce-application'
    }
  },
  {
    element: <EcommerceWishlist />,
    path: '/apps/ecommerce/wishlist',
    meta: {
      className: 'ecommerce-application'
    }
  },
  {
    path: '/apps/ecommerce/product-detail',
    element: <Navigate to='/apps/ecommerce/product-detail/apple-i-phone-11-64-gb-black-26' />,
    meta: {
      className: 'ecommerce-application'
    }
  },
  {
    path: '/apps/ecommerce/product-detail/:product',
    element: <EcommerceDetail />,
    meta: {
      className: 'ecommerce-application'
    }
  },
  {
    path: '/apps/ecommerce/checkout',
    element: <EcommerceCheckout />,
    meta: {
      className: 'ecommerce-application'
    }
  },
  {
    element: <UserList />,
    path: '/apps/user/list'
  },
  {
    path: '/apps/user/view',
    element: <Navigate to='/apps/user/view/1' />
  },
  {
    element: <UserView />,
    path: '/apps/user/view/:id'
  },
  {
    element: <Roles />,
    path: '/apps/roles'
  },
  {
    element: <Permissions />,
    path: '/apps/permissions'
  }
]

export default AppRoutes
