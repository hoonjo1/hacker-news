export const getStorage = (name = '') =>
  JSON.parse(`${localStorage.getItem(name)}`);

export const setStorage = (name = '', item: boolean) =>
  localStorage.setItem(name, JSON.stringify(item));
