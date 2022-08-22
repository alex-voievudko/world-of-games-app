import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
// @mui
import { Box, Stack, AppBar, Toolbar } from '@mui/material'
// components
import AccountPopover from '../AccountPopover'

// ----------------------------------------------------------------------
const RootStyle = styled(AppBar)`
	box-shadow: none;
	height: 64px;
	z-index: 1000;
	width: calc(100% - 281px);
	background-color: transparent;
	border-bottom: 1px solid rgba(145, 158, 171, 0.24);
	transition: width 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	${(props) =>
		props.$opacity &&
		css`
			backdrop-filter: blur(6px);
			background-color: rgba(255, 255, 255, 0.8);
		`};
`
// ----------------------------------------------------------------------

const DashboardHeader = () => {
	const [offsetTop, setOffSetTop] = useState(false)

	useEffect(() => {
		window.onscroll = () => {
			if (window.pageYOffset > 64) {
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
		<RootStyle $opacity={offsetTop}>
			<Toolbar
				sx={{
					minHeight: '100% !important',
					px: { lg: 5 },
				}}
			>
				<Box sx={{ flexGrow: 1 }} />
				<Stack
					direction='row'
					alignItems='center'
					spacing={{ xs: 0.5, sm: 1.5 }}
				></Stack>
				<AccountPopover />
			</Toolbar>
		</RootStyle>
	)
}
export default DashboardHeader
