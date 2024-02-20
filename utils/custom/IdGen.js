let randomId = () => {
  let ids = Math.random() * 1000;
  let newId = Math.round(ids);
  return newId;
};

export default randomId;
