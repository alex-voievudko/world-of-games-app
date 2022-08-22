import * as Yup from 'yup'
// form
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// @mui
import { Stack, Alert } from '@mui/material'
import { LoadingButton } from '@mui/lab'
// hooks
import useAuth from '../../hooks/useAuth'
// components
import FormProvider from '../hook-form/FormProvider'
import RHFTextField from '../hook-form/RHFTextField'

// ----------------------------------------------------------------------

const LoginForm = () => {
	const { login } = useAuth()

	const LoginSchema = Yup.object().shape({
		email: Yup.string()
			.email('Email must be a valid email address')
			.required('Email is required'),
		password: Yup.string().required('Password is required'),
	})

	const defaultValues = {
		email: 'test@gmail.com',
		password: 'Test_123456',
	}

	const methods = useForm({
		resolver: yupResolver(LoginSchema),
		defaultValues,
	})

	const {
		reset,
		setError,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = methods

	const onSubmit = async (data) => {
		try {
			await login(data.email, data.password)
		} catch (error) {
			console.log(error)

			reset()

			setError('afterSubmit', { ...error, message: error.message })
		}
	}

	return (
		<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={3}>
				{!!errors.afterSubmit && (
					<Alert severity='error'>{errors.afterSubmit.message}</Alert>
				)}

				<RHFTextField name='email' label='Email address' size='small' />

				<RHFTextField
					name='password'
					label='Password'
					type='password'
					size='small'
				/>

				<LoadingButton
					fullWidth
					size='medium'
					type='submit'
					variant='contained'
					loading={isSubmitting}
				>
					Login
				</LoadingButton>
			</Stack>
		</FormProvider>
	)
}
export default LoginForm
