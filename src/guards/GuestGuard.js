import { Navigate } from 'react-router-dom'
// hooks
import useAuth from '../hooks/useAuth'
// components
import LoadingScreen from '../components/LoadingScreen'

const GuestGuard = ({ children }) => {
	const { isAuthenticated, isInitialized } = useAuth()
	console.log(isInitialized)

	if (isAuthenticated) {
		return <Navigate to='/app' />
	}

	if (!isInitialized) {
		return <LoadingScreen />
	}

	return <>{children}</>
}
export default GuestGuard
