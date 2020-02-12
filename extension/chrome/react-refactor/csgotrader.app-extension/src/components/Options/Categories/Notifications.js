import React from "react";

import Category from '../Category/Category';
import Row from '../Row';

const notifications = () => {
    return (
        <Category title='Notifications'>
            <Row
                name='Notify on update'
                type='flipSwitchStorage'
                id='updateNotifications'
                description='Whether you want to receive notifications when the extension gets updated'
            />
        </Category>
    );
};

export default notifications;
