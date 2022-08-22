// @mui
import { Box, Typography, Stack } from '@mui/material'

// ----------------------------------------------------------------------

const DeveloperItem = ({ developer }) => {
	const { name, image_background, games_count } = developer

	return (
		<Stack direction='row' alignItems='center' spacing={2}>
			<Box
				src={image_background}
				alt={name}
				sx={{
					width: 48,
					height: 48,
					borderRadius: 1.5,
					flexShrink: 0,
					objectFit: 'cover',
				}}
				component='img'
			/>

			<Box sx={{ flexGrow: 1, minWidth: 160 }}>
				<Typography variant='subtitle2'>{name}</Typography>
			</Box>

			<Stack alignItems='center' sx={{ pr: 3 }}>
				<Typography variant='caption' sx={{ mt: 0.5, fontWeight: 600 }}>
					Games
				</Typography>
				<Typography variant='caption' sx={{ mt: 0.5, color: 'text.secondary' }}>
					{games_count}
				</Typography>
			</Stack>
		</Stack>
	)
}
export default DeveloperItem
