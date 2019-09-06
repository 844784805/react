import React from 'react'
import ReactDom from 'react-dom'
import store from './redux/store'

import App from './containers/app'
import {Provider } from 'react-redux'



ReactDom.render( 
    <Provider  store={store} ><App/></Provider>,
    document.getElementById('root')
 )


