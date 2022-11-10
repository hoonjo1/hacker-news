const date = (time: number) => {
  const createDate = new Date(time * 1000);
  const year = String(createDate.getFullYear());
  const month = String(createDate.getMonth() + 1).padStart(2, '0');
  const date = String(createDate.getDate()).padStart(2, '0');
  const hours = String(createDate.getHours()).padStart(2, '0');
  const minutes = String(createDate.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${date} ${hours}:${minutes}`;
};

export default date;
