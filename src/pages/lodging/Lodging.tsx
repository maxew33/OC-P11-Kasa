/* eslint-disable react-hooks/exhaustive-deps */
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

    // Destructure the lodgingSelected object
    const {
        title,
        pictures,
        description,
        host,
        rating,
        location,
        tags,
        equipments,
    } = lodgingSelected

    let formattedLocation = ''
    
    const [imgIdx, setImgIdx] = useState(0)

    // Get the parameter from the URL
    const params = useParams<{ id: string }>()

    // Navigation function
    const navigate = useNavigate()

    const lodgingId = params.id

    // Function to retrieve lodging data
    const getLodgingData = (): number => {
        const lodgingIdx = lodgingData.findIndex(
            (lodging: LodgingData) => lodging.id === lodgingId
        )

        // Navigate to an error page if lodging data is not found
        lodgingIdx < 0 && navigate('/error')

        return lodgingIdx
    }

    useEffect(() => {
        // Get the lodging data and update the state with it
        const idx = getLodgingData()
        setLodgingSelected(lodgingData[idx])
    }, [])

    // format the place and name data and the rate
    useEffect(() => {
        const splitLocation = location.split(' - ')

        formattedLocation = splitLocation[1] + ', ' + splitLocation[0]

    }, [lodgingSelected])

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
        // Display lodging page when data are retrieved
        <main
            data-testid="lodging"
            className={title ? styles.lodging : styles.waiting}
        >
            <div className={styles.slider}>
                <img
                    src={pictures[imgIdx]}
                    alt={title}
                    className={styles.lodgingView}
                />

                {/* Display carousel arrrows and infos if more than 1 picture */}
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
                        <h2>{formattedLocation}</h2>
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
                            {host.name.split(' ')[0]}
                            <br />
                            {host.name.split(' ')[1]}
                        </div>
                        <img
                            src={host.picture}
                            alt={host.name}
                            className={styles.hostPicture}
                        />
                    </div>

                    <div className={styles.rate}>
                        {Array.from(
            { length: 5 },
            (_, i) => parseInt(rating) > i).map((star, idx) => {
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