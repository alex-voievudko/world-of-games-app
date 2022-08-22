import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// @mui
import { Container, Stack, Typography, Box } from '@mui/material'
// redux
import { fetchGameBySlug } from '../../redux/slices/games'
// components
import PageTitle from '../../components/PageTitle'
import Label from '../../components/Label'
import GameRating from '../../components/GameList/GameRating'
import SkeletonGameDetails from '../../components/Skeleton/SkeletonGameDetails'
import EmptyContent from '../../components/EmptyContent'

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const GameDetailsPage = () => {
	const dispatch = useDispatch()

	const { game, isLoading, error } = useSelector((state) => state.games)

	const { name = '' } = useParams()

	useEffect(() => {
		dispatch(fetchGameBySlug(name))
	}, [dispatch, name])

	if (isLoading) return <SkeletonGameDetails />

	return (
		<Container maxWidth='lg' sx={{ height: 1 }}>
			{game && (
				<>
					<PageTitle title={game.name} />

					<Stack
						direction='row'
						spacing={2}
						alignItems='center'
						sx={{
							width: 'calc(50% - 12px)',
							alignItems: 'center',
							// justifyContent: 'space-between',
						}}
					>
						<Label color='success'>{game.released}</Label>
						<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
							<Typography variant='subtitle2'>Platforms:</Typography>

							<Box sx={{ display: 'flex', gap: 1 }}>
								{game.platforms.map((platform, index) => {
									if (index >= 2) return null

									return (
										<Typography
											variant='subtitle2'
											sx={{ color: 'text.secondary' }}
										>
											{(index ? ' | ' : '') + platform.platform.name}
										</Typography>
									)
								})}
							</Box>
						</Box>
						<Box sx={{ flexGrow: 1 }}></Box>
						<GameRating rating={game.rating} />
					</Stack>

					{/* Game details */}
					<Box
						sx={{
							display: 'grid',
							gap: 3,
							gridTemplateColumns: 'repeat(2, 1fr)',
							mt: 4,
						}}
					>
						<Box>
							<Typography variant='h5' component='h2' sx={{ mb: 2 }}>
								About
							</Typography>
							<Typography variant='body2' component='p'>
								{game.description_raw}
							</Typography>
						</Box>
						{/* Image */}
						<Box
							component='img'
							src={game.background_image}
							alt={game.name}
							sx={{
								borderRadius: '16px',
								// height: 352,
							}}
						/>
					</Box>
				</>
			)}

			{error && <EmptyContent />}
		</Container>
	)
}
export default GameDetailsPage
