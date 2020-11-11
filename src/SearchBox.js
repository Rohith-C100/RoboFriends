import React from 'react';
 
const SearchBox=({searchChange})=>{
    return(
        <div className="pa3 own">
            <input type="search" 
             placeholder="search robots"
             onChange={searchChange}
             />
        </div>
     );
}

export default SearchBox;