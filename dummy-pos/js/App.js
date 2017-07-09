import React from 'react'
import { Match } from 'react-router'
import { Provider } from 'react-redux'
import AppContainer from 'grommet/components/App'

import store from './store'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Blog from './Blog'
import Glitch from './Glitch'

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <AppContainer centered>
          <Header />
          <Match exactly pattern='/' component={Home} />
          <Match exactly pattern='/blog' component={Blog} />
          <Match exactly pattern='/glitch-and-performance-issue' component={Glitch} />
          <Footer />
        </AppContainer>
      </Provider>
    )
  }
})

export default App
