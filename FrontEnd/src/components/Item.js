import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom"

export default function Item() {
  const [items, setItem] = useState([]);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      const response = await axios.get("http://localhost:8081/items");
      console.log(response.data)
      setItem(response.data);
    } catch (error) {
      console.error("Error fetching Item:", error);
    }
  };
  const remove = async (a) => {
    await axios.delete("http://localhost:8081/deleteItem/" + a)
    fetchItem();
  }

  return (
    <div>
      {items.map((el) => (
        <div className="card ms-7" style={{ margin: "30px", border: "2px solid black", width: "25%" }} key={el.id}>
          <div className="row g-0">
            <div className="card-body">
              <h5 className="card-title">Model : {el.model}</h5>
              <p className="card-text">Brand :{el.brand}</p>
              <p className="card-text">Category : {el.category}</p>
              <p className="card-text">Cost : {el.cost}</p>
              <p className="card-text">Item Id : {el.id}</p>
              <button className="btn btn-dark"><Link to={"/Update/" + el.id} style={{ textDecoration: "none", color: "white" }}>Update</Link></button><pre />
              <button className="btn btn-dark" style={{ padding: "10px", gap: "30px 30px" }} onClick={(ev) => { remove(el.id); ev.preventDefault(); }}>Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  <Outlet />
}