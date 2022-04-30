import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCQt5WSaR4SJ8EPX3p_M6r09Yz4L6chxc0';

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

ReactDom.render(<App />, document.querySelector('.container'));