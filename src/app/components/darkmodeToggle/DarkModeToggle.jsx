import React from 'react'
import {BsFillMoonStarsFill,BsFillSunFill} from 'react-icons/bs'

const mode='light'

const DarkModeToggle = () => {
  return (
    <div className="width-[42px] height-[24px] rounded p-1 border border-2 border-gray-700 flex gap-2 justify-between cursor-pointer">
      <div><BsFillMoonStarsFill/></div>
      <div><BsFillSunFill /></div>
      <div className="width-[15px] height-[15px] bg-green-600 rounded-full  " style={mode === 'light' ? { left: '2px '} : { right: '2px' }}>.</div>
    </div>
  )
}

export default DarkModeToggle