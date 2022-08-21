import React, { Component } from 'react';
import { Step, Icon } from 'semantic-ui-react';

  
  function ElectionSteps1(props) {
    var steps = [
        {
          key: 'createElection',
          active: true,
          icon: 'group',
          title: 'Create an Election',
          description: 'Start Electoral Process',
        },
        {
          key: 'billing',
          disabled: true,
          icon: 'payment',
          title: 'Billing',
          description: 'Enter billing information',
        },
        { key: 'confirm', 
        disabled:true , 
        icon: 'info', 
        title: 'Confirm Order' },
      ];
    
    return(<Step.Group 
        style={{ position:'absolute',  bottom:10, left:10}} 
        items={steps} />)
  }

export default ElectionSteps1;