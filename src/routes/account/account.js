import React from 'react';
import { connect } from 'dva';

function index(){
    return (
        <div>
            account index
        </div>
    )
}

export default connect()(index)