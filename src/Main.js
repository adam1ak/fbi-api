import { useEffect, useState } from "react"
import Wanted from "./Wanted"
import Loading from "./Loading/Loading"

function Main() {
    const [selectedRace, setSelectedRace] = useState('any');
    const [wanteds, setWanteds] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchData();
      }, []); 

    const fetchData = async () => {
        if(selectedRace !== "any") {
            setWanteds([])
            let tempWanteds = []
            setIsLoading(true)
            try {
                const response = await fetch(`https://api.fbi.gov/wanted/v1/list`)
                if(!response.ok) {
                    throw new Error("Failed to fetch data")
                }
                const result = await response.json()
                result.items.map((item, index) => {
                    if(item.race == selectedRace){
                        tempWanteds.push(item)
                    }
                })
                setWanteds(tempWanteds) 
                console.log(wanteds)
                setIsLoading(false)
            }
            catch(error) {
                console.log("Error")
            }
        }else{
            try {
                const response = await fetch(`https://api.fbi.gov/wanted/v1/list`)
                if(!response.ok) {
                    throw new Error("Failed to fetch data")
                }
                const result = await response.json()
                setWanteds(result.items) 
                setIsLoading(false)
            }
            catch(error) {
                console.log("Error")
            }
        }
    }

    const handleSearch = () => {
        fetchData()
    }

    return(
        <div className="main">
            {isLoading && <Loading/>}
            <div className="select-box">
                <select
                    value={selectedRace} // ...force the select's value to match the state variable...
                    onChange={e => setSelectedRace(e.target.value)} // ... and update the state variable on any change!
                >
                    <option value="black">Black race</option>
                    <option value="white">White race</option>
                    <option value="any">Everyone</option>
                </select>
                <button onClick={handleSearch}>Search</button>
            </div>

            <h1>Wanteds</h1>
            <div className="wanteds">
                {
                    wanteds.map((m, index) => 
                        <Wanted key={index} person={m}/>
                    )
                }
            </div>
        </div>
    )
}
export default Main;