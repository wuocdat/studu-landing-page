import { lazy } from 'react';
import type { Routes } from '@/@types/routes';

const authRoute: Routes = [
  {
    key: 'signIn',
    path: `/sign-in`,
    component: lazy(() => import('@/pages/auth/SignIn')),
    authority: [],
  },
  {
    key: 'loginSelection',
    path: '/login-selection',
    component: lazy(() => import('@/pages/auth/LoginSelection')),
    authority: [],
  },
  {
    key: 'studentRegister',
    path: '/student-register',
    component: lazy(() => import('@/pages/auth/StudentRegisterPage')),
    authority: [],
  },
  {
    key: 'tutorRegister',
    path: '/tutor-register',
    component: lazy(() => import('@/pages/auth/TutorRegisterPage')),
    authority: [],
  },
  {
    key: 'resetPassword',
    path: '/reset-password',
    component: lazy(() => import('@/pages/auth/ResetPassword')),
    authority: [],
  },
  // {
  //   key: 'signUp',
  //   path: `/sign-up`,
  //   component: lazy(() => import('@/views/auth/SignUp')),
  //   authority: []
  // },
];

export default authRoute;
