import styled from 'styled-components'
import { Link as RouterLink, matchPath, useLocation } from 'react-router-dom'
// @mui
import {
	Box,
	Stack,
	Drawer,
	Link,
	Typography,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material'
import GamesIcon from '@mui/icons-material/Games'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard'
// hooks
import useAuth from '../../hooks/useAuth'
// components
import Logo from '../Logo'
import UserAvatart from '../UserAvatart'

// ----------------------------------------------------------------------
const AvatarStyle = styled.div`
	display: flex;
	align-items: center;
	padding: ${(props) => props.theme.spacing(2, 2.5)};
	border-radius: 12px;
	background-color: ${(props) => props.theme.palette.grey[500_12]};
`

const ListItemStyle = styled(ListItemButton)`
	position: relative;
	padding-left: ${(props) => props.theme.spacing(2)};
	padding-right: ${(props) => props.theme.spacing(1.5)};
	margin-bottom: ${(props) => props.theme.spacing(0.5)};
	color: ${(props) => props.theme.palette.text.secondary};
	border-radius: 8px;
	height: 48px;

	${(props) =>
		props.$active &&
		`color: ${props.theme.palette.primary.main}; background-color: rgba(118, 53, 220, 0.08);`}
`

const ListItemIconStyle = styled(ListItemIcon)`
	width: 22px;
	height: 22px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: inherit;
`
// ----------------------------------------------------------------------

const DashboardNavbar = () => {
	const { user } = useAuth()

	const { pathname } = useLocation()

	const getActive = (path, pathname) => {
		return path ? !!matchPath({ path, end: false }, pathname) : false
	}

	return (
		<Box sx={{ width: 280 }}>
			<Drawer
				open
				variant='persistent'
				PaperProps={{
					sx: {
						width: '280px',
						borderRightStyle: 'solid',
						bgcolor: 'background.default',
					},
				}}
			>
				<Stack sx={{ height: 1 }}>
					<Stack
						spacing={3}
						sx={{
							pt: 3,
							pb: 2,
							px: 2.5,
							flexShrink: 0,
						}}
					>
						<Stack
							spacing={2}
							direction='row'
							sx={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<Logo />
							<Typography variant='h5' sx={{ color: 'text.primary' }}>
								WoG
							</Typography>
						</Stack>
						{/* ACCOUNT */}
						<Link
							underline='none'
							color='inherit'
							component={RouterLink}
							to='/app/profile'
						>
							<AvatarStyle>
								<UserAvatart />
								<Box
									sx={{
										ml: 2,
									}}
								>
									<Typography variant='subtitle2' noWrap>
										{user?.displayName}
									</Typography>
								</Box>
							</AvatarStyle>
						</Link>
					</Stack>

					{/* LINKS */}
					<Box>
						<List disablePadding sx={{ px: 2 }}>
							<ListItem disablePadding component={RouterLink} to='/app/games'>
								<ListItemStyle $active={getActive('/app/games', pathname)}>
									<ListItemIconStyle>
										<GamesIcon />
									</ListItemIconStyle>
									<ListItemText
										primary='Games'
										primaryTypographyProps={{
											noWrap: true,
											variant: 'subtitle2',
										}}
									/>
								</ListItemStyle>
							</ListItem>
							<ListItem
								disablePadding
								component={RouterLink}
								to='/app/developers'
							>
								<ListItemStyle $active={getActive('/app/developers', pathname)}>
									<ListItemIconStyle>
										<DeveloperBoardIcon />
									</ListItemIconStyle>
									<ListItemText
										primary='Developers'
										primaryTypographyProps={{
											noWrap: true,
											variant: 'subtitle2',
										}}
									/>
								</ListItemStyle>
							</ListItem>
						</List>
					</Box>
					<Box sx={{ flexGrow: 1 }} />
				</Stack>
			</Drawer>
		</Box>
	)
}
export default DashboardNavbar
