import React from 'react'
import Header from './component/Header'
import Hero from './component/Hero'
import ExplorCourse from './component/xplorCourse'

import Achivements from './component/Achivements'
import Course from './component/course'
import Com from './component/com'
import Team from './component/team'





const Home = () => {
  return (
    <div >
        
        
          <Header/>
          <Hero/>
          {/* <Footer/> */}
          < ExplorCourse/>
          <Achivements/>
          <Course/>
          <Team/>
        <Com/>
        
          
        
        
    </div>
  )
}

export default Home
