//@mui
import { Stack, Typography } from '@mui/material'
//
import { ReactComponent as EmptyIllustration } from '../assets/illustration_empty_content.svg'
// ----------------------------------------------------------------------

const EmptyContent = () => {
	return (
		<Stack
			alignItems='center'
			justifyContent='center'
			sx={{ width: 1, height: 1 }}
		>
			<EmptyIllustration />
			<Typography variant='h5' component='h1' color='error' sx={{ mt: 3 }}>
				Error!
			</Typography>
			<Typography
				variant='body2'
				component='h1'
				sx={{ color: 'text.secondary', fontWeight: 500 }}
			>
				Something went wrong. Please try again later.
			</Typography>
		</Stack>
	)
}
export default EmptyContent
