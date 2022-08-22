// @mui
import { Box, Typography } from '@mui/material'
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const PageTitle = ({ title }) => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<Box sx={{ flexGrow: 1 }}>
				<Typography variant='h4' component='h1' gutterBottom>
					{title}
				</Typography>
			</Box>
		</Box>
	)
}
export default PageTitle
