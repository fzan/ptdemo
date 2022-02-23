import React from 'react';
import { Layout } from 'react-admin';
import AppBar from './App/AppBar';

const MyLayout = (props) => <Layout
    {...props}
    // menu={Menu}
    appBar={AppBar}
// notification={Notification}
/>;

export default MyLayout;