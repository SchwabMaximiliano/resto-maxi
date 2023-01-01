import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import { RecoverPassForm } from "./components/RecoverPassForm";
import { Home } from "./components/Home";
import { User } from "./components/User";
import { NavBar } from "./layouts/NavBar";
import { EmailConfirmed } from "./components/EmailConfirmed";
import { EmailError } from "./components/EmailError"
import { UncontrolledCarousel } from "./components/Corousel";
import { NotFound } from "./components/NotFound";

function App() {
  return (
      <BrowserRouter>
      
        <Routes>
        
          <Route name="navbar" exact path="/" element={<NavBar />}>
            <Route name="navbar" exact path="/" element={<UncontrolledCarousel />}/>
            <Route name="home" exact path="home" element={<Home />} />
            <Route name="login" exact path="login" element={<LoginForm />} />
            <Route name="register" exact path="register" element={<RegisterForm />} />
            <Route name="recoverpass" exact path="recoverpass" element={<RecoverPassForm />} />
            <Route name="user" exact path="user" element={<User />} />
            <Route name="email-confirmed" exact path="/email-confirmed" element={<EmailConfirmed />} />
            <Route name="email-error" exact path="/email-error" element={<EmailError />} />
            <Route name="not-fount" path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
