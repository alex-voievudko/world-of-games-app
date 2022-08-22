import { useEffect } from 'react'
// @mui
import { Container, Box } from '@mui/material'
import { LoadingButton } from '@mui/lab'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllGames, fetchNextGamesPage } from '../../redux/slices/games'
// components
import GameList from '../../components/GameList/GameList'
import PageTitle from '../../components/PageTitle'
import EmptyContent from '../../components/EmptyContent'

// ----------------------------------------------------------------------

const GamesPage = () => {
	const dispatch = useDispatch()
	const { games, nextPageUrl, isLoading, error } = useSelector(
		(state) => state.games
	)

	console.log(games.length)

	useEffect(() => {
		dispatch(fetchAllGames())
	}, [dispatch])

	return (
		<Container maxWidth='lg' sx={{ height: 1 }}>
			<PageTitle title='Games' />

			<GameList games={games} loading={isLoading} />

			{games.length > 0 && (
				<Box
					sx={{
						display: 'flex',
						width: '100%',
						mt: 4,
						justifyContent: 'center',
					}}
				>
					<LoadingButton
						onClick={() => dispatch(fetchNextGamesPage(nextPageUrl))}
						variant='contained'
						loading={isLoading}
					>
						Load More
					</LoadingButton>
				</Box>
			)}

			{error && <EmptyContent />}
		</Container>
	)
}
export default GamesPage
