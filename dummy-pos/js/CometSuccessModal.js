import React, { Component } from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Layer from 'grommet/components/Layer'
import CheckmarkIcon from 'grommet/components/icons/base/Checkmark'

export default class CometSuccessModal extends Component {
    render() {
        return (
            <Layer onClose={() => {
                this.props.toggleCometSuccessModal()
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
                            Payment Successful
                        </Heading>
                    </Box>
                    <Box
                        align='center'
                        pad='medium'>
                        <CheckmarkIcon size='large' />
                    </Box>
                </Box>
            </Layer>
        )
    }
}