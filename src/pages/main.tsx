import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Main = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.state?.showToast) {
      toast.success('Post created sucessfully!', {
        position: 'top-right',
        autoClose: 2500,
      })
    }
  }, [location]);


  return (
    <div>
      <h1>Main page</h1>
      <ToastContainer />
    </div>
  )
}

export default Main
