import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTop } from '../../store/actions/topActions'
import '../../styles/style.css'

class JokesTop extends Component {
    constructor(props) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        this.props.getTop()
    }

    render() {
        const { topJokes } = this.props

        return (
            <div className="jokesTopContainer">
                <h1 id="topTitle" className="center">TOP 5 JOKES</h1>
                {topJokes && topJokes.map(joke => {
                    return (
                        <div className="card z-depth-1" key={joke.id} >
                            <div className="card-content grey-text text-darken-3 hoverable">
                                <p className="black-text">{joke.value}</p>
                                <p className="grey-text right">Clicks: {joke.clicks}, Category: {joke.category}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTop: () => dispatch(getTop())
    }
}
const mapStateToProps = (state) => {
    return {
        topJokes: state.topJokes
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JokesTop)