import {
  Color,
  HemisphereLight,
} from 'three'

import World, { RegisterEntity } from '../../env'

import { scene } from '../../env'

const create = () => {
  const skyColor    = new Color(.5, .5,  1)
  const groundColor = new Color(.5,  1, .5)
  const light       = new HemisphereLight(skyColor, groundColor, .5)
  
  light.position.set(0, 0, 0)

  const entity = World.createEntity({
    c: {
      editor: {
        type: 'Editor',
        value: 'HemisphereLight',
      },
      intensity: {
        type: 'Intensity',
        value: light.intensity,
        target: light,
      },
      visibility: {
        type: 'Visibility',
        value: light.visible,
        target: light,
      },
      skyColor: {
        type: 'Color',
        r: 127,
        g: 127,
        b: 255,
        target: light.color,
      },
      groundColor: {
        type: 'Color',
        r: 127,
        g: 255,
        b: 127,
        target: light.groundColor,
      },
      position: {
        type: 'Position',
        x: light.position.x,
        y: light.position.y,
        z: light.position.z,
        target: light.position,
      },
    }
  })
  
  scene.add(light)

  RegisterEntity({ EcsId: entity.id, SceneId: light.uuid })
}

export default create
