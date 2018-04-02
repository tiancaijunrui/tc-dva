import React from 'react';
import { connect } from 'dva';
import styles from './login.css';

function login() {
    return (
        <div>
            这是登陆界面
        </div>
    );
}

export default connect()(login);