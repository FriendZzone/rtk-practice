import { PATH } from 'app:constants';
import { IRouter } from 'interfaces/route';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/Home'));
const LandingPage = lazy(() => import('pages/LandingPage'));

const routerList: Array<IRouter> = [
  {
    name: 'Landing',
    path: PATH.LANDING,
    element: <LandingPage />
  },
  {
    name: 'Home',
    path: PATH.HOME,
    element: <HomePage />
  }
];

export default routerList;
