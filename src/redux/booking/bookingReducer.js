import { ADDBOOk, REMOVEBOOk,  } from "./actionType";

const initialState={
    book:[]
}

const bookingReducer=(state=initialState,action)=>{
    const selectedBook=state.book.find((booking) => booking._id === action.payload._id)
    switch (action.type) {
        case ADDBOOk:
            return{
                ...state,
                book: [...state.book,{...action.payload,_id:JSON.stringify(Math.random())}]
            }
        case REMOVEBOOk:
            return{
                ...state,
                book: state.book.filter((booking)=>booking._id !== action.payload._id)
            }
        
        default:
           return state;
    }
}
export default bookingReducer;