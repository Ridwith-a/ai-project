
import { faBolt, faChartLine, faComments, faRocket } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Seehw from './pages/Seehw'
import Preloader from './pages/Preloader'
import { useEffect, useState } from 'react'
import NeedHelp from './pages/NeedHelp'
import Brief from './pages/Brief'

function App() {
  const [isloading , setIsLoading]= useState(false)

 useEffect(()=>{
   setTimeout(()=>{
    setIsLoading(true)
  },3000)
 },[])


  return (
    <>
      <Routes>
        <Route path='/' element={isloading? <Main/> : <Preloader/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/how-it-works' element={<Seehw/>}/>
        <Route path='/need-help' element={<NeedHelp/>} />
        <Route path='/brief' element={<Brief/>} />
      </Routes>
    </>
  )
}

export default App
