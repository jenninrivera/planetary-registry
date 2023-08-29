import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
    const [planets, setPlanets] = useState([])
    const [query, setQuery] = useState("")
    useEffect (() => {
      fetch('http://localhost:8085/planets')
      .then(response => response.json())
      .then(planets => setPlanets(planets))
    }, [])
    const addNewPlanet = event => {
        event.preventDefault()
        const newPlanet = {
            "name": event.target.name.value,
            "rotation_period": "24",
            "orbital_period": "4818",
            "diameter": "10200",
            "climate": event.target.climate.value,
            "gravity": "1 standard",
            "terrain": event.target.terrain.value,
            "surface_water": "8",
            "population": event.target.population.value,
            "residents": [],
            "films": [
            "https://swapi.dev/api/films/1/"
      ],
            "created": "2014-12-10T11:37:19.144000Z",
            "edited": "2014-12-20T20:58:18.421000Z",
            "url": "https://swapi.dev/api/planets/3/"
        }
        fetch('http://localhost:8085/planets', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPlanet)
        })
        .then(response => response.json())
        .then(newPlanet => setPlanets([...planets, newPlanet]))
    }
const updateQuery = event => setQuery(event.target.value)

const filteredPlanets = planets.filter(planet => query ? planet.name.toLowerCase().includes(query.toLowerCase()) : true
)

    return(
        <div className="registry">
            <Search query={query} updateQuery={updateQuery} />
            <div className="content">
                <PlanetList planets={filteredPlanets}/>
                <NewPlanetForm addNewPlanet={addNewPlanet} />
            </div>
        </div>
    )
}

export default Registry;