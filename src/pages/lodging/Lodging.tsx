import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import lodgingData from "../../data/lodgingData.json"

// Define the interface for lodging data
interface LodgingData {
    id: string
    title: string
    pictures: string[]
    description: string
    host: {
        name: string
        picture: string
    }
    rating: string
    location: string
    equipments: string[]
    tags: string[]
}

export default function Lodging() {
    // State variables
    const [lodgingSelected, setLodgingSelected] = useState<LodgingData>({
        id: "",
        title: "",
        pictures: [],
        description: "",
        host: { name: "", picture: "" },
        rating: "",
        location: "",
        equipments: [],
        tags: [],
    })
    const [imgIdx, setImgIdx] = useState(0)

    // Get the parameter from the URL
    const params = useParams<{ id: string }>()

    // Navigation function
    const navigate = useNavigate()

    const lodgingId = params.id

    // Function to retrieve lodging data
    const getLodgingData = (): number => {
        const filteredData = lodgingData.findIndex(
            (lodging: LodgingData) => lodging.id === lodgingId
        )

        // Navigate to an error page if lodging data is not found
        filteredData < 0 && navigate("/error")

        return filteredData
    }

    useEffect(() => {
        // Get the lodging data and update the state
        const data = getLodgingData()
        setLodgingSelected(lodgingData[data])
        console.log(data)
    }, [])

    // Destructure the lodgingSelected object
    const { title, pictures, description, host, rating, location, tags } =
        lodgingSelected

    const carouselLength = pictures.length

    // Function to handle the image carousel
    const handleClick = (dir: number) => {
        let newIdx = imgIdx
        newIdx += dir

        // go to the beginning or end of the carousel
        newIdx === carouselLength && (newIdx = 0)
        newIdx < 0 && (newIdx = carouselLength - 1)

        setImgIdx(newIdx)
    }

    return (
        <main data-testid="lodging">
            <div className="slider">
                <button onClick={() => handleClick(1)}>+</button>
                <img src={pictures[imgIdx]} alt={title} />
                <button onClick={() => handleClick(-1)}>-</button>
            </div>
            <div className="infos">
                <div className="infos-wrapper1">
                    <div className="title">{title}</div>
                    <div className="location">{location}</div>
                    <div className="tags-wrapper">
                        {tags.map((tag, idx) => {
                            return <div key={idx}>{tag}</div>
                        })}
                    </div>
                </div>
                <div className="infos-wrapper2">
                    <div className="host">
                        <div className="name">{host.name}</div>
                        <div className="avatar">
                            <img src={host.picture} alt={host.name} />
                        </div>
                    </div>
                    <div className="rate">{rating}</div>
                </div>
            </div>
        </main>
    )
}
