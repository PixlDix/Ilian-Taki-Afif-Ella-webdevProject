const initState = {
    WPM: '',
    CPM: '',
    Accuracy: '',
    scoreerror: null
}

const resultReducer = (state = initState, action) => {
    if (action.type === 'DISPLAY_SCORE') {
        console.log(action)
        return {
            WPM: action.WPM,
            CPM: action.CPM,
            Accuracy: action.Accuracy
        }
    } else {
        return {
            ...state,
            scoreerror: 'SCORE_ERROR' 
        }
    }
}

export default resultReducer