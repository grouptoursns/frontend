export function ResultSearchCount(city){
    return{
        type:"CLICK_COUNT",
        city,
    }
}
export function ofBestCount(){
    return{
        type:"OFCLICK_COUNT",
    }
}