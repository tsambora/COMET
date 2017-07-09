import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from 'grommet/components/Header'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Anchor from 'grommet/components/Anchor'

export default class AppHeader extends Component {
  render () {
    return (
      <Header
        direction='row'
        full='horizontal'
        pad='medium'
        colorIndex='neutral-2-a'>
        <Box basis='1/2'>
          <Link
            to='/'
            style={{ color: '#f5f5f5' }}>
            <Heading
              size='small'
              strong
              margin='none'>
              Sophia's Dress and Beyond
            </Heading>
          </Link>
        </Box>
        <Box basis='1/2' />
      </Header>
    )
  }
}
