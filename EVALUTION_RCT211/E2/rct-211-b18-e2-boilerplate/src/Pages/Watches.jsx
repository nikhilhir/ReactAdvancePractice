import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link, useLocation, useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import WatchCard from "../Components/WatchCard";
import { getwatch } from "../Redux/AppReducer/action";


const Watches = () => {
  const [serchParams,setSearchParams]=useSearchParams()
  const dispatch = useDispatch();
  const location=useLocation()
  const watch = useSelector((store) => store.Apppreducer.watches);


  //hear are actual logic as per the url athe actuall data in UI change or not 
  //WHENEVER THE URL UPDATE BY CLICK ON CHECKBOX BUTTION WE ACTUALLY THE THE LOCATION
  //USE LOCATION HOOK LOCATION.SERCH SERACH THE ALL SERCH QUERY PARRAMETER
  useEffect(() => {
    let getwatchParams;
    if(location.search || watch.length===0){
      // *************************************
      getwatchParams={
        params:{
          category:serchParams.getAll("category")
        }
      }
    }
    // *******************************************************
   
    dispatch(getwatch(getwatchParams))
    //AFTER UNCHECKED ALL WE GET AS USUAL DATA IN UI THAT USE DISPATCH 
    //GETWATCH ALL DATA OR PASS OBJECT GETWATCHPARAMS
   
  }, [dispatch, location.search, serchParams, watch.length]);
  console.log("data",watch)

  return (
    <div style={{display:"flex"}}>
      <Filter />
      <div style={{width:"100%",display:"grid",
     gap:"10px", gridTemplateColumns:"repeat(3,1fr)",justifyContent:"center" }}>
        {/* Map through the watch list here using WatchCard Component */
           watch.length > 0 && watch.map((elem)=>{
            return (
              //HEAR TO REDIRECT TO WATCH/ID DINGLE PAGW WRAP WATCH CARD LINK
              // USE TEMPLATE LITRAL /WATCHES/${WATCH.ID}
              <div key={elem.id} style={{ width: "310px" }}>
                <Link
                  to={`/watches/${watch.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <WatchCard {...elem} />
                </Link>
                
              </div>
            );
           })
        };
      </div>
    </div>
  );
};

export default Watches;



// return (
//     <div style={{ display: "flex" }}>
//       <FilterWraper>
//         <Filter />
//       </FilterWraper>
//       <div>
//         {/* Map through the watch list here using WatchCard Component */}
//       <WatchesWraper>
//           <WatchCard watch={watch} />
//         </WatchesWraper>
//       </div>
//     </div>
//   );
// };

// export default Watches;


// const FilterWraper =styled.div`
//  width:350px;
//  border: 2px solid;
// `;

// const WatchesWraper = styled.div`
//   border: 1px solid red;
//  width:100%;
//  display: grid;
//  grid-template-columns: repeat(3,1fr);
//  grid-gap: 20px;
//  justify-content: center;
//  padding: initial;
// `;

