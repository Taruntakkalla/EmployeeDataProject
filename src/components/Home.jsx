const Home = () => {
  const dispatch = useDispatch();
  const { employeeData, isLoading } = useSelector((state) => state);

  useEffect(() => {
    FetchingEmployeeData();
  }, []);

  async function FetchingEmployeeData() {
    dispatch({ type: "loading", payload: true });
    try {
      const resp = await axios.get("https://employeedata-9197f-default-rtdb.firebaseio.com/.json");
      const data = resp.data;

      if (data && data.employees) {
        const arrayOfEmployee = Object.entries(data.employees);
        dispatch({ type: "success", payload: arrayOfEmployee });
      }
    } catch (error) {
      console.error("Failed to fetch employee data", error);
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  }

  return (
    <>
      <h1>Home</h1>
      {isLoading ? (
        <h1>Loading.......</h1>
      ) : (
        <div className="employee-grid">
          {employeeData.map(([id, emp]) => (
            <div className="employee-card" key={id}>
              <h1>{emp.name}</h1>
              <h3>{emp.department}</h3>
              <p>{emp.email}</p>
              <Link to={`/details/${id}`}>
                <button>View</button>
              </Link>
              <Link to={`/editform/${id}`}>
                <button>Edit</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
