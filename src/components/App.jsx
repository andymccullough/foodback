import React from 'react';

class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="alert alert-danger" role="alert">
                <strong>Oh Goody</strong> React is working
            </div>
        )
    }
}

export default App;