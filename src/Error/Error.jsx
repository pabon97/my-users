import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const Error = () => {
    const {error, status} = useRouteError()
  return (
    <section className="d-flex align-items-center ">
      <div className="container d-flex flex-column align-items-center justify-content-center px-5 mx-auto my-5">
        <img
          className="w-25"
          src="https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_960_720.png"
          alt=""
        />
        <div className=" text-center">
          <h2 className="mb-8 font-extrabold fs-4 text-dark">
            <span className="text-danger">Error</span> {status || 404}
          </h2>
          <p className="fs-5  mb-4">
            {error?.message}
          </p>
          <button className='btn btn-danger'>
          <Link
          style={{textDecoration: 'none'}}
            to="/"
            className="px-5 py-3 fw-semibold text-dark"
          >
            Back to homepage
          </Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Error