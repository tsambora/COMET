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

import { catalog, cart } from './merchantData'

export default class Home extends Component {
  constructor () {
    super()

    this.state = {
      showModal: false
    }

    this.togglePaymentModal = this.togglePaymentModal.bind(this)
  }

  togglePaymentModal() {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    const catalogDisplay = catalog.map(item => (
      <Tile>
        <Card
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
              pad='small'>
            <Heading
              tag='h3'
              strong
              margin='none'>
              ORDER #692017001
            </Heading>
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
                label='CHARGE CUSTOMER $110'
                onClick={this.togglePaymentModal}
                primary={true} />
            </Box>
          </Box>
        </Box>
        {
          this.state.showModal ?
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
                  onClick={() => {alert('COMET')}}
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
      </Section>
    )
  }
}
