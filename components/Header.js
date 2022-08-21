import React from "react";
import { Icon, Menu } from 'semantic-ui-react';
import { Link } from '../routes';

const Header = (props) => {
    return (
        <Menu style={{ marginTop: '10px'}}>
            <Menu.Item>
                <Icon circular inverted color='teal' name='users' />
            </Menu.Item>

            <Link route='/'>
                <a className="item">Vote For Me</a>
            </Link>

            <Menu.Menu position="right">

                <Link route='/'>
                    <a className="item">Elections</a>
                </Link>

                <Link route='/campaigns/new'>
                    <a className="item">+</a>
                </Link>
            </Menu.Menu>
        </Menu>
    );
};
  
export default Header;