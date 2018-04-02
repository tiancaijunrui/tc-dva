import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import example from './components/Example';
import uc from './routes/uc/login';
import blog from './routes/blog/blog';
import account from './routes/account/account';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/example" exact component={example} />
        <Route path="/uc/login" exact component={uc} />
        <Route path="/blog/index" exact component={blog} />
        <Route path="/account/index" exact component={account} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
