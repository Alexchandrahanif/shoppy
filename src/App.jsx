import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Area,
  Bar,
  ColorPicker,
  ColorMapping,
  Financial,
  Line,
  Pie,
  Pyramid,
  Stacked,
  Calendar,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Kanban,
  Orders,
} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";

function App() {
  const { activeMenu } = useStateContext();
  
  return (
    <div>
      <div>
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            {/* Tombol Settings */}
            <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
              <TooltipComponent content="Settings" position="Top">
                <button
                  className="text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                  style={{ background: "blue", borderRadius: "50%" }}
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>

            {/* Sidebar */}
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg bg-white">
                <Sidebar />
              </div>
            )}

            {/* Home */}
            <div
              className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
                activeMenu ? "md:ml-72" : "flex-1"
              }`}
            ></div>

            {/* Navbar */}
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              {/* <Navbar /> */}
              navbar
            </div>

            {/* Routes tapi ini masih cara lama setau saya */}
            <Routes>
              {/* Halaman Dashboard */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerse" element={<Ecommerce />} />

              {/* Halaman/Pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* Aplikasi */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calender" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
