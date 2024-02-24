import { useState } from "react";
import countryData from '../resources/countryData.json'

function App(){

  const [search, setSearch] = useState([])

  const handleChange = (e) => {
    const country = e.target.value.toLowerCase();
    const filteredCountry = countryData.filter(item => item.name.toLowerCase().startsWith(country));
    setSearch(filteredCountry);
  }

  const handleKey = (e) => {
    if(e.key === "Escape"){
      setSearch([])
      console.log("Escape")
    }
  }

  return(
    <div>
      <h1>Search</h1>
      <input type="text" onChange={handleChange} onKeyDown={handleKey} />
      <button>search</button>
      {
        search.map((element, index) => (
          <div key={index}>{element.name}</div>
        ))
      }
    </div>
  )
}

export default App;