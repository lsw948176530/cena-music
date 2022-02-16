import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import routes from './router'
import store from './store'

import CenaAppHeader from './compoments/app-header'
import CenaAppFooter from './compoments/app-footer'
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min'

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <CenaAppHeader />
        {renderRoutes(routes)}
        <CenaAppFooter />
      </HashRouter>
    </Provider>
  )
})

export default App
