import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './GlobalComponents/Header';
import Navigation from './GlobalComponents/Navigation';
import ChakraUi from './Pages/ChakraUi';
import HooksPage from './Pages/HooksPage';
import HomePage from './Pages/HomePage';
import NodeJs from './Pages/NodeJs';
import PythonPage from './Pages/PythonPage';
import JavascriptConcepts from './Pages/JavascriptConcepts';
import GraphQLConcepts from './Pages/GraphQLConcepts';
import CodePlayground from './Pages/CodePlayground';
import DevopsConcepts from './Pages/DevopsConcepts';
import GitopsConcepts from './Pages/GitopsConcepts';
function Routing() {
  return (
    <>
        <BrowserRouter>
            <Header/>
            <div className='d-flex'>
              <Navigation/>
              <Routes>
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/chakraui" element={<ChakraUi/>} />
                  <Route path="/hooksjs" element={<HooksPage/>} />
                  <Route path="/nodejs" element={<NodeJs/>} />
                  <Route path="/python" element={<PythonPage/>} />
                  <Route path="/javascript" element={<JavascriptConcepts/>} />
                  <Route path="/graphql" element={<GraphQLConcepts/>} />
                  <Route path="/playground" element={<CodePlayground/>} />
                  <Route path="/devops" element={<DevopsConcepts/>} />
                  <Route path="/gitops" element={<GitopsConcepts/>} />
                  <Route path="*" element={<HomePage/>} />
              </Routes>
            </div>
        </BrowserRouter>
    </>
  )
}

export default Routing