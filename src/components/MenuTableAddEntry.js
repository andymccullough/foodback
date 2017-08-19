import React from 'react';

class MenuTableAddEntry extends React.Component {
        constructor(props){
                super(props)
        }
        render(){
                return (
                        <div className="menu-table-add-entry">
                                <input ref="test" type="text"/>
                                <button onClick={() => {this.props.addMenu(this.refs.test.value)}}>Save</button>
                        </div>
                );
        }
}

export default MenuTableAddEntry;