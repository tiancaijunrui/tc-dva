import React from 'react';
import { connect } from 'dva';

function index(){
    return (
        <div>
            blog index
        </div>
    )
}

export default connect()(index)