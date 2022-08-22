import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
// @mui
import { Grid, Box, Typography, Link } from '@mui/material'
// component
import RegisterForm from '../../components/RegisterForm/RegisterForm'
//
import registrationBg from '../../assets/registration-bg.jpg'

// ----------------------------------------------------------------------

const RootStyle = styled(Grid)`
	height: 100%;
`

const LeftPanel = styled(Grid)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-image: url(${registrationBg});
	background-repeat: no-repeat;
	background-size: auto 100%;
	background-position: left bottom;
`

const RightPanel = styled(Grid)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

// ----------------------------------------------------------------------

const RegisterPage = () => {
	return (
		<RootStyle container>
			<LeftPanel item xs={7}></LeftPanel>
			<RightPanel item xs={5}>
				<Box sx={{ width: '320px', display: 'flex', flexDirection: 'column' }}>
					<Typography variant='h4' component='h1' sx={{ mb: 1 }}>
						Welcome aboard 👋
					</Typography>
					<Typography sx={{ color: 'text.secondary', mb: 3 }}>
						Free forever. No credit card needed.
					</Typography>

					<RegisterForm />
					<Typography variant='subtitle2' component='p' sx={{ mt: '1rem' }}>
						Already have an account?{' '}
						<Link variant='subtitle2' component={RouterLink} to='/auth/login'>
							Login
						</Link>
					</Typography>
				</Box>
			</RightPanel>
		</RootStyle>
	)
}
export default RegisterPage
