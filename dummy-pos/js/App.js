import React from 'react'
import { Match } from 'react-router'
import { Provider } from 'react-redux'
import AppContainer from 'grommet/components/App'

import store from './store'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <AppContainer
          centered
          inline>
          <Header />
          <Match exactly pattern='/' component={Home} />
          <Footer />
        </AppContainer>
      </Provider>
    )
  }
})

export default App
