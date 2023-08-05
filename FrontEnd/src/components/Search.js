import { useState } from "react";
import { useParams } from "react-router"
import { Outlet } from "react-router-dom"
import SearchedItem from "./SearchedItems";
// import Person from "./Person";

export default function Search() {
  let { name } = useParams();
  // let service=document.getElementById("searchTerm").value
  const [brand, setbrand] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [istrue, setIstrue] = useState(false);
  const [category, setcategory] = useState(null);

  function handleChange(e) {
    e.preventDefault();
    setIstrue(false);
    console.log(e.target.value);
    setbrand(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault();
    setIstrue(true);
    setAnswer(brand);
  }
  console.log(name)

  return <div>
    <h1 className="ser">{name}</h1>
    <div>
      {/* <button className="btn btn-primary"  style={{color:"blueviolet",border:"1px solid blueviolet",backgroundColor:"white"}}><Link to='/Kart' >Show cart</Link></button> */}
      {/* <div>{companylistData.map((el)=><Companylist
		Companylist={el} 
	
		 /> )}</div> */}
    </div>
    <p style={{ textAlign: "center" }}>Search Item ....</p>
    <form className="search">
      <select id="searchTerm1" name="place" onChange={(e) => setcategory(e.target.value)} form="selectplaceform" style={{ width: "80px", height: "50px" }}>
        <option value="bike">BIKE</option>
        <option value="mobile">MOBILE</option>
        <option value="car">CAR</option>
      </select>
      <input type="text" id="searchTerm" style={{ width: "50%", height: "50px" }} onChange={handleChange} placeholder="Search Items....." required />
      <button type="submit" id="searchButton" onClick={handleClick}>
        {/* <Link to={'/Companylist/'+Brand} style={{color:"color",textDecoration:"none"}}/> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
    </form>
    {istrue ? <SearchedItem brand={answer} category={category} /> : ""}

    {/* <div id="wrap">
			<div className="search">
				<input type="text" id="searchTerm" placeholder="What are you looking for?" />
				<button type="submit" id="searchButton">
			</button>
			</div>
		    </div> */}
    <Outlet />
  </div>
}