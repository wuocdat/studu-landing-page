import { LayoutTypes } from '@/@types/layout';

export type AppConfig = {
  apiPrefix: string;
  authenticatedEntryPath: string;
  unAuthenticatedEntryPath: string;
  enableMock: boolean;
  locale: string;
  layoutType: LayoutTypes;
};

const appConfig: AppConfig = {
  layoutType: LayoutTypes.SimpleSideBar,
  apiPrefix: import.meta.env.VITE_BASE_URL,
  authenticatedEntryPath: '/dashboard',
  unAuthenticatedEntryPath: '/sign-in',
  enableMock: false,
  locale: 'vi',
};

export default appConfig;
