const specMissionReducer = (state = [], action) => {

    switch (action.type) {
        case 'SET_DATA':
            return action.payload;
        default:
            return state;
    }
}

console.log(specMissionReducer);

export default specMissionReducer;