const DATA_KEY = "app:data";

export const saveData = data => {
  localStorage.setItem(DATA_KEY, JSON.stringify(data));
};

export const loadData = () => {
  return JSON.parse(localStorage.getItem(DATA_KEY));
};
