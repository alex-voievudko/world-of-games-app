import { Navigate, useRoutes } from 'react-router-dom'
// layouts
import LandingLayout from '../layouts/LandingLayout'
import AuthLayout from '../layouts/AuthLayout'
import DashboardLayout from '../layouts/DashboardLayout'
import EmptyLayout from '../layouts/EmptyLayout'
// guards
import GuestGuard from '../guards/GuestGuard'
import AuthGuard from '../guards/AuthGuard'
// pages
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import LandingPage from '../pages/landing/LandingPage'
import GamesPage from '../pages/games/GamesPage'
import GameDetailsPage from '../pages/games/GameDetailsPage'
import DevelopersPage from '../pages/developers/DevelopersPage'
import Page404 from '../pages/Page404'
import PageUnderConstraction from '../pages/PageUnderConstraction'

// ----------------------------------------------------------------------

const Router = () => {
	return useRoutes([
		{
			path: 'auth',
			element: (
				<GuestGuard>
					<AuthLayout />
				</GuestGuard>
			),
			children: [
				{ path: 'login', element: <LoginPage /> },
				{ path: 'register', element: <RegisterPage /> },
			],
		},
		{
			path: 'app',
			element: (
				<AuthGuard>
					<DashboardLayout />
				</AuthGuard>
			),
			children: [
				{ element: <Navigate to='games' replace />, index: true },
				{ path: 'games', element: <GamesPage /> },
				{ path: 'games/:name', element: <GameDetailsPage /> },
				{ path: 'developers', element: <DevelopersPage /> },
				{
					path: 'settings',
					element: <Navigate to='/coming-soon' replace />,
					index: true,
				},
				{
					path: 'profile',
					element: <Navigate to='/coming-soon' replace />,
					index: true,
				},
			],
		},
		{
			path: '*',
			element: <EmptyLayout />,
			children: [
				{ path: 'coming-soon', element: <PageUnderConstraction /> },
				{ path: '404', element: <Page404 /> },
				{ path: '*', element: <Navigate to='/404' replace /> },
			],
		},
		{
			path: '/',
			element: <LandingLayout />,
			children: [{ element: <LandingPage />, index: true }],
		},
		{ path: '*', element: <Navigate to='/404' replace /> },
	])
}

export default Router
