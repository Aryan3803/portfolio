import React from 'react'
import man from '../../data/man.json';
import LottiePlayer from "react-lottie-player";

const StudyingMan = () => {
  return (
    <div>
      <LottiePlayer
        loop
        play
        animationData={man}
        style={{padding:"1rem"}}
      />
    </div>
  )
}

export default StudyingMan