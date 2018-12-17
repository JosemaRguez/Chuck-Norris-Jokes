export const getCategories = () => {
    return (dispatch) => {
        fetch("/getcategories")
            .then(res => res.json())
            .then(categories => dispatch({ type: 'GET_CATEGORIES', categories: categories.body }))
            .catch((err) => {
                dispatch({ type: 'GET_CATEGORIES_ERROR', err })
            })
    }
}