
import axios from "axios"
import {useState,useEffect} from "react"
import "../post.css"

const Post = ()=>{
    const [postData,setPostData] = useState({name:"",email:"",joinData:"",position:"",Salary:""})
    function handlingPostChange(e){
        const {name,value} = e.target 
        setPostData({...postData,[name]:value})
    }
    async function handlingSubmitPost(e){
        e.preventDefault()
        await axios.post("https://employeedata-9197f-default-rtdb.firebaseio.com/employees/.json",postData)
        confirm("details added ")
        
    }
    return(
        <>
         <h1>Posting employee details</h1>
         <div className = "postCard">
         <form className = "fromP" onSubmit = {handlingSubmitPost}>
           <input className = "inputp" onChange = {handlingPostChange} name = "name" type = "text" placeholder="name"/> 
            <input className = "inputp" onChange = {handlingPostChange} name = "department" type = "text" placeholder="department"/>
            <input className = "inputp" onChange = {handlingPostChange} name = "email" type = "email" placeholder = "Enter email"/>
            <input className = "inputp" onChange = {handlingPostChange} name = "joinData" type = "data" placeholder = "Enter joining joinDate"/>
            <input className = "inputp" onChange = {handlingPostChange} name = "position" type = "text" placeholder = "Enter posistion"/>
            <input className = "inputp" onChange = {handlingPostChange} name = "Salary" type = "number" placeholder="Enter Salary"/>
            <input className = "btnP" type = "submit"/>
         </form>
         </div>
        </>

    )
}

export default Post