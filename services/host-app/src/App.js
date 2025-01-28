import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NavBar from '../../remote-app/src/Nav';
import Home from '../../remote-app/src/Home/Home';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (

   

    <div >
      {/* <ContactCard  /> */}

   <NavBar />

      <BrowserRouter>


        <Routes>

          <Route path='/' element={<Home />} />
          {/* <Route path='/company' element={<Company />} />
          <Route path='/vision' element={<Vision />} />
          <Route path='/careers' element={<Careers/>} />
          <Route path='/resource' element={<Resource/>} />
          <Route path='/performance' element={<Performance/>} />
          <Route path='/supply' element={<Supply/>} />
          <Route path='/human' element={<Human/>} />
          <Route path='/advertise' element={<Advertise/>} />
          <Route path='/cloudservice' element={<CloudService/>} />
          <Route path='/devops' element={<Devops/>} />
          <Route path='/cms' element={<CMS/>} />
          <Route path='/ecommerce' element={<Ecommerce/>} />
          <Route path='/industry' element={<Industry/>} />
          <Route path='/internet' element={<Internet/>} />
          <Route path='/IT' element={<IT/>} />
          <Route path='/marketing' element={<Marketing/>} />
          <Route path='/contact' element={<Contact/>} /> */}


        </Routes>
      </BrowserRouter>

 
    </div>
 
  );
};

export default App;
