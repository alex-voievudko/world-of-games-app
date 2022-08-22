import Button from './Button'
import CssBaseline from './CssBaseline'
import Typography from './Typography'
import Link from './Link'

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
	return Object.assign(
		CssBaseline(theme),
		Button(theme),
		Typography(theme),
		Link(theme)
	)
}
