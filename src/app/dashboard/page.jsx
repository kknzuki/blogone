"use client";

import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

const Dashboard = () => {
 

  const fetcher = (...args) => fetch(...args).then(res => res.json())
 
 

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
 
  // if (error) return <div>failed to load</div>
  // if (isLoading) return <div>loading...</div>
 
  // render data
  console.log(data);
  
  
  
  return (
    <div></div>
  )
}

export default Dashboard