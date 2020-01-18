const specMissionReducer = (state = 0, action) => {

    switch (action.type) {
        case 'SET_SPEC_MISSION':
            return action.payload;
        default:
            return state;
    }
}

console.log(specMissionReducer);

export default specMissionReducer;