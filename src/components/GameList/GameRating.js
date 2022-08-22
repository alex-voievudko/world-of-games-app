// @mui
import { Rating, Stack, Typography } from '@mui/material'

// ----------------------------------------------------------------------

const GameRating = ({ rating }) => {
	return (
		<Stack sx={{ alignItems: 'center' }}>
			<Typography variant='caption' sx={{ color: 'text.secondary' }}>
				Rating
			</Typography>
			<Typography variant='subtitle2'>{rating}</Typography>
			<Rating
				value={rating}
				size='small'
				readOnly
				sx={{ fontSize: '0.75rem' }}
			/>
		</Stack>
	)
}
export default GameRating
