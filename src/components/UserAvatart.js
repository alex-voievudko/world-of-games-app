import { Avatar } from '@mui/material'
//hooks
import useAuth from '../hooks/useAuth'

const UserAvatart = ({ ...other }) => {
	const { user } = useAuth()

	return (
		<Avatar
			src={user?.photoURL}
			alt={user?.displayName}
			{...other}
			sx={{ cursor: 'pointer' }}
		>
			{user?.displayName.slice(0, 1)}
		</Avatar>
	)
}
export default UserAvatart
