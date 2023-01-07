import React from "react"
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Layout from "./components/Layout";
import HomeScreen from "./pages/homescreen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen/>}/>
       <Route element={<Layout/>}>
       <Route path="/music" element={<Homepage />} />
       </Route>
    </Routes>

  )
}

export default App