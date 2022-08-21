import React, { Component, useEffect, useState } from "react";
import {Header, Container, Grid, Card} from 'semantic-ui-react';
import styles from '../styles/CardsWrap.module.css';

function RenderCandidatesForRegistration(props) {
    const items = props.candidates.map(candidate => {
        return {
            header: candidate[0],
            meta: candidate[2],
            description: candidate[1]
        };
    });

    return(
        <div className={styles.uicard}> <Card.Group /*style={{width: '20px'}}*/ items={items} /> </div>
    )
    
}

export default RenderCandidatesForRegistration;