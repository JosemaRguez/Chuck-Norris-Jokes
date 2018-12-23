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
            lastScrollHeight: 0,
            displayMenu: false,
            categorySelected: '--Select--',
            lastScrollSize: 500
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleLoad = this.handleLoad.bind(this)
        this.showDropdownMenu = this.showDropdownMenu.bind(this)
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this)
    }


    componentDidMount() {
        this.props.getCategories()
        this.refs.iScroll.scrollTop = this.state.lastScrollSize

        this.refs.iScroll.addEventListener("scroll", () => {
            if (((this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight) >= (this.refs.iScroll.scrollHeight-2)) && !this.state.loadingState ) {
                this.setState({ loadingState: true })
                this.loadJokes()
                this.setState({ loadingState: false })
                this.refs.iScroll.scrollTop -= 1
            }

            this.setState({lastScrollSize: this.refs.iScroll.scrollHeight})
        })
    }

    loadJokes() {
        this.props.addJoke()
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

    handleOnClick = (e) => {
        this.setState({categorySelected: e.target.innerHTML})
    }

    handleLoad() {
        // this.refs.iScroll.scrollTop = this.props.lastScrollSize   
            this.loadJokes()
    }

    render() {
        const { jokes } = this.props
        const { categories } = this.props


        return (
            <div>
                <div className="dropdown">
                    <p style={{ textAlign: 'center' }}>Filter by category</p>
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
                        className="scrollbar" id="style-3"
                        ref="iScroll"
                    >
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