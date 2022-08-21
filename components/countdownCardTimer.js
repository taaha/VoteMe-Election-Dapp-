import React, { useEffect, useState } from "react";
import {Header, Container, Grid, Card} from 'semantic-ui-react';
import styles from '../styles/CardsWrap.module.css';

function CountdownCardTimer(props) {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        //let difference = +new Date(`10/01/${year}`) - +new Date();
        let difference = props.endTime*1000 - +new Date();
      
        let timeLeft = {};
      
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
      
        return timeLeft;
      }
    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      
        return () => clearTimeout(timer);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
      
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });

      const items = [
        {
          header: timeLeft.days,
          description:
            'Days',
         },
        {
          header: timeLeft.hours,
          description:
            'Hours',
        },
        {
          header: timeLeft.minutes,
          description:
            'Minutes',
        },
        {
            header: timeLeft.seconds,
            description:
                'Seconds',
        },
      ]

  return (
    <Container text className={styles.uicard}>
        {/*timerComponents.length ? timerComponents : <span>Time's up!</span>*/}
        {/*<Header as='h3' textAlign="center">Registration ends in</Header>*/}
        <Card.Group itemsPerRow={4} centered={true}>
            <Card>
            <Card.Content>
                <Card.Header textAlign="center">{timeLeft.days}</Card.Header>
                <Card.Description textAlign="center">
                Days
                </Card.Description>
            </Card.Content>
            </Card>
            <Card>
            <Card.Content>
                <Card.Header textAlign="center">{timeLeft.hours}</Card.Header>
                <Card.Description textAlign="center">
                Hours
                </Card.Description>
            </Card.Content>
            </Card>
            <Card>
            <Card.Content>
                <Card.Header textAlign="center">{timeLeft.minutes}</Card.Header>
                <Card.Description textAlign="center">
                Minutes
                </Card.Description>
            </Card.Content>
            </Card>
            <Card>
            <Card.Content>
                <Card.Header textAlign="center">{timeLeft.seconds}</Card.Header>
                <Card.Description textAlign="center">
                Seconds
                </Card.Description>
            </Card.Content>
            </Card>
      </Card.Group>
    </Container>
  )
}

export default CountdownCardTimer;