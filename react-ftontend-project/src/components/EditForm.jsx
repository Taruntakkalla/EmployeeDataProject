import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import "../edit.css"



const EditForm = ()=>{
    const {id} = useParams()
    const [personDetails,setpd] = useState({})
    console.log(id)
     async function fetchingParticularPerson(){
        let employeeD = await axios.get(`https://employeedata-9197f-default-rtdb.firebaseio.com/employees/${id}.json`)
        setpd(employeeD.data)
        console.log(employeeD.data)

     }
     console.log(personDetails)
    useEffect(()=>{
       fetchingParticularPerson()
    },[])

    let [details,updataDetails] = useState({name:personDetails.name,
        department:personDetails.department,
        salary:personDetails.salary,
    })
    console.log(details)
    function handlingInput(e){
        console.log(e)
        const {name}   = e.target
       
        updataDetails({...details,[name]:e.target.value})
    }

    async function handlingSubmit(e){
        e.preventDefault()
        try{
         await axios.patch(`https://employeedata-9197f-default-rtdb.firebaseio.com/employees/${id}.json`,details)
         alert("user successfully edited")
        }
        catch(e){
          console.log(e,"error")
          alert("failed to edit the details")
        }
    }
    
    return(
        <>
         <h1>Editing the details of Employee with {id}</h1>
         <form className = "form "onSubmit = {handlingSubmit}>
            
            <input className = "name" name = "name" onChange = {handlingInput} placeholder="entername" />
            <input className = "dept" name = "department" onChange = {handlingInput} placeholder="enter role"/>
            <input className = "sal" name = "salary" onChange = {handlingInput} placeholder = "enter salary"/>
            <input className = "btn" type = "submit"  />
         </form>
        </>
    )
}

export default EditForm