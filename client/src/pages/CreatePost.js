import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


function CreatePost() {
	const initialValues = {
		title: '',
		postText: '',
		username: ''
	}
	const validationSchema = Yup.object().shape({
		title: Yup.string().required('Title is required'),
		postText: Yup.string().required('Post text is required'),
		username: Yup.string().min(3).max(15).required('Username is required')
	});
	const onSubmit = (values) => {
		axios.post('http://localhost:3001/posts', values).then((response)=> {
		console.log("Post created");
		})
	}

	return (
	<div className='createPostPage'>
		<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
			<Form className='formContainer'>
			<label>Title:</label>
			<ErrorMessage name='title' component="span"/>
			<Field id="inputCreatePost" type="text" name="title" placeholder="Title"/>

			<label>Post:</label>
			<ErrorMessage name='postText' component="span"/>
			<Field id="inputCreatePost" type="text" name="postText" placeholder="What's up?"/>

			<label>Username:</label>
			<ErrorMessage name='username' component="span"/>
			<Field id="inputCreatePost" type="text" name="username" placeholder="Username"/>
			<button type="submit">Create Post</button>
			</Form>
		</Formik>
	</div>
)
}

export default CreatePost