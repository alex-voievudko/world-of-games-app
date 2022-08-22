// @mui
import { Card, Skeleton, Stack, Divider } from '@mui/material'

// ----------------------------------------------------------------------

const SkeletonGameCard = () => {
	return (
		<Card>
			<Skeleton variant='rectangular' sx={{ height: '150px' }} />
			<Stack spacing={1} sx={{ p: 3 }}>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
					sx={{ mb: '16px' }}
				>
					<Skeleton variant='text' sx={{ width: '60%' }} />
					<Skeleton variant='rounded' sx={{ width: '60px', height: '52px' }} />
				</Stack>

				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
				>
					<Skeleton variant='text' height='18px' sx={{ width: '50%' }} />
					<Skeleton variant='text' height='18px' sx={{ width: '40%' }} />
				</Stack>

				<Divider />

				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
				>
					<Skeleton variant='text' height='18px' sx={{ width: '50%' }} />
					<Skeleton variant='text' height='18px' sx={{ width: '40%' }} />
				</Stack>
			</Stack>
		</Card>
	)
}

export default SkeletonGameCard
