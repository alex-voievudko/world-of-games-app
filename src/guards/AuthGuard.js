import { Navigate } from 'react-router-dom'
// hooks
import useAuth from '../hooks/useAuth'
// pages
// components
import LoadingScreen from '../components/LoadingScreen'
// ----------------------------------------------------------------------

const AuthGuard = ({ children }) => {
	const { isAuthenticated, isInitialized } = useAuth()

	if (!isInitialized) {
		return <LoadingScreen />
	}

	if (!isAuthenticated) {
		return <Navigate to='/auth/login' />
	}

	return <>{children}</>
}
export default AuthGuard
