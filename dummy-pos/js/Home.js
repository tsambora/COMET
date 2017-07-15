import React, { Component } from 'react'
import { Link } from 'react-router'
import Section from 'grommet/components/Section'

import Catalog from './Catalog'
import Cart from './Cart'
import PaymentModal from './PaymentModal'
import CometInitModal from './CometInitModal'
import CometSuccessModal from './CometSuccessModal'

import { catalog } from './merchantData'

export default class Home extends Component {
    constructor() {
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

    render() {
        return (
            <Section
                direction='row'
                pad='small'
                colorIndex='light-2'>
                <Catalog />
                <Cart togglePaymentModal={this.togglePaymentModal} />
                {
                    this.state.showPaymentModal ?
                        <PaymentModal
                            togglePaymentModal={this.togglePaymentModal}
                            toggleCometInitModal={this.toggleCometInitModal} />
                        : null
                }
                {
                    this.state.showCometInitModal ?
                        <CometInitModal
                            toggleCometInitModal={this.toggleCometInitModal}
                            toggleCometSuccessModal={this.toggleCometSuccessModal} />
                        : null
                }
                {
                    this.state.showCometSuccessModal ?
                        <CometSuccessModal
                            toggleCometSuccessModal={this.toggleCometSuccessModal} />
                        : null
                }
            </Section>
        )
    }
}
