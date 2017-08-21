import React from 'react';

class MenuTableAddEntry extends React.Component {
        constructor(props){
                super(props)
        }
        render(){
                return (
                        <div className="menu-table-add-entry">
                                <input ref={(text) => {this.test = text}} type="text"/>
                                <button onClick={() => {this.props.addMenu(this.test.value); this.test.value = '';}}>Save</button>
                        </div>
                );
        }
}

export default MenuTableAddEntry;