export const axis = (
  label,
  value,
  fn,
  common = {
    updateTarget: () => {}
  },
) => ({
  ...common,
  label,
  value,
  update: val => {
    fn(val)
    common.updateTarget(label, val)
  },
})