import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
// @mui
import { Button, Typography, Container, Box } from '@mui/material'
//
import { ReactComponent as EmptyIllustration } from '../assets/illustration_empty_content.svg'

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

const PageUnderConstraction = () => {
	return (
		<Container>
			<ContentStyle>
				<Typography variant='h3' component='h2'>
					Coming Soon!
				</Typography>
				<Typography sx={{ color: 'text.secondary' }}>
					We are currently working hard on this page!
				</Typography>
				<Box sx={{ mt: 4, mb: 4 }}>
					<EmptyIllustration />
				</Box>
				<Button to='/app' variant='contained' component={RouterLink}>
					Go to Home
				</Button>
			</ContentStyle>
		</Container>
	)
}
export default PageUnderConstraction
