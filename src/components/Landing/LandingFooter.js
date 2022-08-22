import styled from 'styled-components'
// @mui
import { Container, Stack, Typography } from '@mui/material'
// components
import Logo from '../Logo'

// ----------------------------------------------------------------------

const RootStyle = styled.div`
	position: relative;
	background-color: ${(props) => props.theme.palette.background.default};
`

// ----------------------------------------------------------------------

const LandingFooter = () => {
	return (
		<RootStyle>
			<Container sx={{ pt: 10 }}>
				<Stack spacing={1} sx={{ m: '0 auto', alignItems: 'center' }}>
					<Logo />
					<Typography
						component='p'
						variant='caption'
						sx={{
							mt: 10,
							pb: 5,
							fontSize: 13,
							textAlign: 'center',
							flexGrow: 0,
						}}
					>
						© 2022. All rights reserved
					</Typography>
				</Stack>
			</Container>
		</RootStyle>
	)
}
export default LandingFooter
