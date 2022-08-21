import React, { Component } from "react";
import { Header, Message, Button, Container, Card, Grid, Divider, Form } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Election from '../../ethereum/election';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
import CountdownCardTimer from "../../components/countdownCardTimer";
import RegisterForm from "../../components/RegisterForm";
import styles from '../../styles/CardsWrap.module.css';
import RenderCandidatesForRegistration from "../../components/RenderCandidatesForRegistration";

class CampaignShow extends Component {
    static async getInitialProps(props) {
        const election = Election(props.query.address);
        const { address } = props.query;
        const manager = await election.methods.manager().call();

        const accounts = await web3.eth.getAccounts();
        var managerBrowsing = false;
        if (accounts[0] == manager) {
            managerBrowsing = true;
        };
        
        const creationTime = await election.methods.creationTime().call();
        const registrationPeriod = await election.methods.registrationPeriod().call();
        const creationTimeReadable = new Intl.DateTimeFormat('en-PK', { dateStyle: 'full', timeStyle: 'long' }).format(creationTime*1000);
        const registrationPeriodReadable = new Date(registrationPeriod * 1000).toISOString().slice(0, 19);
        const registrationEndDate = Number(creationTime)+Number(registrationPeriod);
        const registrationEndDateReadable = new Intl.DateTimeFormat('en-PK', { dateStyle: 'full', timeStyle: 'long' }).format((Number(creationTime)+Number(registrationPeriod))*1000);

        const numberOfCandidates = await election.methods.getNumberOfCandidates().call();
        const candidates=[];
        var j=0;
        while (j<numberOfCandidates) {
            var candidate = await election.methods.profiles(j).call();
            j++;
            candidates.push(Object.values(candidate));
        }
        
        return {
            creationTimeReadable,
            registrationEndDate,
            registrationEndDateReadable,
            numberOfCandidates,
            candidates,
            manager,
            managerBrowsing,
            address
        };
    }

    state = {
        errorMessage: '',
        loading: false
    };

    onButtonStartVote = async event => {
        event.preventDefault();
        const election = Election(this.props.address);

        this.setState({ loading: true, errorMessage:'' });
        
        try {
            const accounts = await web3.eth.getAccounts();
            await election.methods.startVoting().send({
                from: accounts[0]
            });
            
            Router.replaceRoute(`/elections/${this.props.address}/voting`);
        } catch (err) {
            this.setState({errorMessage: err.message });
        }


        this.setState({ loading: false});
    };

    renderCandidatesForRegistration() {
        const items = this.props.candidates.map(candidate => {
            return {
                header: candidate[0],
                meta: candidate[2],
                description: candidate[1]
            };
        });

        return <div className={styles.uicard}> <Card.Group /*style={{width: '20px'}}*/ items={items} /> </div>;
    }

    renderRegistrationPage() {
        return (
            <Layout>
                <Grid>
                    <Grid.Row>
                    <h3>Election {this.props.address}<br></br>
                    Created on {this.props.creationTimeReadable}<br></br></h3>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={12}>
                        <Container text>
                            <Header as='h3' textAlign="center">Registration ends in</Header>
                            <CountdownCardTimer endTime={this.props.registrationEndDate} />
                        </Container>
                            <Divider section/>
                            <RenderCandidatesForRegistration candidates={this.props.candidates} />
                            {/*this.renderCandidatesForRegistration()*/} 
                        </Grid.Column>
                        <Grid.Column width={4} floated='right'>
                            <Card>
                                <Card.Content>
                                    <Card.Header textAlign="center">Register as Candidate</Card.Header>
                                </Card.Content>
                                <Card.Content>
                                    <RegisterForm address={this.props.address} />
                                </Card.Content>
                            </Card>
                            <Divider />
                            <Card centered style={{width: '150px'}}>
                                <Card.Content>
                                <Card.Header textAlign="center">{this.props.numberOfCandidates}</Card.Header>
                                <Card.Description textAlign="center">
                                    Registered Candidates
                                </Card.Description>
                                </Card.Content> 
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }

    renderRegistrationCompletePage() {
        if (this.props.managerBrowsing) {
            return (
                <Layout>
                    <Grid>
                        <Grid.Row>
                        <h3>
                            Election {this.props.address}<br></br>
                            Registration ended on {this.props.registrationEndDateReadable}<br></br>
                        </h3>
                        </Grid.Row>
                        <Divider section/>
                        <Grid.Row>
                            <Grid.Column width={12}>
                                {this.renderCandidatesForRegistration()} 
                            </Grid.Column>
                            <Grid.Column width={4} floated='right' textAlign="center">
                            <Form onSubmit={this.onButtonStartVote} error={!!this.state.errorMessage}>
                                <Button color='teal' loading={this.state.loading}>
                                        Start Voting
                                </Button>
                                <Message error header='Oops!' content={this.state.errorMessage} />
                                </Form>
                                <Card centered >
                                    <Card.Content>
                                    <Card.Header textAlign="center">{this.props.numberOfCandidates}</Card.Header>
                                    <Card.Description textAlign="center">
                                        Registered Candidates
                                    </Card.Description>
                                    </Card.Content> 
                                </Card>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Layout>
            );    
        }
        return (
            <Layout>
                <Grid>
                    <Grid.Row>
                    <h3>
                        Election {this.props.address}<br></br>
                        Registration ended on {this.props.registrationEndDateReadable}<br></br>
                    </h3>
                    </Grid.Row>
                    <Divider section/>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            {this.renderCandidatesForRegistration()} 
                        </Grid.Column>
                        <Grid.Column width={4} floated='right'>
                            <h3>Manager will start Voting soon</h3>
                            
                            <Card centered style={{width: '150px'}}>
                                <Card.Content>
                                <Card.Header textAlign="center">{this.props.numberOfCandidates}</Card.Header>
                                <Card.Description textAlign="center">
                                    Registered Candidates
                                </Card.Description>
                                </Card.Content> 
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }


    render() {
        const timeNow = +new Date();
        if (timeNow < ((this.props.registrationEndDate)*1000)){
            return (
                <div>{this.renderRegistrationPage()}</div>
            );
        }
        else if (timeNow > ((this.props.registrationEndDate)*1000)){
            return (
                <div>{this.renderRegistrationCompletePage()}</div>
            );
        }
    }
}

export default CampaignShow;