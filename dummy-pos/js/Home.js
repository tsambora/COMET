import React, { Component } from 'react'
import { Link } from 'react-router'
import Section from 'grommet/components/Section'

import Catalog from './Catalog'
import Cart from './Cart'
import PaymentModal from './PaymentModal'
import CometInitModal from './CometInitModal'
import CometSuccessModal from './CometSuccessModal'
import CometFailedModal from './CometFailedModal'

import { catalog } from './merchantData'

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            showPaymentModal: false,
            showCometInitModal: false,
            showCometSuccessModal: false,
            showCometFailedModal: false,
            balance_before: null,
            balance_after: null,
        }

        this.togglePaymentModal = this.togglePaymentModal.bind(this)
        this.toggleCometInitModal = this.toggleCometInitModal.bind(this)
        this.toggleCometSuccessModal = this.toggleCometSuccessModal.bind(this)
        this.toggleCometFailedModal = this.toggleCometFailedModal.bind(this)
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

    setBalance(balance_before, balance_after) {
        this.setState({ balance_before, balance_after })
    }

    toggleCometFailedModal() {
        this.setState({ showCometFailedModal: !this.state.showCometFailedModal })
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
                            toggleCometSuccessModal={this.toggleCometSuccessModal}
                            setBalance={(balance_before, balance_after) => { this.setBalance(balance_before, balance_after) }}
                            toggleCometFailedModal={this.toggleCometFailedModal} />                            
                        : null
                }
                {
                    this.state.showCometSuccessModal ?
                        <CometSuccessModal
                            balance_before={this.state.balance_before}
                            balance_after={this.state.balance_after}
                            toggleCometSuccessModal={this.toggleCometSuccessModal} />
                        : null
                }
                {
                    this.state.showCometFailedModal ?
                        <CometFailedModal
                            toggleCometFailedModal={this.toggleCometFailedModal} />
                        : null
                }
            </Section>
        )
    }
}
