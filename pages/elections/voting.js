import React, { Component } from "react";
import { Label, Card, Grid, Divider, Button, Statistic, Message, Header, Container } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Election from '../../ethereum/election';
import web3 from '../../ethereum/web3';
import { Link, Router } from '../../routes';
import CountdownCardTimer from "../../components/countdownCardTimer";
import styles from '../../styles/CardsWrap.module.css';

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
        const votingPeriod = await election.methods.votingPeriod().call();
        const votingStartTime = await election.methods.votingStartTime().call();
        const endVote = await election.methods.endVote().call();
        
        const timeNow = +new Date();
        const creationTimeReadable = new Intl.DateTimeFormat('en-PK', { dateStyle: 'full', timeStyle: 'long' }).format(creationTime*1000);
        const registrationPeriodReadable = new Date(registrationPeriod * 1000).toISOString().slice(0, 19);
        const registrationEndDate = Number(creationTime)+Number(registrationPeriod);
        const votingEndDate = Number(votingStartTime) + Number(votingPeriod); 
        const registrationEndDateReadable = new Intl.DateTimeFormat('en-PK', { dateStyle: 'full', timeStyle: 'long' }).format((Number(creationTime)+Number(registrationPeriod))*1000);
        const votingEndDateReadable = new Intl.DateTimeFormat('en-PK', { dateStyle: 'full', timeStyle: 'long' }).format(votingEndDate*1000);
        const votingStartTimeReadable = new Intl.DateTimeFormat('en-PK', { dateStyle: 'full', timeStyle: 'long' }).format(votingStartTime*1000);

        const numberOfCandidates = await election.methods.getNumberOfCandidates().call();
        const winners = await election.methods.getWinners().call();
        const candidates=[];
        var loadingArray=[];
        var j=0;
        while (j<numberOfCandidates) {
            var candidate = await election.methods.profiles(j).call();
            j++;
            candidates.push(Object.values(candidate));
            loadingArray.push(false);
        }

        var votingTimeEnd=false
        if (timeNow > (votingEndDate*1000)) {
            votingTimeEnd=true;
        }

        var labelMessage='';;
        if (!endVote) {
            labelMessage = 'Leading';
        }
        else if (endVote) {
            labelMessage = 'Winner';
            votingTimeEnd = true;
        }
        
        return {
            address,
            votingEndDate,
            votingStartTimeReadable,
            candidates,
            loadingArray,
            winners,
            labelMessage,
            votingTimeEnd,
            managerBrowsing,
            votingEndDateReadable,
            endVote,
            creationTimeReadable
        };
    }

    state = {
        errorMessage: '',
        loading: false,
        errorMessageHide: true,
    };

    onButtonVoteForCandidate = (candidateId) => {
        return(
            <Button color='teal' floated="right" compact loading={this.props.loadingArray[candidateId]} disabled={this.props.votingTimeEnd} onClick={async event => {
                event.preventDefault();

                this.props.loadingArray[candidateId]=true;

                const election = Election(this.props.address);
                this.setState({ loading: true, errorMessage:'', errorMessageHide: true });

                try {
                    const accounts = await web3.eth.getAccounts();
                    await election.methods.Vote(Number(candidateId)).send({
                        from: accounts[0]
                    });
        
                    Router.replaceRoute(`/elections/${this.props.address}/voting`);
                } catch (err) {
                    this.setState({errorMessage: err.message });
                    this.setState({errorMessageHide: false});
                }        

                this.setState({ loading: false});
                this.props.loadingArray[candidateId]=false;
                }}>
                Vote
            </Button> 
        );
    }

    leadingCandidateWinner(index) {
        if (this.props.winners.find(element => element == index))
        return (
            <div>
                <Label as='a' color='teal' tag>
                    {this.props.labelMessage}
                </Label>
            </div>
        );
    }

    renderCandidatesForVoting() {
        const items = this.props.candidates.map(candidate => {
            return (
                <div>
                    <Grid>
                    <Grid.Row columns={3}>
                        <Grid.Column width={8}>
                        <div className={styles.uicardpadding}>
                            <Card>
                            <Card.Content>
                            {this.onButtonVoteForCandidate(candidate[4])}
                            <Card.Header>{candidate[0]}</Card.Header>
                            <Card.Meta>{candidate[2]}</Card.Meta>
                            <Card.Description>{candidate[1]}</Card.Description>
                            </Card.Content>
                            </Card>
                        </div>
                        </Grid.Column>
                        <Grid.Column width={4} verticalAlign='middle'>
                        <div>
                            <Statistic>
                                <Statistic.Value>{candidate[3]}</Statistic.Value>
                                <Statistic.Label>Votes</Statistic.Label>
                            </Statistic>
                        </div>
                        </Grid.Column>
                        <Grid.Column width={4} verticalAlign='middle'>
                            {this.leadingCandidateWinner(candidate[4])}
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                    <br></br>
                </div>
                
            );
        });

        return <div className={styles.uicard}>
                {items}
        </div>;
    }

    onDeclareResult = async event => {
        event.preventDefault();
        const election = Election(this.props.address);

        this.setState({ loading: true, errorMessage:'' });
        
        try {
            const accounts = await web3.eth.getAccounts();
            await election.methods.declareResult().send({
                from: accounts[0]
            });
            
            Router.replaceRoute(`/elections/${this.props.address}/results`);
        } catch (err) {
            this.setState({errorMessage: err.message });
        }


        this.setState({ loading: false});
    };

    votingPageUpperContent() {
        if (!this.props.votingTimeEnd)
        {
            return (
                <Container>
                <h3>
                    Election {this.props.address}<br></br>
                    Voting Started on {this.props.votingStartTimeReadable}<br></br>
                </h3>
                <Divider />
                <Container text>
                <Header as='h3' textAlign="center">Voting ends in</Header>
                <CountdownCardTimer endTime={this.props.votingEndDate} />
                </Container>
                </Container>
            );
        }

        else if (this.props.endVote) {
            return (
                <Container>
                <h3>
                    Election {this.props.address}<br></br>
                    Election Started on {this.props.creationTimeReadable}<br></br>
                    Election Ended on {this.props.votingEndDateReadable}<br></br>
                </h3>
                <Divider />
                <Container text>
                    <Header as='h3' textAlign="center">Winner has been declared</Header>
                </Container>
                </Container>
            );
        }

        else if (this.props.votingTimeEnd) {
            if (!this.props.managerBrowsing) {
                return (
                    <Container>
                    <h3>
                        Election {this.props.address}<br></br>
                        Voting Ended on {this.props.votingEndDateReadable}<br></br>
                    </h3>
                    <Divider />
                    <Container text>
                    <Header as='h3' textAlign="center">Manager will declare result soon</Header>
                    </Container>
                    </Container>
                );
            }

            else if (this.props.managerBrowsing) {
                return (
                    <Container>
                    <h3>
                        Election {this.props.address}<br></br>
                        Voting Ended on {this.props.votingEndDateReadable}<br></br>
                    </h3>
                    <Divider />
                    <div className={styles.verticalAlign}>
                    <Button color='teal' style={{textAlign: "center"}} loading={this.state.loading} onClick={this.onDeclareResult}>
                                        Declare Result
                    </Button>
                    </div>
                    </Container>
                );
            }
        }
    }
    

    render() {

        return (
            <Layout>
                {this.votingPageUpperContent()}
                <Divider />
                <Message negative hidden={this.state.errorMessageHide}>
                    <p>{this.state.errorMessage}</p>
                </Message>
                {this.renderCandidatesForVoting()}
            </Layout>
        );
    }
}

export default CampaignShow;