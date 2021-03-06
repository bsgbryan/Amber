import React from 'react'

import Wrapper from '../../../helpers/FieldsetWrapper'

import CastShadows from '../../components/CastShadows'

import Light from './Core'

const ShadowCastingLight = ({
  type,
  entity,
  fields,
  children,
  rotates = true
}) =>
  <Light type={type} entity={entity} rotates={rotates}>
    <div className="section-boundary" />
    <h3>Shadows</h3>
    <Wrapper label="Cast" child={<CastShadows entity={entity} type={`${type}Light`} />} />
    {fields}
    <div className="section-boundary" />
    {children}
  </Light>

export default ShadowCastingLight
