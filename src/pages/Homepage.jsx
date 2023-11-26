import { Banner } from "../components/banner/Banner"
import img from '../assets/emile-perron-xrVDYZRGdw4-unsplash.jpg'
import ImageMain from "../components/banner/Image"

const Homepage = () => {
    return (
        <div>
            <Banner />
            <ImageMain img={img}/>
        </div>
    )
}

export {Homepage}