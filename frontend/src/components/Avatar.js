import React from 'react';
import { Col, Image } from 'react-bootstrap';

const Avatar = () => {
    return (
        <div>
            <Col md={11}>
                <Image src={'https://www.cybersport.ru/material/social/image/fb/547438'} rounded style={{width: "150px", height: "150px"}} />
            </Col>
        </div>
    )
}

export default Avatar
