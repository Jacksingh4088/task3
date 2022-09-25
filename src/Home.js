import React from 'react'
// import Header from './Nav/Header'
// import FormInput  from './FormInput';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        {/* <Header/> */}
        {/* <FormInput/> */}
        <h1>welcome to home page</h1>
        <Link to="/login"> <button>login</button></Link>


    </>
  )
}

export default Home