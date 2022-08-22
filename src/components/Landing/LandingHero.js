import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
// @mui
import { Box, Button, Stack, Typography } from '@mui/material'
//
import heroImg from '../../assets/hero.png'

// ----------------------------------------------------------------------

const RootStyle = styled.div`
	width: 100%;
	margin-top: 140px;
`

// ----------------------------------------------------------------------

const LandingHero = () => {
	return (
		<RootStyle>
			<Stack direction='row' sx={{ position: 'relative' }}>
				<Box
					flexGrow={1}
					sx={{
						height: '540px',
						background:
							'linear-gradient(99.81deg,#ffb800 32.48%,#f7db1c 79.47%)',
						borderRadius: '16px',
						position: 'relative',
						display: 'grid',
						gridTemplateColumns: 'repeat(2, 1fr)',
					}}
				>
					<Box>
						<Stack
							justifyContent='center'
							alignItems='center'
							height='100%'
							maxWidth='80%'
							margin='0 auto'
						>
							<Typography
								color='#FFF'
								variant='h3'
								component='h1'
								sx={{
									textTransform: 'uppercase',

									lineHeight: 1.25,
									marginBottom: 2,
									marginTop: '80px',
								}}
							>
								Welcome to world of games
							</Typography>
							<Typography
								color='#FFF'
								variant='h5'
								component='h2'
								sx={{ fontWeight: 400 }}
							>
								The largest video game database and video game discovery service
								powered by you!
							</Typography>
							<Button
								sx={{
									marginRight: 'auto',
									marginTop: '16px',
									color: '#000',
									backgroundColor: '#FFF',
									boxShadow: 0,
									'&:hover': {
										backgroundColor: '#F4F6F8',
									},
								}}
								variant='contained'
								component={RouterLink}
								to='/app'
							>
								Go to App
							</Button>
						</Stack>
					</Box>
					<Box sx={{ position: 'relative' }}>
						<Box
							component='img'
							src={heroImg}
							sx={{
								position: 'absolute',
								right: 0,
								bottom: -55,
								maxWidth: '120%',
							}}
						/>
					</Box>
				</Box>
			</Stack>
		</RootStyle>
	)
}
export default LandingHero
