import React from 'react';

import AddTodo from '../containers/AddTodo';
import VisibleTodo from '../containers/VisibleTodo';
import Footer from './Footer';

const App = function() {
    return <div>
        <AddTodo/>
        <VisibleTodo/>
        <Footer/>
    </div>
}

export default App;