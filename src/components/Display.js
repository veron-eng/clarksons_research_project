

const Display = ({ship, key}) => {

    return (
        <div>
              {/* {console.log("check")}
              {console.log(ship.X01_CVN)}
              {console.log(ship)}
              {console.log(key)} */}
    
    
        {Object.keys(ship).map((key) => 
            
            <li>{key} : {ship[key]}</li>
        )}
    
        </div>
    )
    
    
    
    }
    
    export default Display;