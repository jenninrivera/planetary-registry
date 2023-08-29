import React from "react"
import Planet from "./Planet"

function PlanetList({planets}) {
    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {planets.map(planet => <Planet key={planet.id} planet={planet}/>)}
            </tbody>
        </table>
    );
}

export default PlanetList;