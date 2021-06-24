import { reEnteredPassword, Input, Box, BsFillEyeFill, useSelector, useDispatch, useState } from '.';

const ReEnterPassword = () => {
	const { reEnterPassword } = useSelector((state) => state.auth);
	const [ showPassword, setShowPassword ] = useState(false);
	const dispatch = useDispatch();
	return (
		<Box m={2} className='input_pwd'>
			<Input
				type={showPassword ? 'text' : 'password'}
				value={reEnterPassword}
				placeholder='Password'
				_placeholder={{color:"rgb(29, 161, 242)"}}
				bg='white'
				fontSize="large"
				onChange={(e) => dispatch(reEnteredPassword({ value: e.target.value }))}
			/>
			<BsFillEyeFill
				className='btn_show_pwd'
				color='rgb(29, 161, 242)'
				onClick={() => setShowPassword(!showPassword)}
			/>
		</Box>
	);
};

export default ReEnterPassword;
