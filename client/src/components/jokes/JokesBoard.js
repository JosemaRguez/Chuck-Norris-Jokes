import React, { Component } from 'react'
import JokeList from './JokesList'
import { connect } from 'react-redux'
import { addJoke } from '../../store/actions/jokesActions'

class JokesBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numJokes: 10,
            loadingState: false
        }
    }

    componentDidMount() {
        this.refs.iScroll.addEventListener("scroll", () => {
            if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight) {
                this.loadMoreJokes()
            }
        });
    }

    loadMoreJokes() {
        console.log('dale maduro')
        this.setState({ loadingState: true })
        //Get more jokes
        this.props.addJoke()

        setTimeout(() => {
            this.setState({ numJokes: this.state.numJokes + 10, loadingState: false })
        }, 1000)
    }


    //this.props.addJoke
    render() {
        const { jokes } = this.props
        console.log(jokes)
        return (
            <div
                className="vc"
                ref="iScroll"
                style={{ height: "400px", overflow: "auto" }}
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
        jokes: state.jokes.jokeList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JokesBoard)