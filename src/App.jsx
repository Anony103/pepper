import styled from "styled-components";
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Reward from './pages/Reward';
import Product from './pages/Product';
import Merch from './pages/Merch';
import Tuition from './pages/Tuition';
import Pepper from './pages/Pepper';
import Faq from './pages/Faq';
import Create from './pages/Create';
import Footer from './component/Footer';
import { AuthContextProvider } from '../config/AuthContext';
import Edit from "./pages/Edit";


export const Container = styled.div`
width: 100vw;
height: 100vh;
overflow-x: hidden;
position: relative;
`;

function App() {

  const location = useLocation();
  const excludedPaths = ['/form'];
  const shouldDisplayNavbar = !excludedPaths.includes(location.pathname);
  return (
    <>
      <Container>
        <AuthContextProvider>

        <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/rewards" element={<Reward />} />
            <Route path="/products" element={<Product />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/tuition" element={<Tuition />} />
            <Route path="/pepper" element={<Pepper />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/create" element={<Create />} />
            <Route path="/form" element={<Edit/>} />
           </Routes>

           {shouldDisplayNavbar &&<Footer/>}
        </AuthContextProvider>

      </Container>
    </>
  )
}

export default App
