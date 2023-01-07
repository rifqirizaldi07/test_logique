import React from "react"
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
       <Route element={<Layout/>}>
       <Route path="/" element={<Homepage />} />
       </Route>
    </Routes>

  )
}

export default App