import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import Post from './post';

export interface Post {
  id: string;
  userId: string;
  title: string;
  description: string;
  username: string;
}


const Main = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null);
  const postsRef = collection(db, 'posts');
  // Setting up the toast for homepage using locaton and useEffect
  const location = useLocation();
  useEffect(() => {
    if (location.state?.showToast) {
      toast.success('Post created sucessfully!', {
        position: 'top-right',
        autoClose: 2500,
      })
    }
  }, [location]);
  // End of toast

  const getPosts = async () => {
    const data = await getDocs(postsRef)
    setPostsList(
      data.docs.map((doc) => ({... doc.data(), id: doc.id})) as Post[]);
  }

  useEffect(() => {
    getPosts();
  }, [])


  return (
    <div>
      {postsList?.map((post) => (
        <Post post={post}/>
      ))}
      <ToastContainer />

    </div>
  )
}

export default Main
