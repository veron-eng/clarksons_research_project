import './App.css';
import Data from "./components/Data.js";
import { useState } from "react";
import Display from './components/Display';


function App() {

  const [newData, setNewData] = useState([Data]);
  const [search, setSearch] = useState("");


  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const items = ()=>{}
  

  const searchSplit = search.split(" ")
  const answer = search.substring(search.indexOf(searchSplit[2]) + 2)
  // console.log(searchSplit[1])
  // console.log(searchSplit[3])
  // console.log(newData[0])

  //console.log("When X01_CVN = 11001197")


  // const output = () => {
  //   //console.log(searchSplit[1])
  //   if (searchSplit[1] == "X01_CVN") {
  //     return (
  //       <Filter
  //         newData={newData}
  //         search={search} />
  //     )
  //   }
  // }





  const items2 = newData[0].map((ship, key) => {
    //console.log(searchSplit[1])
    //console.log(answer)
    if (search.includes("=") && ship[searchSplit[1]] == answer && search.includes(" ")) {
      return (
        <div>
          <h3>Ship {key + 1}</h3>
          <Display
            ship={ship}
            key={key} />
        </div>
      )
    } if (search.includes(">") && ship[searchSplit[1]] > answer && search.includes(" ")) {
      return (
        <div>
          <h3>Ship {key + 1}</h3>
          <Display
            ship={ship}
            key={key} />
        </div>
      )
    } if (search.includes("<") && ship[searchSplit[1]] < answer && search.includes(" ")) {
      return (
        <div>
          <h3>Ship {key + 1}</h3>
          <Display
            ship={ship}
            key={key} />
        </div>
      )
    } if (search.includes("AND")) {
        const answer2 = search.substring(search.indexOf(searchSplit[2]) + 2, search.indexOf("AND")-1)
        const answer3 = search.substring(search.indexOf(searchSplit[6], search.indexOf("AND")) + 2)
        // console.log(answer)
        // console.log(answer2)
        console.log(searchSplit[1])
        console.log(answer2)
        console.log(searchSplit[5])
        console.log(answer3)

        if (ship[searchSplit[1]] == answer2 && ship[searchSplit[5]] == answer3) {
          return (
            <div>
              {console.log(ship)}

              {console.log("check")}
              <h3>Ship {key + 1}</h3>
              <Display
                ship={ship}
                key={key} />
            </div>
          )
        }
        // } if (ship[searchSplit[1]] < answer2 && ship[searchSplit[5]] == answer3) {
        //   return (
        //     <div>
        //       {console.log(ship)}

        //       {console.log("check")}
        //       <h3>Ship {key + 1}</h3>
        //       <Display
        //         ship={ship}
        //         key={key} />
        //     </div>
        //   )
        // }
        // if (ship[searchSplit[1]] == answer2 && ship[searchSplit[5]] < answer3) {
        //   return (
        //     <div>
        //       {console.log(ship)}

        //       {console.log("check")}
        //       <h3>Ship {key + 1}</h3>
        //       <Display
        //         ship={ship}
        //         key={key} />
        //     </div>
        //   )
        // } if (ship[searchSplit[1]] > answer2 && ship[searchSplit[5]] == answer3) {
        //   return (
        //     <div>
        //       {console.log(ship)}

        //       {console.log("check")}
        //       <h3>Ship {key + 1}</h3>
        //       <Display
        //         ship={ship}
        //         key={key} />
        //     </div>
        //   )
        // }
        // if (ship[searchSplit[1]] == answer2 && ship[searchSplit[5]] > answer3) {
        //   return (
        //     <div>
        //       {console.log(ship)}

        //       {console.log("check")}
        //       <h3>Ship {key + 1}</h3>
        //       <Display
        //         ship={ship}
        //         key={key} />
        //     </div>
        //   )
        // } if (ship[searchSplit[1]] > answer2 && ship[searchSplit[5]] > answer3) {
        //   return (
        //     <div>
        //       {console.log(ship)}

        //       {console.log("check")}
        //       <h3>Ship {key + 1}</h3>
        //       <Display
        //         ship={ship}
        //         key={key} />
        //     </div>
        //   )
        // }
        // if (ship[searchSplit[1]] < answer2 && ship[searchSplit[5]] < answer3) {
        //   return (
        //     <div>
        //       {console.log(ship)}

        //       {console.log("check")}
        //       <h3>Ship {key + 1}</h3>
        //       <Display
        //         ship={ship}
        //         key={key} />
        //     </div>
        //   )
        // }


    }
  })





  return (

    <>


      <input placeholder="Write a query" id="" type="text" value={search} onChange={handleSearch} />


      {items2}


    </>


  );
}

export default App;


