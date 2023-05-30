import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import lodgingData from '../../data/lodgingData.json'
import Dropdown from '../../components/dropdown/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft,
    faChevronRight,
    faStar,
} from '@fortawesome/free-solid-svg-icons'
import styles from './Lodging.module.css'

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
        id: '',
        title: '',
        pictures: [],
        description: '',
        host: { name: '', picture: '' },
        rating: '',
        location: '',
        equipments: [],
        tags: [],
    })

    const [splitLocation, setSplitLocation] = useState<string[]>([])

    const [splitName, setSplitName] = useState<string[]>([])

    const [filledStar, setFilledStar] = useState<boolean[]>([])

    const [imgIdx, setImgIdx] = useState(0)

    const [dataGot, setDataGot] = useState(false)

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
        filteredData < 0 && navigate('/error')

        return filteredData
    }

    useEffect(() => {
        // Get the lodging data and update the state
        const data = getLodgingData()
        setLodgingSelected(lodgingData[data])
    }, [])

    useEffect(() => {
        setSplitLocation(lodgingSelected.location.split(' - '))

        setSplitName(lodgingSelected.host.name.split(' '))

        const filledStarQty = parseInt(lodgingSelected.rating)

        const tmpfilledStar = []

        for (let i = 0; i < 5; i++) {
            tmpfilledStar.push(filledStarQty > i ? true : false)
        }

        setFilledStar(tmpfilledStar)

        setDataGot(true)
    }, [lodgingSelected])

    console.log(lodgingSelected.location, splitLocation)

    const location = splitLocation[1] + ', ' + splitLocation[0]
    // Destructure the lodgingSelected object
    const { title, pictures, description, host, tags, equipments } =
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
        <main
            data-testid="lodging"
            className={dataGot ? styles.lodging : styles.waiting}
        >
            <div className={`slider ${styles.slider}`}>
                <img
                    src={pictures[imgIdx]}
                    alt={title}
                    className={styles.lodgingView}
                />
                {carouselLength > 1 && (
                    <>
                        <div className={styles.viewNavigation}>
                            <button onClick={() => handleClick(-1)}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <span>
                                {imgIdx + 1} / {carouselLength}
                            </span>
                            <button onClick={() => handleClick(1)}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    </>
                )}
            </div>

            <div className={styles.infos}>
                <div className={styles.infosWrapper}>
                    <div className="pres-wrapper">
                        <h1>{title}</h1>
                        <h2>{location}</h2>
                    </div>
                    <div>
                        {tags.map((tag, idx) => {
                            return (
                                <span key={idx} className={styles.tag}>
                                    {tag}
                                </span>
                            )
                        })}
                    </div>
                </div>

                <div className={styles.infosWrapper}>
                    <div className={styles.host}>
                        <div className="name">
                            {splitName[0]}
                            <br />
                            {splitName[1]}
                        </div>
                        <img
                            src={host.picture}
                            alt={host.name}
                            className={styles.hostPicture}
                        />
                    </div>
                    <div className={styles.rate}>
                        {filledStar.map((star, idx) => {
                            return (
                                <span
                                    key={idx}
                                    className={
                                        star
                                            ? styles.filledStar
                                            : styles.emptyStar
                                    }
                                >
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className={styles.infos}>
                <Dropdown
                    size="medium"
                    title="Description"
                    content={[description]}
                />
                <Dropdown
                    size="medium"
                    title="Equipements"
                    content={equipments}
                />
            </div>
        </main>
    )
}
