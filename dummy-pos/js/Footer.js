import React, { Component } from 'react'
import Footer from 'grommet/components/Footer'
import Box from 'grommet/components/Box'
import TwitterIcon from 'grommet/components/icons/base/SocialTwitter'
import GithubIcon from 'grommet/components/icons/base/SocialGithub'
import InstagramIcon from 'grommet/components/icons/base/SocialInstagram'
import Anchor from 'grommet/components/Anchor'
import Heading from 'grommet/components/Heading'

export default class AppFooter extends Component {
  render () {
    return (
      <Footer
        direction='row'
        colorIndex='light-2'>
        <Box
          full='horizontal'
          pad='small'>
          <Heading
            tag='h6'
            strong
            margin='none'>
            © COMET 2017
          </Heading>
        </Box>
      </Footer>
    )
  }
}
