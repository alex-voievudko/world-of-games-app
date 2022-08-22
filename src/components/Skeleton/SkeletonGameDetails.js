// @mui
import { Stack, Skeleton, Box, Container } from '@mui/material'

// ----------------------------------------------------------------------

const SkeletonGameDetails = () => {
	return (
		<Container maxWidth='lg'>
			<Skeleton variant='text' width='50%' height='36px' />
			<Skeleton variant='text' width='50%' height='52px' />

			<Box
				sx={{
					display: 'grid',
					gap: 3,
					gridTemplateColumns: 'repeat(2, 1fr)',
					mt: 4,
				}}
			>
				<Stack>
					<Skeleton variant='text' width='50%' height='52px' />
					<Skeleton variant='rectangle' height='350px' />
				</Stack>

				<Skeleton variant='rounded' height='250px' />
			</Box>
		</Container>
	)
}
export default SkeletonGameDetails
