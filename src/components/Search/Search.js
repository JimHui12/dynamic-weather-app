import React from 'react';

export default function Search (props){
    return (
        <div className="search">
            <div className="search-bar">
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
        </div>
    );
    
}