const categories = []

const categoriesReducer = (state = categories, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES': return ['--Select--', ...action.categories]
        case 'GET_CATEGORIES_ERROR': console.log('Error getting categories', action.err)
            break
        default:
            return state
    }
}

export default categoriesReducer