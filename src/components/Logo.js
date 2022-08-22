// @mui
import { Box } from '@mui/material'
//
import logo from '../assets/logo.png'

// ----------------------------------------------------------------------

const Logo = () => {
	return (
		<Box sx={{ width: 40, height: 40 }}>
			<img src={logo} alt='logo' />
		</Box>
	)
}

export default Logo
