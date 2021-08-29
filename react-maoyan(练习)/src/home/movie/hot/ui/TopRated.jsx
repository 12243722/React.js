import React from 'react';

const TopRated = ({ ratedList }) => {
  
  return (
    <div>
      <ul>
       {
         ratedList.map(item =>{
         return <li key={item._id}>{ item.title }</li>
         })
       }
      </ul>
    </div>
  );
}

export default TopRated;