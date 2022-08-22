import { useState } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
// @mui
import {
	Box,
	Divider,
	Typography,
	Stack,
	MenuItem,
	Popover,
} from '@mui/material'
// redux
import { useDispatch } from 'react-redux'
import { clearDevelopersState } from '../redux/slices/developers'
import { clearGamesState } from '../redux/slices/games'
// hooks
import useAuth from '../hooks/useAuth'
// components
import UserAvatart from './UserAvatart'

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
	{
		label: 'Home',
		linkTo: '/',
	},
	{
		label: 'Profile',
		linkTo: '/app/profile',
	},
	{
		label: 'Settings',
		linkTo: '/app/settings',
	},
]

// ----------------------------------------------------------------------

const AccountPopover = () => {
	const navigate = useNavigate()

	const { user, logout } = useAuth()

	const [open, setOpen] = useState(null)

	const dispatch = useDispatch()

	const handleOpen = (event) => {
		setOpen(event.currentTarget)
	}

	const handleClose = () => {
		setOpen(null)
	}

	const handleLogout = async () => {
		try {
			await logout()
			dispatch(clearDevelopersState())
			dispatch(clearGamesState())
			navigate('/auth/login', { replace: true })
		} catch (error) {
			console.log(error)
			// TODO: Handle state to show Snackbar
		}
	}

	return (
		<>
			<UserAvatart onClick={handleOpen} />

			<Popover
				open={Boolean(open)}
				anchorEl={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				PaperProps={{
					sx: {
						p: 1,
						width: 200,
						overflow: 'inherit',
					},
				}}
				sx={{
					p: 0,
					mt: 1.5,
					ml: 0.75,
					'& .MuiMenuItem-root': {
						typography: 'body2',
						borderRadius: 0.75,
					},
				}}
			>
				<Box sx={{ my: 1.5, px: 2.5 }}>
					<Typography variant='subtitle2' noWrap>
						{user?.displayName}
					</Typography>
					<Typography variant='body2' sx={{ color: 'text.secondary' }} noWrap>
						{user?.email}
					</Typography>
				</Box>

				<Divider sx={{ borderStyle: 'dashed' }} />

				<Stack sx={{ p: 1 }}>
					{MENU_OPTIONS.map((option) => (
						<MenuItem
							key={option.label}
							to={option.linkTo}
							component={RouterLink}
							onClick={handleClose}
						>
							{option.label}
						</MenuItem>
					))}
				</Stack>

				<Divider sx={{ borderStyle: 'dashed' }} />

				<MenuItem onClick={handleLogout} sx={{ m: 1 }}>
					Logout
				</MenuItem>
			</Popover>
		</>
	)
}
export default AccountPopover
