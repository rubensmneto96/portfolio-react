import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { HomeEn } from "./pages/HomeEn"; 
import { NotFound } from "./pages/NotFound";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="en" element={<HomeEn />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
