import React from 'react'
import ButtonList from './ButtonList'
import VideoList from './VideoList'

const MainContainer = () => {
  return (
    <div className='w-full overflow-y-scroll'>
        <ButtonList />
        <VideoList />
    </div>
  )
}

export default MainContainer