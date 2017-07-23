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
                    <Box
                        align='center'
                        pad='medium'>
                        <Heading
                            tag='h4'
                            align='center'
                            margin='none'>
                            (we're showing buyer's balance for demo purpose only, to show that the smart contract is working)
                        </Heading>
                        <Heading
                            tag='h4'
                            align='center'
                            margin='none'>
                            {`Buyer's balance (before): $${this.props.balance_before}`}
                        </Heading>
                        <Heading
                            tag='h4'
                            align='center'
                            margin='none'>
                            {`Buyer's balance (after): $${this.props.balance_after}`}
                        </Heading>
                    </Box>
                </Box>
            </Layer>
        )
    }
}