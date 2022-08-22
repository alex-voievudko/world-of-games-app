import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// @mui
import { Container, Stack, Pagination } from '@mui/material'
// redux
import {
	fetchAllDevelopers,
	paginateOverPages,
} from '../../redux/slices/developers'
// components
import PageTitle from '../../components/PageTitle'
import DeveloperList from '../../components/DeveloperList/DeveloperList'
import EmptyContent from '../../components/EmptyContent'

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const DevelopersPage = () => {
	const [page, setPage] = useState(1)

	const dispatch = useDispatch()

	const { developers, isLoading, count, error } = useSelector(
		(state) => state.developers
	)

	const handleChange = (event, value) => {
		setPage(value)
		dispatch(paginateOverPages(value))
	}

	useEffect(() => {
		dispatch(fetchAllDevelopers())
	}, [dispatch])

	return (
		<Container maxWidth='lg' sx={{ height: 1 }}>
			<PageTitle title='Developers' />

			{developers.length > 0 && (
				<>
					<DeveloperList developers={developers} loading={isLoading} />

					<Stack alignItems='center' sx={{ mt: 4 }}>
						<Pagination
							count={count}
							page={page}
							onChange={handleChange}
							shape='rounded'
						/>
					</Stack>
				</>
			)}

			{error && <EmptyContent />}
		</Container>
	)
}
export default DevelopersPage
