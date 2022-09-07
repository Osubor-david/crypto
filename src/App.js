import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./route/SharedLayout";
import Home from "./route/Home";
import Signin from './route/Signin'
import Signup from './route/Signup'
import Account from './route/Account'
import { AppProvider } from "./context/Context";
import CoinPage from './route/CoinPage'
import { AuthContextProvider } from "./context/AuthContext";
function App() {


  return (
    <ThemeProvider> 
      <AppProvider>
       <AuthContextProvider> 
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<SharedLayout/>}>
   <Route index element={<Home/>} />
   <Route path='/signin' element={<Signin/>} />
   <Route path="/signup" element={<Signup/>} />
   <Route path="/account" element={<Account/>} />
   <Route path='/coin/:coinId' element={<CoinPage/>}>
    <Route path=":coinId"/>
   </Route>
    </Route>
    </Routes>
    </BrowserRouter>
    </AuthContextProvider>
    </AppProvider>

    </ThemeProvider>
  );
}

export default App;
