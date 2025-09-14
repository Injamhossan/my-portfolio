import { Home } from "lucide-react";
import { NotFound } from "./NotFound";



function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route index element ={<Home/>}/>
      <Route path="*" element={<NotFound/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
