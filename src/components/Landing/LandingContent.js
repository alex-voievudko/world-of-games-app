import styled from 'styled-components'
// @mui
import { alpha } from '@mui/material/styles'
import { Box, Card, Typography } from '@mui/material'
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined'
import GamesOutlinedIcon from '@mui/icons-material/GamesOutlined'
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined'

// ----------------------------------------------------------------------

const CARDS = [
	{
		icon: <EngineeringOutlinedIcon color='secondary' sx={{ fontSize: 40 }} />,
		title: 'Developers',
		description:
			'Check the list of all the developers that are making computer games for different platforms',
	},
	{
		icon: <GamesOutlinedIcon color='error' sx={{ fontSize: 40 }} />,
		title: 'Games',
		description:
			'Easy get access to the list of most popular games in the world',
	},
	{
		icon: <WhatshotOutlinedIcon sx={{ color: '#FFCA28', fontSize: 40 }} />,
		title: 'Firebase Auth',
		description:
			'The app uses Firebase auth fuatures to manage user refistration and login',
	},
]

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`

const RootStyle = styled.div`
	padding-top: ${(props) => props.theme.spacing(15)};
	padding-bottom: ${(props) => props.theme.spacing(15)};
`

const CardStyle = styled(Card)`
	border: 1px solid ${(props) => props.theme.palette.grey[200]};
	max-width: 380px;
	min-height: 440px;
	margin: auto;
	text-align: center;
	padding: ${(props) => props.theme.spacing(10, 5, 0)};
	box-shadow: none;
	background-color: ${(props) => props.theme.palette.grey[200]};

	&.cardLeft {
		margin-top: -40px;
	}

	&.cardCenter {
		position: relative;
		margin-top: -80px;
		background-color: ${(props) => props.theme.palette.background.paper};
		box-shadow: -40px 40px 80px 0 rgba(145, 158, 171, 0.4);
		border: 1px solid ${(props) => props.theme.palette.grey[200]};
	}
`

// ----------------------------------------------------------------------

const LandingContent = () => {
	return (
		<RootStyle id='features'>
			<Box
				sx={{
					textAlign: 'center',
					mb: { xs: 10, md: 25 },
				}}
			>
				<Typography
					component='div'
					variant='overline'
					sx={{ mb: 2, color: 'text.disabled' }}
				>
					World of Games
				</Typography>
				<Typography variant='h2'>What features WoG has?</Typography>
			</Box>

			<Box
				sx={{
					display: 'grid',
					gap: { xs: 5, lg: 10 },
					gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
				}}
			>
				{CARDS.map((card, index) => (
					<CardStyle
						className={
							(index === 0 && 'cardLeft') || (index === 1 && 'cardCenter') || ''
						}
						key={card.title}
					>
						<Box
							component='div'
							sx={{
								mx: 'auto',
								width: 80,
								height: 80,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								filter: (theme) => shadowIcon(theme.palette.primary.main),
								...(index === 0 && {
									filter: (theme) => shadowIcon(theme.palette.info.main),
								}),
								...(index === 1 && {
									filter: (theme) => shadowIcon(theme.palette.error.main),
								}),
							}}
						>
							{card.icon}
						</Box>
						<Typography variant='h5' paragraph>
							{card.title}
						</Typography>
						<Typography sx={{ color: 'text.secondary' }}>
							{card.description}
						</Typography>
					</CardStyle>
				))}
			</Box>
		</RootStyle>
	)
}
export default LandingContent
