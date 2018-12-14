export const addJoke = () => {
    return (dispatch) => {
        fetch("/getjoke")
        .then(res => res.json())
        .then(joke => dispatch({type: 'ADD_JOKE', joke}))
        .catch((err) => {
            dispatch({type: 'ADD_JOKE_ERROR', err})
        })
    }
}

// export const loadSomeJokes = () => {
//     const someJokes = {}

//     for(var i=0; i<7; i++){
//         fetch("/getjoke").then(res => res.json()).then(joke => console.log(joke) )
//     }
//     // return (dispatch) => {
//     //     // fetch("/getjoke")
//     //     // .then(res => res.json())
//     //     // .then(joke => dispatch({type: 'ADD_JOKE', joke}))
//     //     // .catch((err) => {
//     //     //     dispatch({type: 'ADD_JOKE_ERROR', err})
//     //     // })
//     // }
// }