import React from 'react';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    updateSearch = (event) => {
        this.setState({search: event.target.value});
        
    }

    handleSearchClick = (event) => {
        event.preventDefault();     
        console.log(this.state.search);
    }

    render() {
        return (
            <nav>
                <div>
                    <input 
                        className="search-input" 
                        value={this.state.search}
                        onChange = {this.updateSearch}
                        />
                    <button className="search-btn" onClick={this.handleSearchClick}>
                        <i className="fa fa-search">

                        </i>
                    </button>
                    <button className="temp-switch">
                        <i 
                            className="fa fa-therometer-empty"
                            aria-hidden="true"
                        >
                        </i><sup>&deg;</sup>C
                    </button>
                </div>                
            </nav>
        );
    }
}