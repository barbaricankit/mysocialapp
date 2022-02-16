import { uploadImage, updateUploadStatus, BsCardImage, useDispatch } from '.';
import dotenv from 'dotenv';
dotenv.config();
const UPLOAD_PRESET = process.env.REACT_APP_UPLOAD_PRESET;
const ImageUpload = () => {
	const dispatch = useDispatch();

	const handleFile = (e) => {
		const { files } = e.target;
		const formData = new FormData();
		formData.append('file', files[0]);
		formData.append('upload_preset', UPLOAD_PRESET);
		dispatch(updateUploadStatus());
		dispatch(uploadImage(formData));
	};

	return (
		<form>
			<div className='form-group'>
				<input type='file' id='file' style={{ display: 'none' }} onChange={(e) => handleFile(e)} />
				<label htmlFor='file'>
					<BsCardImage fontSize='x-large' />
				</label>
			</div>
		</form>
	);
};

export default ImageUpload;
