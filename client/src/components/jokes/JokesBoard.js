import React, { Component } from 'react'
import JokeList from './JokesList'
import { connect } from 'react-redux'
import { addJoke } from '../../store/actions/jokesActions'
import { saveScrollPos } from '../../store/actions/scrollActions'
import { getCategories } from '../../store/actions/categoriesActions'
import viewportImage from '../../images/chuckArms.png'
import balloonImage from '../../images/balloon.png'
import '../../styles/style.css'

class JokesBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loadingState: false,
            displayMenu: false,
            categorySelected: '--Select--'
        }
    }

    componentWillMount() {
        this.props.getCategories()
    }

    componentDidMount() {
        this.refs.iScroll.scrollTop = this.props.scrollLastSize

        //Load first jokes until user can scroll on viewport
        this.refs.iScroll.addEventListener("wheel", () => {
            if (this.refs.iScroll.scrollTop <= 0 && !this.state.loadingState) {
                this.loadJokes()
            }
        })

        this.refs.iScroll.addEventListener("scroll", () => {
            this.props.saveScrollPos(this.refs.iScroll.scrollTop)

            if (((this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight) >= (this.refs.iScroll.scrollHeight - (this.refs.iScroll.scrollHeight * 0.01))) && !this.state.loadingState) {
                this.loadJokes()
                this.refs.iScroll.scrollTop -= (this.refs.iScroll.scrollHeight * 0.011)
                
            }

        })
    }

    loadJokes() {
        this.props.addJoke()
        this.setState({ loadingState: true }, () => {
            
            this.setState({ loadingState: false })
        })

    }

    showDropdownMenu = (event) => {
        event.preventDefault()
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu)
        })
    }

    hideDropdownMenu = () => {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        })
    }

    handleOnClick = (e) => {
        e.preventDefault()
        this.setState({ categorySelected: e.target.innerHTML })
    }

    handleMsg = (jokes) => {
        if (Object.keys(jokes).length === 0) {
            return (
                <h4 className="category-text">SCROLL HERE TO LOAD JOKES!</h4>
            )
        }
        else if ( String(this.state.categorySelected) === String('--Select--') && ((this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight) >= (this.refs.iScroll.scrollHeight - (this.refs.iScroll.scrollHeight * 0.1)))) {
            return (
                <div>
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                    <p className="info-text">Keep scrolling</p>
                </div>

            )
        }
    }

    render() {
        const { jokes } = this.props
        const { categories } = this.props

        return (
            <div>
                <div className="dropdown">
                    <p className="category-text">Filter by category</p>
                    <div className="dropDownButton" id="dropdownSelected" onClick={this.showDropdownMenu}>{this.state.categorySelected}</div>
                    {this.state.displayMenu && <ul className="dropdownList" id="style-3">
                        {categories.map(item => (
                            <li className="list" key={item} onClick={this.handleOnClick}>{item}</li>
                        ))}
                    </ul>}
                </div>

                <img style={{ width: '203px', height: '550px', left: '30px', top: '82px', position: 'absolute' }} alt='png' src={viewportImage} />
                <img style={{ width: '600px', height: '125px', left: '220px', top: '30px', position: 'relative' }} alt='png' src={balloonImage} />
                <div className='jokesContainer'>
                    <div
                        className='scrollbar' id='style-1'
                        ref='iScroll'
                    >
                        <div className='container'>
                            <div className='col s12 m10'>
                                <JokeList jokes={jokes} category={this.state.categorySelected} />
                            </div>
                            {this.handleMsg(jokes)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addJoke: () => dispatch(addJoke()),
        getCategories: () => dispatch(getCategories()),
        saveScrollPos: (scrollPos) => dispatch(saveScrollPos(scrollPos))
    }
}

const mapStateToProps = (state) => {
    return {
        jokes: state.jokes,
        categories: state.categories,
        scrollLastSize: state.scrollLastSize
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JokesBoard)