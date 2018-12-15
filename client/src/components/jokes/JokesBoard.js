import React, { Component } from 'react'
import JokeList from './JokesList'
import JokesFilter from './JokesFilter'
import { connect } from 'react-redux'
import { addJoke } from '../../store/actions/jokesActions'
import '../../styles/style.css'

class JokesBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingState: false,
            lastScrollHeight: 0
        }
    }
    
    componentDidMount() {
        this.refs.iScroll.addEventListener("scroll", () => {
            if ((this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight) >= (this.refs.iScroll.scrollHeight - 1)) {
                this.loadJokes()
                this.refs.iScroll.scrollTop -= 1
            }
        })
    }

    loadJokes() {
        this.setState({ loadingState: true })
        this.props.addJoke()
        this.setState({ loadingState: false })
    }

    render() {
        const { jokes } = this.props

        return (
            <div className="jokesContainer">
                {/* <JokesFilter /> */}
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
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addJoke: () => dispatch(addJoke())
    }
}

const mapStateToProps = (state) => {
    return {
        jokes: state.jokes
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JokesBoard)