import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from '../ethereum/factory';
import Layout from "../components/Layout";
import { Link } from '../routes';
import Election from "../ethereum/election";
import styles from '../styles/CardsWrap.module.css';

class CampaignIndex extends Component {
    static async getInitialProps() {
        const elections = await factory.methods.getDeployedElections().call();

        const registrationPeriods=[];
        const creationTimes=[];
        const startVotes=[];
        const endVotes=[];
        const votingEndDates=[];
        var j=0;
        while (j<elections.length) {
            var election = Election(elections[j]);
            var registrationPeriod = await election.methods.registrationPeriod().call();
            var creationTime = await election.methods.creationTime().call();
            var startVote = await election.methods.startVote().call();
            var votingStartTime = await election.methods.votingStartTime().call();
            var votingPeriod = await election.methods.votingPeriod().call();
            var endVote = await election.methods.endVote().call();

            const votingEndDate = Number(votingStartTime)+Number(votingPeriod);

            j++;
            registrationPeriods.push((registrationPeriod));
            creationTimes.push((creationTime));
            startVotes.push((startVote));
            votingEndDates.push((votingEndDate));
            endVotes.push(endVote);
        }

        return { elections, registrationPeriods, creationTimes, startVotes, votingEndDates, endVotes };
    }

    renderElections() {
        var k=-1;
        const timeNow = +new Date();
        var electionStatus='';
        var electionLink='';
        const items = this.props.elections.map(address => {
            k++;
            const registrationEndDate = Number(this.props.creationTimes[k])+Number(this.props.registrationPeriods[k]);
            if ((this.props.startVotes[k]) && (timeNow < (this.props.votingEndDates[k]*1000))) {
                electionStatus = 'Voting in process';
                electionLink = '/voting';
            }
            else if (this.props.endVotes[k]) {
                electionStatus = 'Result has been declared';
                electionLink = '/results';
            }
            else if (timeNow < ((registrationEndDate)*1000)) {
                electionStatus = 'Candidate Registration Ongoing';
                electionLink = '/registration';
            }
            else if ((this.props.startVotes[k]) && (timeNow > (this.props.votingEndDates[k]*1000))) {
                electionStatus = 'Waiting for manager to declare result'
                electionLink = '/voting'
            }
            else if (timeNow > ((registrationEndDate)*1000)) {
                electionStatus = 'Waiting for manager to start voting';
                electionLink = '/registration';
            }
            return {
                header: address,
                description: (
                    <Link route={`/elections/${address}${electionLink}`}>
                        <a>View Election</a>
                    </Link>
                    ),
                fluid: false,
                meta: electionStatus
            };
        });

        return <Card.Group items={items} />;
    }

    render() {
        return(
            <Layout>
                <br></br>
                <div className={styles.uicard}>
                <Link route='/elections/new'>
                    <a>
                        <Button
                            floated="right"
                            content='Create Election'
                            icon='add circle'
                            color="teal"
                            size="large"
                        />
                    </a>
                </Link>
                {this.renderElections()}
                </div>
            </Layout>
        );
    }
}

export default CampaignIndex;