import React from 'react';

export default function Nav (props){
    return (
        <nav>
            <div>
                <input 
                    className="search-input" 
                    value={props.inputValue} 
                    onChange={props.handleInputChange} 
                />
                <button className="search-btn" 
                    onClick={props.handleSearch}>
                    <i className="fa fa-search">

                    </i>
                </button>
                <button onClick={props.toggleUnit} className="temp-switch">
                    <i 
                        className="fa fa-therometer-empty"
                        aria-hidden="true"
                    >
                    </i><sup>&deg;</sup>{props.unit.toUpperCase()}
                </button>
            </div>                
        </nav>
    );
    
}