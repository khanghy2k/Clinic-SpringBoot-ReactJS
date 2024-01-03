import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/containers/home";
import Sidebar from "./components/sidebar";
import Login from "./components/containers/Login";
import AuthRoute from "./components/config/AuthRoute";
import Patient from "./components/client/patient/Patient";
import AddPatient from "./components/client/patient/AddPatient";
import { ToastContainer } from "react-toastify";
import EditPatient from "./components/client/patient/EditPatient";
import Doctor from "./components/client/doctor/Doctor";
import AddDoctor from "./components/client/doctor/AddDoctor";
import EditDoctor from "./components/client/doctor/EditDoctor";

function App() {
  return (
    <div className="Container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <AuthRoute
                element={
                  <div>
                    <Header />
                    <Home />
                    <Sidebar />
                  </div>
                }
              />
            }
          ></Route>
          <Route path="*" element={<Login />}></Route>
          <Route
            path="/patient"
            element={
              <AuthRoute
                element={
                  <div>
                    <Header />
                    <Patient />
                    <Sidebar />
                  </div>
                }
              />
            }
          ></Route>
          <Route
            path="/addpatient"
            element={
              <AuthRoute
                element={
                  <div>
                    <Header />
                    <AddPatient />
                    <Sidebar />
                  </div>
                }
              />
            }
          ></Route>
          <Route
            path="/editpatient/:id"
            element={
              <AuthRoute
                element={
                  <div>
                    <Header />
                    <EditPatient />
                    <Sidebar />
                  </div>
                }
              />
            }
          ></Route>
          <Route
            path="/doctor"
            element={
              <AuthRoute
                element={
                  <div>
                    <Header />
                    <Doctor />
                    <Sidebar />
                  </div>
                }
              />
            }
          ></Route>
          <Route
            path="/add-doctor"
            element={
              <AuthRoute
                element={
                  <div>
                    <Header />
                    <AddDoctor />
                    <Sidebar />
                  </div>
                }
              />
            }
          ></Route>
          <Route
            path="/edit-doctor/:id"
            element={
              <AuthRoute
                element={
                  <div>
                    <Header />
                    <EditDoctor />
                    <Sidebar />
                  </div>
                }
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
