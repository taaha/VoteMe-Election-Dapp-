import React, { Component } from 'react';
import { Form, Input, Message, Button, TextArea } from 'semantic-ui-react';
import Election from '../ethereum/election';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class RegisterForm extends Component {
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
            
            Router.replaceRoute(`/elections/${this.props.address}/registration`);
        } catch (err) {
            this.setState({errorMessage: err.message });
        }

        this.setState({ loading: false, valueName: '', valueSlogan:''});
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Name</label>
                    <Input
                        placeholder='What should we call you?'
                        value={this.state.valueName}
                        onChange={event => this.setState({ valueName: event.target.value })}
                    />
                </Form.Field>
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Slogan'
                    placeholder='Why should we vote for you?'
                    value={this.state.valueSlogan}
                    onChange={event => this.setState({ valueSlogan: event.target.value })}
                />
                <Message error header='Oops!' content={this.state.errorMessage} />
                <Button color='teal' loading={this.state.loading}>
                    Register!
                </Button>
            </Form>
        );
    }
}

export default RegisterForm;