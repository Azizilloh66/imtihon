const initialState = [
    "salom", "qalesan",
]

const Reducer = (state = initialState,action) =>{
     switch (action.type){
      case "ADD":
        let tempData = [...state];
        tempData.push(action.payload)
        return tempData;

       case "DEL":
        let tempData2 = action.payload
         return tempData2
         
         default: return state 

     }

}
export default Reducer