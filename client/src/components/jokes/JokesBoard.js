import React, { Component } from 'react'
import JokeList from './JokesList'
import { connect } from 'react-redux'
import { addJoke } from '../../store/actions/jokesActions'

class JokesBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingState: false
        }
    }

    componentDidMount() {
        this.refs.iScroll.addEventListener("scroll", () => {
            if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= (this.refs.iScroll.scrollHeight - 10)) {
                console.log( this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight )
                console.log(this.refs.iScroll.scrollHeight)
                this.setState({ loadingState: true })
                this.props.addJoke()
                this.setState({ loadingState: false })
            }
        });
    }

    render() {
        const { jokes } = this.props

        console.log(jokes)

        return (
            <div style={{ padding: 250}}>
                <div
                    className="vc"
                    ref="iScroll"
                    style={{ height: '400px', width: '1000px', "overflowY": "scroll" }}
                >
                    <div className='jokes container'>
                        <div className='row'>
                            <div className="col s12 m10">
                                <JokeList jokes={jokes} />
                                {this.state.loadingState ? <p className="loading"> loading More Items..</p> : ""}
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
        addJoke: () => dispatch(addJoke())
    }
}

const mapStateToProps = (state) => {
    console.log(state.jokes.jokeList)
    return {
        jokes: state.jokes.jokeList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JokesBoard)