import React, { Component } from 'react'
import JokeList from './JokesList'
import { connect } from 'react-redux'
import { addJoke } from '../../store/actions/jokesActions'
import { loadSomeJokes } from '../../store/actions/jokesActions'

class JokesBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingState: false
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
        this.props.loadSomeJokes()
        return (
            <div className="container" style={{ paddingRight: 400, paddingTop: 250}}>
                <div
                    className="container"
                    ref="iScroll"
                    style={{ height: '400px', width: '1000px', overflowY: 'scroll'}}
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

const mapSomeJokes = (dispatch) => {
    return {
        loadSomeJokes: () => dispatch(loadSomeJokes())
    }
}

const mapStateToProps = (state) => {
    return {
        jokes: state.jokes
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mapSomeJokes)(JokesBoard)