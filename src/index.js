import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import './index.scss';
import App from './App';

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);


root.render(
  <StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);