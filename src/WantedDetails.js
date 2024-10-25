import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "./Loading/Loading"
import "./wantedDetails.css"

function WantedDetails() {

    const { id } = useParams()
    const [wanted, setWanted] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        setIsLoading(true)
        let tempWaned = []
        try {
            const response = await fetch(`https://api.fbi.gov/wanted/v1/list`)
            if (!response.ok) {
                throw new Error("Failed to fetch data")
            }
            const result = await response.json()
            result.items.map((item, index) => {
                if (item.uid == id) {
                    tempWaned.push(item)
                }
            })
            setIsLoading(false)
            setWanted(tempWaned[0])
            setImageUrl(tempWaned[0].images[0].thumb)
        }
        catch (error) {
            console.log("Error")
        }
    }

    return (
        <div className="wanted-details-container">
            {isLoading && <Loading />}
            {!isLoading && wanted && (
                <div className="wanted-details-card">
                    <div className="wanted-image">
                        <img src={imageUrl} alt={wanted.title || "Wanted image"} />
                    </div>
                    <div className="wanted-info">
                        <h1 className="wanted-title">{wanted.title}</h1>
                        <p className={`status ${wanted.status}`}>
                            Status: {wanted.status}
                        </p>
                        {wanted.reward_text && (
                            <div className="reward-section">
                                <span className="reward-icon">💰</span>
                                <p>Reward: {wanted.reward_text}</p>
                            </div>
                        )}
                        <p className="description">{wanted.description}</p>
                        {wanted.warning_message && (
                            <div className="warning-section">
                                <p>Warning: {wanted.warning_message}</p>
                            </div>
                        )}
                        <p className="publication">
                            Published on: {new Date(wanted.publication).toLocaleDateString()}
                        </p>
                        <a href={wanted.url} target="_blank" rel="noopener noreferrer" className="poster-link">
                            View Poster
                        </a>
                        <div className="additional-info">
                            <h3>Additional Information:</h3>
                            <p>Place of Birth: {wanted.place_of_birth}</p>
                            <p>Weight: {wanted.weight} lbs</p>
                            <p>Sex: {wanted.sex}</p>
                            <p>Scars and Marks: {wanted.scars_and_marks || "None"}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WantedDetails;