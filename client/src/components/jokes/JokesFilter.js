import React from 'react'
import '../../styles/style.css'

const JokesFilter = (category) => {
        return (
            <div className="dropdown">
                    <p style={{ textAlign: 'center' }}>Filter by category</p>
                    <div className="dropDownButton" id="dropdownSelected"></div>
                    {/* {this.state.displayMenu && <ul className="dropdownList">
                        {categoryList.map((item) => (
                            <li className="list" key={item} onClick={this.handleOnClick}>{item}</li>
                        ))}
                    </ul>} */}
            </div>
        );
    
}


export default JokesFilter