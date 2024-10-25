import { Link } from "react-router-dom"

function Wanted({ person }) {
    return (
        <div className="wanted-person">
            <Link to={"/wanted-details/" + person.uid}> <h2>{person.title}</h2> </Link>
            <div className="wanted-person-images">
                {
                    person.images.map((x, index) => {
                        return(<img src={x.thumb} alt="this wanted person don't have image"/>)
                    })
                }
            </div>
        </div>
    )
}
export default Wanted