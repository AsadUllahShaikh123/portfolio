import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './global.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import 'animate.css'
ReactDom.render(
    <React.StrictMode>
       <App/>
    </React.StrictMode>,
    document.getElementById('root')
)