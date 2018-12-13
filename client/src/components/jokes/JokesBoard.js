import React, { Component } from 'react'
import JokeList from './JokesList'
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux'
import { addJoke } from '../../store/actions/jokesActions'

class JokesBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null
        };
    }
    handleScroll() {
        console.log('dale')
        this.props.addJoke()
    }

    render() {
        const { jokes } = this.props

        return (
            
                <div className='jokes container' style={{overflow:'auto'}}>
                <InfiniteScroll
                pageStart={0}
                loadMore={this.handleScroll.bind(this)}
                hasMore={this.state.hasMoreItems}
                loader={<div className="loader" key={0}>Loading ...</div>}
                useWindow={false}
            >
                    <div className='row'>
                        <div className="col s12 m10">
                            <JokeList jokes={jokes} />
                        </div>
                    </div>
                    </InfiniteScroll>
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