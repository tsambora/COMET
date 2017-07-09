import 'grommet/scss/vanilla/index'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router'

import App from './App'

render(<Router><App /></Router>, document.getElementById('app'))
