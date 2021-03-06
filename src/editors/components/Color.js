import React, { useState, useMemo } from 'react'

import UIColor from '../../ui/Color'

import World, { autoNameIfPlaceholder } from '../../env'

const updateTarget = (component, value) => {
  component.r = value.r
  component.g = value.g
  component.b = value.b

  component.target.r = value.r / 255
  component.target.g = value.g / 255
  component.target.b = value.b / 255

  component.update()
}

const Color = ({
  type,
  field = 'color',
  label,
  entity,
}) => {
  const color = World.getEntity(entity).c[field]

  let [rgb, setRGB] = useState(undefined)

  useMemo(() => {
    rgb = color

    setRGB(rgb)
  }, [entity, rgb])

  return <UIColor
    scope={entity}
    label={label}
    value={rgb}
    update={val => {
      setRGB(val)
      updateTarget(color, val)
      autoNameIfPlaceholder(type, entity)
    }}
  />
}

export default Color
