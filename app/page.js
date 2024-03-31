"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, settask] = useState([])

  const submithandeler = (e) => {
    e.preventDefault()
    settask([...maintask, { title, desc }])
    settitle('')
    setdesc('')
    console.log(maintask)
  }

  const deleteHandler = (i) => {
   let copytask = [...maintask]
   copytask.splice(i,1)
   settask(copytask)
  }

  let rendertask = <h2>No Task Available</h2>

  if (maintask.length > 0) {
    rendertask = maintask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between'>
          <div className='flex justify-between mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h5 className='text-lg font-medium'>{t.desc}</h5>
          </div>
          <button onClick={() =>{
            deleteHandler(i)
          }} className='bg-red-600 text-white px-4 py-3 text-2xl font-bold rounded-lg m-5  hover:bg-red-800 ' >Delete Task</button>
        </li>
      );
    })
  }
  return (
    <>
      <h1 className='bg-slate-900 text-white p-5 text-5xl font-bold text-center'>My Todo-list</h1>
      <form onSubmit={submithandeler} className='flex justify-evenly'>

        <input type="text"
          className='text-2xl border-zinc-800 border-2 m-8 px-8 py-2'
          placeholder='Enter Task here!'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }} />

        <input type="text"
          className='text-2xl border-zinc-800 border-2 m-8 px-8 py-2'
          placeholder='Enter Description here!'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }} />

        <button className='bg-slate-900 text-white px-16 py-1 text-2xl font-bold rounded-lg m-5  hover:bg-black ' >Add Task</button>

        
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>{rendertask}</ul>
      </div>
    </>
  )
}

export default page
