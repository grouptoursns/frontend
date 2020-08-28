// export function groupInfo(state = [], action){
//     switch (action.type) {
//         case "GROUP_INFO_SUCCESS" :
//             return action.groupInfo.id
//         default:
//             return  state;
//     }
// }

const initialState={
    groupInfo:[],
}
export function groupInfo(state=initialState,action){
    switch(action.type){
        case "GROUP_INFO_SUCCESS":
            return {
                ...state,groupInfo:[...action.arr]
            }
        default:
            return state;
    }
}