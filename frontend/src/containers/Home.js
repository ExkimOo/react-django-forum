import React from 'react';
import Header from '../components/Header';
import Avatar from '../components/Avatar';
import { ListGroup, List } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Header />
            <ListGroup>
                <ListGroup.Item>
                    <Avatar />
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Home
