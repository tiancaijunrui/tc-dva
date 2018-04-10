import React from 'react';
import { connect } from 'dva';
import { Link, Redirect, Switch, Route } from 'dva/router';
import styles from './login.css';

function login() {
    return (
        <div>
            这是登陆界面
        </div>
    );
}

export default connect()(login);