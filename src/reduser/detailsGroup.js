export function groupInfo(state = [], action){
    switch (action.type) {
        case "GROUP_INFO_SUCCESS" :
            return action.groupData
        default:
            return  state;
    }
}