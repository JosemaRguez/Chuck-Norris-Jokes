const categories = []

const categoriesReducer = (state = categories, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES': return ['--Select--', ...action.categories]
        default:
            return state
    }
}

export default categoriesReducer