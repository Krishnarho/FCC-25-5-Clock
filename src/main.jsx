import React from 'react'
//import ReactDOM from 'react-dom/client'
import ReactDOM from "react-dom"; // For React 17 compatibility to clear the test
import App from './App.jsx'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )




ReactDOM.render(<App />, document.getElementById("root"));