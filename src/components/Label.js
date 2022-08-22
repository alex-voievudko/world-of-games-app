import styled, { css } from 'styled-components'
// @mui

// ----------------------------------------------------------------------

const RootStyle = styled.span`
	height: 22px;
	min-width: 22px;
	line-height: 0;
	border-radius: 6px;
	cursor: default;
	align-items: center;
	white-space: nowrap;
	display: inline-flex;
	justify-content: center;
	padding: ${(props) => props.theme.spacing(0, 1)};
	color: ${(props) => props.theme.palette.grey[800]};
	font-size: 0.75rem;
	background-color: ${(props) => props.theme.palette.grey[300]};
	font-weight: bold;

	${(props) =>
		props.$color &&
		css`
			color: ${(props) => props.theme.palette[props.$color].darker};
			background-color: ${(props) => props.theme.palette[props.$color].light};
		`}
`
// ----------------------------------------------------------------------

const Label = ({ children, color }) => {
	return <RootStyle $color={color}>{children}</RootStyle>
}
export default Label
