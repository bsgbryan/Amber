import { useRef, useLayoutEffect } from 'react'

import {
  render,
  initialize,
} from '../Scene'

import './SceneViewStyles.css'

const Component = () => {
  const targetRef = useRef()

  useLayoutEffect(() => {
    if (targetRef.current) {
      const { offsetWidth, offsetHeight } = targetRef.current

      initialize(offsetWidth, offsetHeight)

      render()
    }
  })

  return <canvas ref={targetRef} id="scene-view" />
}

export default Component