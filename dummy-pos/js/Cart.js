import React, { Component } from 'react'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Heading from 'grommet/components/Heading'
import Table from 'grommet/components/Table'
import TableRow from 'grommet/components/TableRow'

import { cart } from './merchantData'

export default class Cart extends Component {
    render() {
        const cartDisplay = cart.map((item, index) => (
            <TableRow key={index}>
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
            <Box
                pad={{vertical: 'medium', horizontal: 'none'}}
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
                    <Box pad='small'>
                        <Button
                            label='CHARGE CUSTOMER $121'
                            onClick={this.props.togglePaymentModal}
                            primary={true} />
                    </Box>
                </Box>
            </Box>
        )
    }
}