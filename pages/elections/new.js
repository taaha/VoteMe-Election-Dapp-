import React, { Component, createFactory } from "react";
import { Step, Icon, Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from "../../components/Layout";
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Link, Router } from '../../routes';

class CampaignNew extends Component {
    state = {
        registrationPeriod: '',
        votingPeriod: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods
            .deployElection(this.state.registrationPeriod, 
                this.state.votingPeriod)
            .send({
                from: accounts[0]
            });

            Router.pushRoute('/');
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false });
    };

    render() {
        return (
            <Layout>
                <h3>Create an Election</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Registration Period</label>
                        <Input
                            style={{width: "370px"}} 
                            label='seconds' 
                            labelPosition="right"
                            value={this.state.registrationPeriod}
                            onChange={event => 
                                this.setState({registrationPeriod: event.target.value})}                            
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Voting Period</label>
                        <Input 
                            style={{width: "370px"}}
                            label='seconds' 
                            labelPosition="right"
                            value={this.state.votingPeriod}
                            onChange={event => 
                                this.setState({votingPeriod: event.target.value})}                            
                        />
                    </Form.Field>
                    <Message error header='Oops' content={this.state.errorMessage} />
                    <Button loading={this.state.loading} color='teal'>Create!</Button>
                </Form>          
            </Layout>
        );
    }
}

export default CampaignNew