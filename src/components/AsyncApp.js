import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchMenus } from '../actions/MenuTableContainer';
import MenuTableContainer from './MenuTableContainer';

class AsyncApp extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.dispatch(fetchMenus());
    }

    render(){
        return (
            <MenuTableContainer />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menus: state.menus
    }
};

export default connect(mapStateToProps)(AsyncApp);