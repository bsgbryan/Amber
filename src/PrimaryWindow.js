import { useRef, useLayoutEffect } from 'react'

import {
  render,
  initialize,
} from './Scene'

const Component = () => {
  const targetRef = useRef()

  useLayoutEffect(() => {
    if (targetRef.current) {
      const { offsetWidth } = targetRef.current

      console.log(offsetWidth)

      initialize(offsetWidth, window.innerHeight - 11)

      render()
    }
  })

  return <div className="center pane col-10">
    <canvas ref={targetRef} id="primary-window" />
  </div>
}

export default Component