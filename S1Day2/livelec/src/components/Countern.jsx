import React from 'react'


const Countern = () => {
  const count=useSelector((store)=>store.count);
  const dispatch = useDispatch();

  const handleadd=()=>{
    
  }
  return (
    <div>
    <h2>count {count}</h2>
    <button onClick={handleadd}>Plus</button>
    <button onClick={handleremove}>Minus</button>
    </div>
  )
}

export default Countern