import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Gallery from './component/gallery';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Signup from './component/signup';
import Login from './component/login';
import Contactus from './component/contactus';
import AddStudent from './component/addstudent';
import Aboutus from './component/aboutus';
import Head from './component/head';
import Home from './component/home';
import ListStudent from './component/liststudents';


function App() {
  return (
    <div className="App">
      
      <Head></Head>
      
      <BrowserRouter>
      <Header></Header>
    
      
      {/* <Link to="/home">home now</Link> */}
      <Routes>
        <Route element={<Gallery></Gallery>} path="/gallery" />
        <Route element={<Signup></Signup>} path="/signup" />
        <Route element={<Login></Login>} path="/login" />
        <Route element={<Contactus></Contactus>} path="/contactus" />
        <Route element={<Aboutus></Aboutus>} path="/aboutus" />
        <Route element={<AddStudent></AddStudent>} path="/addstudent" />
        <Route element={<Home></Home>} path="" />
        <Route element={<ListStudent></ListStudent>} path="/liststudent" />
       
        
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// app.js is the root component
// root component k ander jo v hota hai wo dikhta hai
// hum anchor tag isliye use ni krte hai qnki a tag use krne par pase reloading hota hai
// or spa mn ye nii krna hota hai
// jab v hmko anchor tag use krna hota hai gtoh hum link use kkrte hai
