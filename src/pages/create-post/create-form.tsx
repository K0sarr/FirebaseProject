import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CreateFormData {
  title: string;
  description: string;
}

const CreateForm = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth); // Import logged in user profile

  const schema = yup.object().shape({
    title: yup.string().required('You must add a title'),
    description: yup.string().required('You must add a description'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<CreateFormData>({
    resolver: yupResolver(schema)
  })
  const postsRef = collection(db, 'posts')



  const onCreatePost = async (data: CreateFormData) => {
  try {
    await addDoc(postsRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    })

    // TOASTS
    toast.success('Post created successfully!', {
      position: 'top-right',
      autoClose: 3000,
    });
    navigate('/', {
      state: {
        showToast: true,
      },
    });
  } catch (error) {
    toast.error('Failed to create the post, Please try again', {
      position: 'top-right',
      autoClose: 2500,
    })
  }
  //Remove this later (clg)
    console.log(data)
  }
  
  return (
    <div>
    <form className="create-form" onSubmit={handleSubmit(onCreatePost)}>
      <input 
        className="create-form-input" 
        placeholder='Title' 
        {...register('title')}
      />
      <p className="create-form-error"> {errors.title?.message} </p>
      <textarea 
        className="create-form-textarea" 
        placeholder='Description' 
        {...register('description')} 
      />
      <p className="create-form-error"> {errors.description?.message} </p>
      <input 
        className="create-form-submit" 
        type='submit'
      />
    </form>
    </div>
  )
}

export default CreateForm
