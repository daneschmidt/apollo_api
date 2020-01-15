const missionReducer = (state = [], action) => {

    switch (action.type) {
        case 'SET_MISSION':
            return action.payload;
        default:
            return state;
    }
}

console.log(missionReducer);

export default missionReducer;