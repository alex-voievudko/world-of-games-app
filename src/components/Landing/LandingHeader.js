import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

// @mui
import {
	Box,
	Button,
	AppBar,
	Toolbar,
	Container,
	Link,
	Typography,
	Stack,
} from '@mui/material'
// components
import Logo from '../Logo'

// ----------------------------------------------------------------------

const ToolBarStyle = styled(Toolbar)`
	height: 72px;
	transition: width 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	${(props) =>
		props.$opacity &&
		css`
			backdrop-filter: blur(6px);
			background-color: rgba(255, 255, 255, 0.8);
		`};
`

const LinkStyle = styled(Link)`
	color: ${(props) => props.theme.palette.text.primary};
	transition: ${(props) =>
		props.theme.transitions.create('opacity', {
			duration: props.theme.transitions.duration.shorter,
		})};
	&:hover {
		opacity: 0.48;
		text-decoration: none;
	}
`

// ----------------------------------------------------------------------

const LandingHeader = () => {
	const [offsetTop, setOffSetTop] = useState(false)

	useEffect(() => {
		window.onscroll = () => {
			if (window.pageYOffset > 40) {
				setOffSetTop(true)
			} else {
				setOffSetTop(false)
			}
		}
		return () => {
			window.onscroll = null
		}
	}, [])

	return (
		<AppBar
			sx={{
				bgcolor: 'transparent',
				boxShadow: 0,
			}}
		>
			<ToolBarStyle
				$opacity={offsetTop}
				disableGutters
				sx={{
					height: '72px',
				}}
			>
				<Container
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Stack direction='row' alignItems='center' spacing={1}>
						<Logo />
						<Typography color='text.primary' variant='h6'>
							WoG
						</Typography>
					</Stack>
					<Box sx={{ flexGrow: 1 }} />
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: 3,
						}}
					>
						<LinkStyle variant='subtitle2' href='#features' underline='none'>
							Features
						</LinkStyle>
						<LinkStyle
							variant='subtitle2'
							component={RouterLink}
							to='/app'
							underline='none'
						>
							World of Games
						</LinkStyle>
					</Box>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
						<Link
							variant='subtitle2'
							component={RouterLink}
							to='/auth/login'
							underline='none'
						>
							Log In
						</Link>
						<Button
							variant='contained'
							component={RouterLink}
							to='/auth/register'
						>
							Register
						</Button>
					</Box>
				</Container>
			</ToolBarStyle>
		</AppBar>
	)
}
export default LandingHeader
