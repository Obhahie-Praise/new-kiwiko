"use client"
import FileDropZone from '@/components/ui/FileDropZone'
import React, { useState } from 'react'

const BasicInfo = () => {
    const [imageUrl,setImageUrl] = useState("")
  return (
    <section>
      <h2 className="text-lg flex items-center gap-4 pb-2">
        <div className="w-10 h-px bg-zinc-600 dark:bg-zinc-400" />
        <p className="">Basic Info</p></h2>
        <div className="">
          <div className="">
            <div className="">
              <label htmlFor="">Project name</label>
              <input type="text" placeholder='Open AI' />
            </div>
            <div className="">
              <label htmlFor="">Project description</label>
              <textarea placeholder="Insert description here..." />
            </div>
            <div className="">
              <label htmlFor="">Project tagline</label>
              <input type='text' placeholder="Insert description here..." />
            </div>
            <div className="">
              <label htmlFor="">Project stage</label>
              
              
              
            </div>
            <div className="">
              <label htmlFor="">Project catergory</label>
              
            </div>
          </div>
        </div>
    </section>
  )
}

export default BasicInfo