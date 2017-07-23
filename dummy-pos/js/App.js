import React from 'react'
import { Match } from 'react-router'
import AppContainer from 'grommet/components/App'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'

const App = React.createClass({
    render() {
        return (
            <AppContainer
                centered
                inline>
                <Header />
                <Match exactly pattern='/' component={Home} />
                <Footer />
            </AppContainer>
        )
    }
})

export default App
