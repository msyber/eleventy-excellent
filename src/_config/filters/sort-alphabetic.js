export const sortAlphabetically = array => {
  return [...array].sort((a, b) => a.data.title.localeCompare(b.data.title));
};
