import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
// @mui
import { Button, Typography, Container } from '@mui/material'
// components

// ----------------------------------------------------------------------

const ContentStyle = styled.div`
	max-width: 480px;
	margin: auto;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: ${(props) => props.theme.spacing(12, 0)};
	text-align: center;
	align-items: center;
`

// ----------------------------------------------------------------------

const Page404 = () => {
	return (
		<Container>
			<ContentStyle>
				<Typography variant='h2' component='h1'>
					404
				</Typography>
				<Typography variant='h3' component='h2'>
					Sorry, page not found!
				</Typography>
				<Typography sx={{ color: 'text.secondary' }} paragraph>
					Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
					mistyped the URL? Be sure to check your spelling.
				</Typography>
				<Button to='/app' variant='contained' component={RouterLink}>
					Go to Home
				</Button>
			</ContentStyle>
		</Container>
	)
}
export default Page404
