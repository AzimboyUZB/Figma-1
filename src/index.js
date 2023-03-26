import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./style/style.css"

const root = ReactDOM.createRoot(document.querySelector(".wrppaer"));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)