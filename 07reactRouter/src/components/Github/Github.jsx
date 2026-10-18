import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // useLoaderData() is a React Router hook that retrieves the data returned by the loader associated with the currently matched route.


    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/GAURAV-SHAARMA')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/GAURAV-SHAARMA')
    return response.json()
}



// A Promise is an object that represents the eventual result of an asynchronous operation.
// For example, when your application requests GitHub profile data, the response takes some time to arrive. JavaScript gives you a Promise while that operation is in progress.
// Think of ordering food:
// - Pending: You placed the order; you're waiting.
// - Fulfilled: Your food arrived successfully.
// - Rejected: Your order failed.