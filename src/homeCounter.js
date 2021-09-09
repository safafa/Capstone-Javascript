export default (dishes) => {
  let value = 0;
  if (dishes.length !== undefined) {
    value = dishes.length;;
  }
  return value;
};