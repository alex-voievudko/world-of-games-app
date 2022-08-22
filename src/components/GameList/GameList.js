// @mui
import { Box } from '@mui/material'
// components
import GameCard from './GameCard'
import SkeletonGameCard from '../Skeleton/SkeletonGameCard'

const GameList = ({ games, loading }) => {
	return (
		<Box
			sx={{
				display: 'grid',
				gap: 3,
				gridTemplateColumns: 'repeat(4, 1fr)',
			}}
		>
			{games?.map((game) => (
				<GameCard key={game.id} game={game} />
			))}
			{loading &&
				[...Array(20)].map((item, index) => <SkeletonGameCard key={index} />)}
		</Box>
	)
}
export default GameList
