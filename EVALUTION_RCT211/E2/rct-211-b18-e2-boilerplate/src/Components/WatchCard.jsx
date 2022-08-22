import React from "react";

const WatchCard = ({ id,name,category,image }) => {
  return (
    <div data-testid={`watch-card-wrapper-${id}`}
     style={{
      display: "block",
      width:"300px",
      height: "390px",
      border: "2px solid purple",
      borderRadius:"5px",
     }}>
      <div style={{
        display:"flex",
        height:"300px",
        padding:"20px 20px 0 20px",
        flexDirection:"column",
        justifyContent:"center",
        border:"1px solid red",
        margin:"5px",
      }}>
        <img data-testid="watch-card-image" src={image} alt="watch" style={{
          backgroundSize:"contain",
         width:"100%",
         maxHeight:"100%"
        }}/>
      </div>
      <div style={{textAlign:"center"}}>
        <div data-testid="watch-name" style={{fontSize:"24px"}}>{name}</div>
        <div data-testid="watch-category">{category}</div>
      </div>
    </div>
  );
};

export default WatchCard;



// const WatchCard = ({ id,watch }) => {
//   return (
//     <>
//       { watch.length > 0 &&
//         watch.map((elem) => {
//           return (
//             <Wrapdata key={elem.id}>
//                <Link to={`./watches/${id}`}>
//               <div data-testid={`watch-card-wrapper-${id}`}>
//                 <div>
                
                 
//                     <img
//                       data-testid="watch-card-image"
//                       src={elem.image}
//                       alt="watchimg"
//                       style={{ width: "200px", justifyItems: "center" }}
//                     />
             
//                 </div>
//                 <div>
//                   <div data-testid="watch-name">{elem.name}</div>
//                   <div data-testid="watch-category">{elem.category}</div>
//                 </div>
//               </div>
//               </Link>
//             </Wrapdata>
//           );
//         })}
//     </>
//   );
// };

// export default WatchCard;

// const Wrapdata = styled.div`
//   border: 1px solid blue;
//   padding: 5px;
//   width: 310px;
//   display: grid;
//   grid-template-columns: repeat(3,1fr);
//   grid-gap: 20px;
//   justify-content: center;
//   padding: initial;
// `;


