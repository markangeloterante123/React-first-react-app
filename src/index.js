/* para sa pag import ng react*/
import React  from 'react'
/* need mag iport ng DOM */
import ReactDom from 'react-dom'

/* need tawagin ang App.js */
import App from './App'


//babato sa App.js
ReactDom.render(<App />, document.getElementById('root'))