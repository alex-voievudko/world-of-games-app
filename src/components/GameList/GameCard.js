import { Link as RouterLink } from 'react-router-dom'
// @mui
import { Box, Card, Link, Typography, Stack, Divider } from '@mui/material'
// components
import GameRating from './GameRating'

// ----------------------------------------------------------------------

const GameCard = ({ game }) => {
	const { background_image, name, slug, rating, released, genres } = game

	return (
		<Card>
			<Box sx={{ position: 'relative' }}>
				{/* TODO: implement Label */}

				<Box
					sx={{
						width: '100%',
						height: '150px',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center top',
						backgroundSize: 'cover',
						backgroundImage: `url(${background_image})`,
					}}
				></Box>

				<Stack spacing={1} sx={{ p: 3 }}>
					<Stack
						direction='row'
						alignItems='center'
						justifyContent='space-between'
						sx={{ mb: '16px' }}
					>
						<Link to={slug} color='inherit' component={RouterLink}>
							<Typography variant='subtitle1'>{name}</Typography>
						</Link>
						<GameRating rating={rating} />
					</Stack>

					<Stack
						direction='row'
						alignItems='center'
						justifyContent='space-between'
					>
						<Typography variant='caption' sx={{ fontWeight: '600' }}>
							Release Date:
						</Typography>
						<Typography variant='caption' sx={{ color: 'text.secondary' }}>
							{released}
						</Typography>
					</Stack>

					<Divider />

					<Stack
						direction='row'
						alignItems='center'
						justifyContent='space-between'
					>
						<Typography variant='caption' sx={{ fontWeight: '600' }}>
							Genres:
						</Typography>
						<Box sx={{ display: 'flex', gap: '5px' }}>
							{genres?.map((genre, index) => {
								if (index === 3) return null

								return (
									<Typography
										key={genre.id}
										variant='caption'
										sx={{ color: 'text.secondary' }}
									>
										{(index ? ' | ' : '') + genre.name}
									</Typography>
								)
							})}
						</Box>
					</Stack>
				</Stack>
			</Box>
		</Card>
	)
}
export default GameCard
