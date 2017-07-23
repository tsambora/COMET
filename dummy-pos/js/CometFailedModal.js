import React, { Component } from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Layer from 'grommet/components/Layer'
import CloseIcon from 'grommet/components/icons/base/Close'

export default class CometFailedModal extends Component {
    render() {
        return (
            <Layer onClose={() => {
                this.props.toggleCometFailedModal()
            }}>
                <Box
                    align='center'
                    pad='small'>
                    <Box
                        align='center'
                        pad='medium'>
                        <Heading
                            tag='h3'
                            align='center'
                            margin='none'>
                            Payment Unsuccessful
                        </Heading>
                    </Box>
                    <Box
                        align='center'
                        pad='medium'>
                        <CloseIcon size='large' />
                    </Box>
                    <Box
                        align='center'
                        pad='medium'>
                        <Heading
                            tag='h4'
                            align='center'
                            margin='none'>
                            error: Authentication Failed
                        </Heading>
                    </Box>
                </Box>
            </Layer>
        )
    }
}