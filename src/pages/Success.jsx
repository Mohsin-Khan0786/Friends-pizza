import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'

const Success = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {
        loading 
        ? <PropagateLoader color="#36d7b7" /> 
        : (
          <div>
            <h1 className='text-3xl font-semibold mb-4'>Order Successful!</h1>
            <p>Your order has been placed successfully. Your order ID is #12345.</p>
          </div>
        )
      }
    </div>
  )
}

export default Success
