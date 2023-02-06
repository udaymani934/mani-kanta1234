// // import React from "react";
// //  import {Browser as Router,Route,} from "react-router-dom";

// // // import { Route , Routes} from "react-router-dom";
// // import Welcome from './components/pages/Welcome';
// // import Products from './components/pages/Products';

// // const App = () =>  {
// //   return (
// //     <>


// //     {/* <BrowserRouter> */}
// //     <Router>
// //       <Route>
// //       <Welcome/>
// //       </Route>
// //     <Route>
// //       <Products/>
// //       </Route>
// //       </Router>


// //       {/* </BrowserRouter> */}

// //     </>
// //   );
// // }

// // export default App;

// //--------------------routing Task

// // import React from "react";
// // import { Redirect, Route, Switch } from 'react-router-dom';

// // import Welcome from './components/pages/Welcome';
// // import Products from './components/pages/Products';
// // // import MainHeader from './components/MainHeader';
// // import Home from './components/pages/Home';
// // import ProductDetails from "./components/pages/ProductDetails";
// // import Layout from "./components/Layout/Layout";
// // import NotFound from "./components/pages/NotFound";


// // const App = () => {
// //   return (

// //       <Layout>
// //       <Switch>
// //         <Route exact path='/Home'>
// //           <Home />
// //           {/* <Redirect to ='/Products' /> */}
// //         </Route>
// //         <Route exact path='/welcome'><Welcome /></Route>
// //         <Route exact path='/Products'><Products /></Route>
// //         <Route exact path='/product-details/:ProductId/'><ProductDetails /></Route>
// //         <Route path="/"><NotFound /></Route>
// //       </Switch>
// //     </Layout>
// //   );
// // }
// // export default App;

// //---------end of Routing Task----------

// //------new task-------------

// import React from "react";
// import { Redirect, Route, Switch } from 'react-router-dom';

// import NavBar1 from "./components/BasicForm/NavBar/NavBar1";
// import Home from './components/BasicForm/Home/Home';
// import Product from "./components/BasicForm/Products/Product";
// import More from './components/BasicForm/More/More';
// import Regist from "./components/BasicForm/Registration/Registration";
// import Contact from "./components/BasicForm/Contact/Contact";
// //import Layout1 from './components/BasicForm/Layout1/Layout1';
// import NewRegistrationForm from './components/NewRegister/NewRegistrationForm';
// import LoginForm from "./components/LoginForm/LoginForm";
// import Api from "./components/Api/Api";
// const App = () => {
//   return (
//     <>
// <NavBar1/>
//       <Switch>
//         <Route exact path='/'><Home /></Route>
//         <Route exact path='/Home'><Home /></Route>
//         <Route exact path='/Product'><Product /></Route>
//         <Route exact path='/More'><More /></Route>
//         <Route exact path='/Registration'><Regist /></Route>
//         <Route exact path='/Contact'><Contact /></Route>
//         <Route exact path='/NewRegistrationForm'><NewRegistrationForm /></Route>
//         <Route exact path='/LoginForm'><LoginForm /></Route>
//         <Route exact path='/Api'><Api /></Route>
//         {/* <Api/> */}

        
//          {/* <Route path="/LoginForm" element={<LoginForm/>}/>  */}
        
//       </Switch>
     
//     </>
//   );
// }
// export default App;
//------------------------------------------------------------------
//-----------------New project---------------------


//first
// import React from "react";
// import { Redirect, Route, Switch } from 'react-router-dom';

// // import LoginForm from "./components1/LoginForm/LoginForm";
// import NewLoginForm from "./components1/NewLogin/NewLoginForm";
// import DataFetching from "./components1/NewLogin/DataFetching";
// const App = () => {
//   return (
//     <>
//       <Switch>
//         {/* <Route exact path='/LoginForm'><LoginForm /></Route> */}
//         {/* <LoginForm /> */}
//         <NewLoginForm/>
//         {/* <DataFetching/> */}


//       </Switch>
     
//     </>
//   );
// }
// export default App;

// // api fecthong task---1
// import React from 'react'
// // import { Redirect, Routes,Route, Switch } from 'react-router-dom';
// import Output from './components2/Output'
// import SignUp from './components2/SignUp'
// import { Routes, Route,  BrowserRouter } from 'react-router-dom'
// function App() {
//   return (
//       <Routes>
//         <Route  path="/"  element={<SignUp/>}/>
//         <Route  path="/output"  element={<Output />}/>
//       </Routes>
//  )
// }
// export default App;

//---end of task1---

//Search Image with unplash Api task-2----
//  import React from "react";
//  import SearchImage from './components3/SearchImage'

//  const App = () => {
//      return (
//       <>
//       <SearchImage />
//       </>
     
//      )
//  }
//  export default App

 //------end of task-2------
 //------task-3--------
//  import React from "react";
//  import { Routes, Route, BrowserRouter } from 'react-router-dom';
//  import TableData from "./components4/TableData";

//  export default function App() {
//     return (
//       <Routes>
//           <Route path='/' exact element= {<TableData /> } />
//         </Routes>
  
//     )
//   }

  //----------end of Task-3--------


  // import React, { useState } from "react";

  // function MyComponent(){
  //   return<div>Hello</div>
  // }
  // export default MyComponent;

  // class MyComponent () {
  //   return(
  //   render()
  //   <div>Hello</div>
  //   )
  // }
  // useState
  // function class(){
  //   const[colour,setColour] = useState
  // }
  // <Html>
  //   <Title></Title>
  //   <Heading></Heading>
  //   <Body></Body>
  // </Html>

  // import React from "react";
  // import Task from './Components/Task'
  // import Fotter from "./Components/Fotter";
  // import Carousil from "./Components/Carousil"

  // function App() {
  //  return (
  //   <>
  //   <Task />
  //   <Carousil />
  //   <Fotter />

  //   </>
  //  )
  // }
  // export default App
  

  import React from "react";
import Card1 from "./Components/Card1";
import Card2 from "./Components/Card2"
import Card3 from './Components/Card3'
import Card4 from "./Components/Card4";
import Card5 from "./Components/Card5";
  import NavBar from "./Components/Navbar";
  
  const App = () => {

    return (
      <>
      <NavBar /><br /><br/><br/><br />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      </>
    )
  }
  export default App