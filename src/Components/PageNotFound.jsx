import React from 'react'
import {Link} from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='text-center'>
      <h1 style={{position:'absolute',top:'10%',left:'45%'}}>Error!😥</h1>
      <h2 style={{position:'absolute',top:'17%',left:'47%'}}>404</h2>
      <img src="https://cdn.svgator.com/images/2022/01/funny-404-error-page-design.gif" alt="" width={'100%'} height={'550px'} />
      <h3 style={{position:'absolute',top:'70%',left:'40%'}}>Oooops...looks like you're lost</h3>
      <div className='text-center' style={{position:'absolute',top:'79%',left:'45%'}}>
        <Link to={'/'}>
        <button className='btn btn-secondary'>Go back</button>
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound