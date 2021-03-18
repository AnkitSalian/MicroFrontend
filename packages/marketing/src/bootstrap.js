import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';

import App from './App';

const mount = (elem, { onNavigate }) => {

    const history = createMemoryHistory();

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history} />,
        elem
    );
};

if (process.env.NODE_ENV === 'development') {
    const elem = document.querySelector('#_marketing-dev-root');

    if (elem) {
        mount(elem, {});
    }

}

export { mount };