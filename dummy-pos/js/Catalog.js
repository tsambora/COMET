import React, { Component } from 'react'
import Box from 'grommet/components/Box'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Card from 'grommet/components/Card'

import { catalog } from './merchantData'

export default class Cart extends Component {
    render() {
        const catalogDisplay = catalog.map((item, index) => (
            <Tile key={index}>
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

        return (
            <Box
                pad='none'
                basis='2/3'>
                <Tiles
                    fill
                    pad={{vertical: 'small', horizontal: 'none'}}
                    flush={false}>
                    {catalogDisplay}
                </Tiles>
            </Box>
        )
    }
}