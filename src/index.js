import React from 'react';
import { render } from 'react-dom'; //render into html
import App from '../components/app';

render(<App/>, document.getElementById('app'));

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <Router history={browserHistory} routes={routes} />
//   </Provider>
//   , document.querySelector('.main'));
