const missionReducer = (state = [], action) => {

    switch (action.type) {
        case 'SET_MISSION':
            return action.payload;
        default:
            return state;
    }
}

export default missionReducer;