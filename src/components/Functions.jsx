import { BsFillStarFill } from "react-icons/bs";

const getLocalStorage = () =>{
   
    let totalScore = localStorage.getItem('totalScore');
    if(totalScore){
        return JSON.parse(localStorage.getItem('totalScore'))
    }else{
        return[]
    }
}


export default getLocalStorage; 