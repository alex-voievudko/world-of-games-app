// @mui
import { Stack, Skeleton, Box } from '@mui/material'

// ----------------------------------------------------------------------

const SkeletonDeveloperItem = () => {
	return (
		<Stack direction='row' alignItems='center' spacing={2}>
			<Skeleton variant='rounded' height={48} width={48} />

			<Box sx={{ flexGrow: 1, minWidth: 160 }}>
				<Skeleton variant='text' width={150}></Skeleton>
			</Box>

			<Stack alignItems='center' sx={{ pr: 3 }}>
				<Skeleton variant='text' height={10} width={40}></Skeleton>
				<Skeleton variant='text' height={8} width={20}></Skeleton>
			</Stack>
		</Stack>
	)
}
export default SkeletonDeveloperItem
