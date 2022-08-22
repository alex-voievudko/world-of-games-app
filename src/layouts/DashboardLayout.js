import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
// @mui
import { Box } from '@mui/material'

// components
import DashboardHeader from '../components/Dashboard/DashboardHeader'
import DashboardNavbar from '../components/Dashboard/DashboardNavbar'

// ----------------------------------------------------------------------

const MainStyle = styled.main`
	flex-grow: 1;
	padding-left: 16px;
	padding-right: 16px;
	padding-top: 116px;
	padding-bottom: 116px;
	width: calc(100% - 280px);
`

// ----------------------------------------------------------------------

const AppLayout = () => {
	return (
		<Box sx={{ display: 'flex', minHeight: 1 }}>
			<DashboardHeader />
			<DashboardNavbar />
			<MainStyle>
				<Outlet />
			</MainStyle>
		</Box>
	)
}
export default AppLayout
