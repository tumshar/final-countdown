const RestaurantCard=(props)=>{
    const{resData}=props;

    const {cloudinaryImageId,name,avgRating,cuisines,}=resData?.info;
    const{sla}=resData?.info;
    
    
    return (
          <div className="ResCard" style={{ backgroundColor: "#f0f0f0", }}>
           
          <img
          className="ResLogo"
          alt="image1"
           src={+resData.info.cloudinaryImageId} >
          </img>
                

                <h3>{name }</h3>
                <h4>{cuisines.join(', ') }</h4>
                <h4>{avgRating || 'Rating not available'} stars</h4>
                <h4>{sla.deliveryTime } minutes</h4>

          </div>
    );
};

export default RestaurantCard;