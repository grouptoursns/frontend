export function groupData(state = [], action){
 switch (action.type) {
     case "GROUP_DATA_SUCCESS" :
         return action.groupData
     default:
         return  state;
 }
}