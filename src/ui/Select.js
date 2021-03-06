import React from 'react'

import { idFor } from './helpers'

const Component = ({
  scope,
  label,
  value,
  update,
  options,
}) => {
  const id = idFor({ scope, label })

  return <div className="col-auto g-0">
    <label
      htmlFor={id}
      className="form-label col-auto g-0 col-form-label col-form-label-sm visually-hidden"
    >{label}</label>
    <div className="col-auto g-0">
      <select
        id={id}
        className="form-select form-select-sm"
        value={value}
        onChange={e => update(e.target.value)}
      >
        {options.map(m => <option key={m} value={m}>{m}</option>)}
      </select>
    </div>
  </div>
}


export default Component
