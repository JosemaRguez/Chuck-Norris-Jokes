import React, { Component } from 'react'
import JokeList from './JokesList'
import { connect } from 'react-redux'
import { addJoke } from '../../store/actions/jokesActions'
import { getCategories } from '../../store/actions/categoriesActions'
import viewportImage  from '../../images/chuckArms.png'
import balloonImage  from '../../images/balloon.png'
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

    componentWillMount(){
        this.props.getCategories()
    }

    componentDidMount() {
        this.refs.iScroll.scrollTop = this.refs.iScroll.scrollHeight - (this.refs.iScroll.scrollHeight * 0.3)
        
        //Load first jokes until user can scroll on viewport
        this.refs.iScroll.addEventListener("wheel", () => {
                if(this.refs.iScroll.scrollTop <= 0){
                    this.setState({ loadingState: true })
                    this.loadJokes()
                    this.setState({ loadingState: false })
                }
        })


        this.refs.iScroll.addEventListener("scroll", () => {
            if (((this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight) >= (this.refs.iScroll.scrollHeight - (this.refs.iScroll.scrollHeight * 0.001))) && !this.state.loadingState ) {
                this.refs.iScroll.scrollTop -= (this.refs.iScroll.scrollHeight * 0.002)
                this.setState({ loadingState: true })
                this.loadJokes()
                this.setState({ loadingState: false })
            }
        })
    }

    loadJokes = () => {
        this.props.addJoke()
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
        this.setState({categorySelected: e.target.innerHTML})
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
                
                <img style={{width: '203px', height:'550px', left: '30px', top: '82px', position: 'absolute'}} alt='png' src={viewportImage} />
                <img style={{width: '600px', height:'125px', left:'220px', top: '30px', position: 'relative'}} alt='png' src={balloonImage} />
                <div className="jokesContainer">
                    <div
                        className="scrollbar" id="style-1"
                        ref="iScroll"
                    >
                        <h4 className="category-text">SCROLL HERE TO LOAD JOKES!</h4>
                        <div className='container'>
                            <div className="col s12 m10">
                                <JokeList jokes={jokes} category={this.state.categorySelected}/>
                            </div>
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
        getCategories: () => dispatch(getCategories())
    }
}

const mapStateToProps = (state) => {
    return {
        jokes: state.jokes,
        categories: state.categories
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JokesBoard)