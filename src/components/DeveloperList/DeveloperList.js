// @mui
import { Card, Stack } from '@mui/material'
import SkeletonDeveloperItem from '../Skeleton/SkeletonDeveloperItem'
// components
import DeveloperItem from './DeveloperItem'
// ----------------------------------------------------------------------

const DeveloperList = ({ developers, loading, ...other }) => {
	return (
		<Card>
			<Stack spacing={3} sx={{ p: 3, pr: 0 }}>
				{(loading ? [...Array(10)] : developers).map((developer, index) =>
					developer ? (
						<DeveloperItem key={developer.id} developer={developer} />
					) : (
						<SkeletonDeveloperItem key={index} />
					)
				)}
			</Stack>
		</Card>
	)
}
export default DeveloperList
