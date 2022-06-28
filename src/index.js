import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Student from './Student';
import Students from './Students';
import StuInfo from './StuInfo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='students' element={<Students />}>
            <Route path='student' element={<Student />}>
              <Route path='stuinfo' element={<StuInfo/>} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


