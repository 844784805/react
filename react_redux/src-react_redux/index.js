import React from 'react'
import ReactDom from 'react-dom'
import store from './redux/store'

import App from './components/app'



function Render(){
    ReactDom.render( <App store={store} />, document.getElementById('root'))
}

Render()
store.subscribe(Render)