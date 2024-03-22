// Write your code here
import Slider from 'react-slick'

/* import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css' */

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props

  return (
    <div className="planet-app-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem planetDetails={eachPlanet} key={eachPlanet.id} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetSlider
