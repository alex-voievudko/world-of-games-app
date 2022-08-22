import styled from 'styled-components'
// ----------------------------------------------------------------------

const RootStyle = styled.div`
	position: fixed;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.palette.background.default};
`
// ----------------------------------------------------------------------

const LoadingScreen = () => {
	return (
		<>
			<RootStyle>
				<h5>Loading...</h5>
			</RootStyle>
		</>
	)
}
export default LoadingScreen
