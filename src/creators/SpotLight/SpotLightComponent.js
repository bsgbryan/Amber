import React from 'react'

import { SketchPicker } from 'react-color'

import Slider from '../../ui/Slider/SliderComponent'

import {
} from './SpotLightStyles'

const Component = ({
  color,
  setColor,
  intensity,
  setIntensity,
}) =>
  <div>
    <h3>Color</h3>
    <SketchPicker color={color} onChange={setColor} />
    <h3>Intensity</h3>
    <Slider field="Spot Light" label="intensity" value={intensity} update={setIntensity} />
  </div>

export default Component
