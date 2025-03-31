import axios from "axios"
import { useEffect,useState,useReducer, use } from "react"
import { Link } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"



const Home = ()=>{
    const [eData,setEdata] = useState([])
    
    const dispatch = useDispatch()
    const {employeeData,isLoading} = useSelector((state)=>state)
    console.log(employeeData)

     async function FetchingEmployeeData(){
        dispatch({type:"loading",action:true})
      try{
       let resp = await axios.get("https://employeedata-9197f-default-rtdb.firebaseio.com/.json")
       let EmployeeData = resp.data
       let arrayOfEmployee = Object.entries(EmployeeData.employees)
       dispatch({type:"loading",action:false})
       dispatch({type:"success",payload:arrayOfEmployee})
       console.log(arrayOfEmployee)
      }
      catch(e){
        console.log(e)
      }
     }
    useEffect(()=>{
      FetchingEmployeeData()
    },[])
    return(
        <>
          <h1>Home</h1>
          {isLoading?(<h1>Loading.......</h1>):
          (<div className = "employee-grid">
            {employeeData.map((item)=>(
                <div className = "employee-card"  key = {item[0]}>
                    <h1>{item[1].name}</h1>
                    <h3>{item[1].department}</h3>
                    <p>{item[1].email}</p>
                    <Link to = {`/details/${item[0]}`}>
                     <button>View</button>
                    </Link>
                    <Link to={`/editform/${item[0]}`}>
                      <button>edit</button>
                    </Link>
                    
                </div>
            ))}
          </div>)
         }
        </>
    )
}

export default Home