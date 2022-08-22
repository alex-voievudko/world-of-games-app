import { Outlet } from 'react-router-dom'
// @mui
import { Box, Stack } from '@mui/material'
// components
import LandingHeader from '../components/Landing/LandingHeader'
import LandingFooter from '../components/Landing/LandingFooter'

// ----------------------------------------------------------------------

const LandingLayout = () => {
	return (
		<Stack sx={{ minHeight: 1 }}>
			<LandingHeader />

			<Outlet />

			<Box sx={{ flexGrow: 1 }} />

			<LandingFooter />
		</Stack>
	)
}
export default LandingLayout
