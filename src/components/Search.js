import React from "react"

function Search({query, updateQuery}) {
    return (
        <div>
            <input type="text" value={query} onChange={updateQuery} placeholder="Search..."/>
        </div>
    );
}

export default Search;