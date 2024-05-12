// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import RegisterComponent from '@/components/RegisterComponent';
import ProfileComponent from '@/components/ProfileComponent.vue';
import InvoiceComponent from '@/components/invoice/InvoiceComponent.vue';
import CreatingComponent from '@/components/tracking/CreatingComponent.vue';
import ListingComponent from '@/components/tracking/ListingComponent.vue';


import { useAuth } from '../services/auth';

const { state } = useAuth();

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'ProfileComponent',
    component: ProfileComponent,
  },
  {
    path: '/invoice',
    name: 'InvoiceComponent',
    component: InvoiceComponent,
  },
  {
    path: '/track/creating',
    name: 'CreatingComponent',
    component: CreatingComponent,
  },
  {
    path: '/track/listing',
    name: 'ListingComponent',
    component: ListingComponent,
  },
  {
    path: '/register',
    name: 'RegisterComponent',
    component: RegisterComponent,
    // meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !state.isAuthenticated) {
    return next('/');
  }
  next();
});

export default router;
