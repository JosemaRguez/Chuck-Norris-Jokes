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
            if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= (this.refs.iScroll.scrollHeight - 5)) {
                this.refs.iScroll.scrollTop = this.refs.iScroll.scrollTop  - 5
                this.setState({ loadingState: true })
                this.props.addJoke()
                this.setState({ loadingState: false })
            }
        });
    }

    render() {
        const { jokes } = this.props

        return (
            <div className="container" style={{ paddingRight: 350, paddingTop: 250 }}>
                <div
                    className="vc"
                    ref="iScroll"
                    style={{ height: '400px', width: '1000px', "overflowY": "auto" }}
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