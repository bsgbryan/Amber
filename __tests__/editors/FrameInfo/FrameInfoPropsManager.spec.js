import {
  actions,
  localState
} from '../../src/editors/FrameInfo/FrameInfoStateManager'

describe('The FrameInfo state manager', () => {
  describe('actions', () => {
    it('exports actions', () => {
      expect(Object.keys(actions).length).toEqual(0)
      
      expect(typeof actions.soemaction).toEqual('function')
    })
  })

  describe('localState', () => {
    // Tests for localState function go here
  })
})