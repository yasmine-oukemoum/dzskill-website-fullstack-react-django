import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import CourseStats from './components/Courses/Courses'
import Categories from './components/Categories/Categories'
import PopularCourses from './components/PopularCourses/PopularCourses'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CourseStats/>
      <Categories/>
      <PopularCourses/>
      <Footer/>      
    </div>
  )
}

export default App