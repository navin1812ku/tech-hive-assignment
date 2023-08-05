import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link} from "react-router-dom"
// import { useContext } from "react";
// import { UserContext } from "./Context/UserContext";
// import { UserContext } from "./Context/UserContext";
// import Kart from "./Kart";
// import Person from "./Person";
// import { useParams } from "react-router"

export default function SearchedItem(props) {
  let { brand, category } = props;



  const [studentlistData, setstudentlistData] = useState([]);


  useEffect(() => {
    fetchCompanylistData();
  }, []);

  const fetchCompanylistData = async () => {
    try {
      const response = await axios.get("http://localhost:8081/item/" + category);
      console.log(response.data);
      setstudentlistData(response.data);
      alert("Searching")
    } catch (error) {
      console.log("Error fetching professional data:", error);
    }

    // alert(props.data1)
    // alert(props.data1)


  }

  return (

    <div>

      {studentlistData ? studentlistData.map((el) => {

        return (
          el.brand === brand ?
            <div className="card ms-7" style={{ margin: "20px auto", width: "70%" }}>
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">Model: {el.model}</h4>
                    <p className="card-text" style={{ color: "gray" }}>Brand: {el.brand}</p>
                    <p className="card-text">Category:{el.category}</p>
                    {/* <p className="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16" style={{marginRight:"20px"}}>
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                          </svg>{el.place}
                        </p> */}
                    <p className="card-text"><b>Cost:</b> {el.cost}</p>
                  </div>
                </div>
              </div>
            </div> :
            <></>
        )
      }) :
        <></>
      }
    </div>
  );
}