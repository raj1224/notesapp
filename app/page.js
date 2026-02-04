import NotesClient from '@/components/NotesClient';
import dbConnect from '@/lib/db'
import React from 'react'


const page = async() => {
  await dbConnect();
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>Notes App</h1>
      <NotesClient/>
    </div>
  )
}

export default page