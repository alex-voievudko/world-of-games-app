import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
// @mui
import { Grid, Box, Typography, Link } from '@mui/material'
// component
import LoginForm from '../../components/LoginForm/LoginForm'
//
import loginImg from '../../assets/login-img.jpg'

// ----------------------------------------------------------------------

const RootStyle = styled(Grid)`
	height: 100%;
`

const LeftPanel = styled(Grid)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: relative;
	background-image: url(${loginImg});
	background-repeat: no-repeat;
	background-size: auto 100%;
	background-position: center bottom;
`

const RightPanel = styled(Grid)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

// ----------------------------------------------------------------------

const LoginPage = () => {
	return (
		<RootStyle container>
			<LeftPanel item xs={7}></LeftPanel>
			<RightPanel item xs={5}>
				<Box sx={{ width: '320px', display: 'flex', flexDirection: 'column' }}>
					<Typography variant='h4' component='h1' sx={{ mb: 3 }}>
						Sign in to World of Games
					</Typography>

					<LoginForm />
					<Typography variant='subtitle2' component='p' sx={{ mt: '1rem' }}>
						Don’t have an account?{' '}
						<Link
							variant='subtitle2'
							component={RouterLink}
							to='/auth/register'
						>
							Sign Up
						</Link>
					</Typography>
				</Box>
			</RightPanel>
		</RootStyle>
	)
}
export default LoginPage
