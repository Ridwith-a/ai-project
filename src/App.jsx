import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Seehw from './pages/Seehw'
// import Preloader from './pages/Preloader'
// import { useEffect, useState } from 'react'
import NeedHelp from './pages/NeedHelp'
import Brief from './pages/Brief'
import Trydemo from './pages/Trydemo'

function App() {
//   const [isloading , setIsLoading]= useState(false)

//  useEffect(()=>{
//    setTimeout(()=>{
//     setIsLoading(true)
//   },3000)
//  },[])


  return (
    <>
      <Routes>
        {/* <Route path='/' element={isloading? <Main/> : <Preloader/>}/> */}
        <Route path='/' element={<Main/>}/>
        <Route path='/how-it-works' element={<Seehw/>}/>
        <Route path='/need-help' element={<NeedHelp/>} />
        <Route path='/brief' element={<Brief/>} />
        <Route path='/demo' element={<Trydemo/>} />
      </Routes>
    </>
  )
}

export default App
