const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/index_page.vue') }],
  },
  {
    path: '/user',
    component: () => import('src/pages/user_data.vue'),
  },
  {
    path: '/detail_booking',
    component: () => import('src/pages/detail_booking.vue'),
  },
  {
    path: '/payment',
    component: () => import('src/pages/payment_page.vue'),
  },
  {
    path: '/booking_confirmed',
    component: () => import('src/pages/booking_confirmed.vue'),
  },
  {
    path: '/access_limited',
    component: () => import('src/pages/access_limited.vue'),
  },
  {
    path: '/nsm_booking',
    component: () => import('src/pages/nsm_booking.vue'),
  },
  {
    path: '/nsm_booking/museum',
    component: () => import('src/pages/nsm_booking_museum.vue'),
  },
  {
    path: '/nsm_booking/event',
    component: () => import('src/pages/nsm_booking_event.vue'),
  },
  {
    path: '/nsm_booking/order',
    component: () => import('src/pages/nsm_booking_order.vue'),
  },
  {
    path: '/nsm_booking/ordersummary',
    component: () => import('src/pages/nsm_booking_ordersum.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/error_not-found.vue'),
  },
]

export default routes
