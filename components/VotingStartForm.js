import React, { Component } from 'react';
import { Form, Input, Message, Button, TextArea } from 'semantic-ui-react';
import Election from '../ethereum/election';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class VotingStartForm extends Component {
    state = {
        valueName: '',
        valueSlogan: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async event => {
        event.preventDefault();
        const election = Election(this.props.address);

        this.setState({ loading: true, errorMessage:'' });

        try {
            const accounts = await web3.eth.getAccounts();
            await election.methods.signAsCandidate(this.state.valueName, this.state.valueSlogan).send({
                from: accounts[0]
            });
            
            Router.replaceRoute(`/elections/${this.props.address}`);
        } catch (err) {
            this.setState({errorMessage: err.message });
        }

        this.setState({ loading: false, valueName: '', valueSlogan:''});
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Message error header='Oops!' content={this.state.errorMessage} />
                <Button color='teal' loading={this.state.loading}>
                    Register!
                </Button>
            </Form>
        );
    }
}

export default VotingStartForm;