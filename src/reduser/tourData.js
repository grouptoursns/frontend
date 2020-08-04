export function tourData(state =[], action) {
    switch (action.type) {
        case "TOUR_DATA_SUCCESS":
            return action.tourData
        default:
            return state;
    }
}