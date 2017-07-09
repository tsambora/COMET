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

import { catalog, cart } from './merchantData'

export default class Home extends Component {
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
          basis='1/3'
          colorIndex='light-1'>
          <Table>
            <thead>
              <tr>
                <th>item</th><th>amount</th><th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartDisplay}
            </tbody>
          </Table>
        </Box>
      </Section>
    )
  }
}
