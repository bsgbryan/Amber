import React, { useMemo, useReducer } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave          } from '@fortawesome/pro-duotone-svg-icons'

import {
  RenameEntity,
  EntityRenamed,
  EntitiesByEcsId,
  EditorPlacehodlerId,
} from '../../env'

import Text from '../../ui/Text'

import Wrapper from '../../helpers/FieldsetWrapper'

const styles = {
  '--fa-primary-color':     'var(--primary-button-background-color)',
  '--fa-secondary-color':   'var(--form-section-background-color)',
  '--fa-primary-opacity':   'var(--primary-button-primary-opacity)',
  '--fa-secondary-opacity': 'var(--primary-button-secondary-opacity)'
}

const reducer = (_, action) => {
  switch(action.type) {
    case 'EntityRenamed': return action.payload.EditorId.current
  }
}

let registered = {}

const Name = ({ entity }) => {
  let [id, dispatch] = useReducer(reducer, undefined)

  useMemo(() => {
    id = EntitiesByEcsId[entity]

    if (!registered[entity]) {
      EntityRenamed(entity, ({ EcsId, EditorId }) => {
        if (EcsId === entity)
          dispatch({
            type: 'EntityRenamed',
            payload: { EditorId },
          })
      })

      registered[entity] = true
    }
  }, [entity])

  const value = id === EditorPlacehodlerId ? '' : id

  return <Wrapper label="Name" child={
      <div className="col g-0">
        <div className="row">
          <Text
            columns={10}
            scope={entity}
            label="name"
            value={value}
            update={val => dispatch({
              type: 'EntityRenamed',
              payload: { EditorId: { current: val } },
            })}
          />
          <div className="col-2 g-0 save-name">
            <button
              type="button"
              disabled={value?.length <= 1}
              className="btn btn-primary"
              onClick={e => {
                RenameEntity({ EcsId: entity, EditorId: id })
                e.preventDefault()
              }}
            >
              <FontAwesomeIcon icon={faSave} style={styles} />
            </button>
          </div>
        </div>
      </div>
    } />
}

export default Name
