import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import App from './App';
import { LoginPage } from './pages/LoginPage';
import { PageWithNavbar } from './pages/PageWithNavbar';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/home',
    element: (
      <PageWithNavbar>
        <HomePage />
      </PageWithNavbar>
    )
  }
]);
