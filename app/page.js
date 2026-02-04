import dbConnect from '@/lib/db'
import React from 'react'

const page = async() => {
  await dbConnect();
  return (
    <div>page</div>
  )
}

export default page