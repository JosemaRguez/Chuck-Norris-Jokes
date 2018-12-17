import React, { Component } from 'react'
import JokeList from './JokesList'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../styles/style.css'

class JokesFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMenu: false
        }

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }


    showDropdownMenu(event) {
        event.preventDefault()
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu)
        })
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        })
    }

    handleLoad() {
        this.refs.iScroll.scrollTop = this.refs.iScroll.scrollHeight - 5
    }

    render() {
        const { jokes } = this.props
        const { categories } = this.props
        const category = this.props.match.params.category
        
        return (
            <div>
                <div className="dropdown">
                    <p style={{ textAlign: 'center' }}>Filter by category</p>
                    <div className="dropDownButton" id="dropdownSelected" onClick={this.showDropdownMenu}>{category}</div>
                    {this.state.displayMenu && <ul className="dropdownList">
                        {categories.map((item) => (
                            <Link to={"/filter/" + item} key={item}><li className="list">{item}</li></Link>
                        ))}
                    </ul>}
                </div>

                <div className="jokesContainer">
                    <h3 className='randomJokeTitle'>Scroll down to get more jokes!</h3>
                    <div
                        className="scrollbar" id="style-3"
                        ref="iScroll"
                    >
                        <div className='container'>
                            <div className="col s12 m10">
                                <JokeList jokes={jokes} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}


const mapStateToProps = (state, ownProps) => {
    return {
        jokes: state.jokes,
        categories: state.categories
    }
}


export default connect(mapStateToProps)(JokesFilter)