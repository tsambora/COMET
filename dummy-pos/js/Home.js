import React, { Component } from 'react'
import { Link } from 'react-router'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Anchor from 'grommet/components/Anchor'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Card from 'grommet/components/Card'
import Table from 'grommet/components/Table'
import TableRow from 'grommet/components/TableRow'
import Button from 'grommet/components/Button'
import Heading from 'grommet/components/Heading'
import Layer from 'grommet/components/Layer'
import Image from 'grommet/components/Image'
import CheckmarkIcon from 'grommet/components/icons/base/Checkmark'

import { catalog, cart } from './merchantData'

export default class Home extends Component {
  constructor () {
    super()

    this.state = {
      showPaymentModal: false,
      showCometInitModal: false,
      showCometSuccessModal: false
    }

    this.togglePaymentModal = this.togglePaymentModal.bind(this)
    this.toggleCometInitModal = this.toggleCometInitModal.bind(this)
    this.toggleCometSuccessModal = this.toggleCometSuccessModal.bind(this)
  }

  togglePaymentModal() {
    this.setState({ showPaymentModal: !this.state.showPaymentModal })
  }

  toggleCometInitModal() {
    this.setState({ showCometInitModal: !this.state.showCometInitModal })
  }

  toggleCometSuccessModal() {
    this.setState({ showCometSuccessModal: !this.state.showCometSuccessModal })
  }

  render () {
    const catalogDisplay = catalog.map(item => (
      <Tile>
        <Card
          pad='small'
          colorIndex='light-1'
          thumbnail={item.img}
          label={item.label}
          heading={item.price}
          headingStrong={false}
          contentPad='none'
          size='small' />
      </Tile>
    ));

    const cartDisplay = cart.map(item => (
      <TableRow>
        <td>
          {item.name}
        </td>
        <td>
          {item.amount}
        </td>
        <td>
          {item.price}
        </td>
      </TableRow>
    ));

    return (
      <Section
        direction='row'
        pad='small'
        colorIndex='light-2'>
        <Box basis='2/3'>
          <Tiles
            fill
            flush={false}>
            {catalogDisplay}
          </Tiles>
        </Box>
        <Box
          basis='1/3'>
          <Box colorIndex='light-1'>
            <Box
              direction='row' 
              pad='small'>
              <Box
                basis='2/3'
                justify='center'>
                <Heading
                  tag='h3'
                  strong
                  margin='none'>
                  ORDER #692017001
                </Heading>
              </Box>
              <Box
                basis='1/3'
                direction='row'
                justify='end'>
                <Box
                  pad='small'
                  colorIndex='neutral-3-a'>
                  + new
                </Box>
              </Box>
            </Box>
            <Table>
              <thead>
                <tr><th>item</th><th>amount</th><th>price</th></tr>
              </thead>
              <tbody>
                {cartDisplay}
              </tbody>
            </Table>
            <Box 
              pad='small'>
              <Button
                label='CHARGE CUSTOMER $121'
                onClick={this.togglePaymentModal}
                primary={true} />
            </Box>
          </Box>
        </Box>
        {
          this.state.showPaymentModal ?
          <Layer onClose={this.togglePaymentModal}>
            <Box pad='small'>
              <Heading
                tag='h3'
                strong
                margin='none'>
                Select payment method:
              </Heading>
              <Box 
                pad='small'>
                <Button
                  label='COMET'
                  onClick={() => {
                    this.togglePaymentModal()
                    this.toggleCometInitModal()
                  }}
                  primary={true} />
              </Box>
              <Box 
                pad='small'>
                <Button
                  label='CREDIT CARD'
                  onClick={() => {alert('CREDIT CARD')}}
                  primary={true} />
              </Box>
              <Box 
                pad='small'>
                <Button
                  label='CASH'
                  onClick={() => {alert('CASH')}}
                  primary={true} />
              </Box>
            </Box>
          </Layer> : null
        }
        {
          this.state.showCometInitModal ?
          <Layer onClose={() => {
            this.toggleCometInitModal()
            this.toggleCometSuccessModal()
          }}>
            <Box
              align='center'
              pad='small'>
              <Image
                size='small'
                src='public/img/ceki.png' />
              <Box
                align='center'
                pad='small'>
                <Heading
                  tag='h4'
                  align='center'
                  strong                  
                  margin='none'>
                  Your transaction code is <i>755130</i>
                </Heading>
                <Heading
                  tag='h4'
                  align='center'
                  strong                  
                  margin='none'>
                  Give this code to your customer and scan the barcode generated by your customer's COMET app.
                </Heading>
              </Box>
              <Box
                align='center'
                pad='medium'>
                <Heading
                  tag='h5'
                  align='center'
                  margin='none'>
                  © TEAM COMET 2017
                </Heading>
              </Box>
            </Box>
          </Layer> : null
        }
        {
          this.state.showCometSuccessModal ?
          <Layer onClose={() => {
            this.toggleCometSuccessModal()
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
          </Layer> : null
        }
      </Section>
    )
  }
}
