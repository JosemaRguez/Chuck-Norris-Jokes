import React, { Component } from 'react'
import JokeList from './JokesList'
import InfiniteScroll from 'react-infinite-scroller'
import { connect } from 'react-redux'
import { addJoke } from '../../store/actions/jokesActions'

class JokesBoard extends Component {

    handleScroll = () => {
        this.props.addJoke()
    }

    render() {
        const { jokes } = this.props
        
        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this.handleScroll}
                hasMore={true}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
                <div className='jokes container'>
                <div className='row'>
                    <div className="col s12 m10">
                        <JokeList jokes={jokes} />
                    </div>
                </div>
            </div>
            </InfiniteScroll>
            
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