import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const EmployeeDetails = ()=>{
    const {id} = useParams()
    const [personDetails,setpd] = useState({})
    console.log(id)
     async function fetchingParticularPerson(){
        let employeeD = await axios.get(`https://employeedata-9197f-default-rtdb.firebaseio.com/employees/${id}.json`)
        setpd(employeeD.data)
        console.log(employeeD.data)

     }
    useEffect(()=>{
       fetchingParticularPerson()
    },[])
    return(
        <>
        <div className = "indivdualCard">
         <h1 className = "heading">Details</h1>
         <h1 className = "name">{personDetails.name}</h1>
         <h2 className = "role">role:{personDetails.department}</h2>
         <p className = "mail">EMAIL:{personDetails.email}</p>
         <h2 className = "salary">Salary: {personDetails.salary}</h2>
         <p className = "doj">Date of join : {personDetails.joinDate}</p>
         </div>
        </>
    )
}

export default EmployeeDetails