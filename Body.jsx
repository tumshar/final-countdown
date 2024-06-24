import RestaurantCard from "./RestaurantCard";

import resList from "./utils/mockData";



const Body=()=>{
    return (
          <div className="Body">
             <div className="Search">Search</div>
             <div className="RestaurantContainer">
               {
                resList.map((restaurant)=>(
                      <RestaurantCard  key={restaurant.info.id}resData={restaurant}/>
                ))

               }
               
             </div>
          </div>
    );
};

export default Body;