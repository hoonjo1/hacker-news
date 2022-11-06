const difference = (createTime: number) => {
  const end = new Date(createTime * 1000);
  const now = new Date();
  const difference = now.getTime() - end.getTime();
  const times = [
    { time: 'minute', milliSeconds: 1000 * 60 },
    { time: 'hour', milliSeconds: 1000 * 60 * 60 },
    { time: 'day', milliSeconds: 1000 * 60 * 60 * 24 },
    { time: 'month', milliSeconds: 1000 * 60 * 60 * 24 * 30 },
    { time: 'year', milliSeconds: 1000 * 60 * 60 * 24 * 365 },
  ].reverse();

  for (const value of times) {
    const betweenTime = Math.floor(difference / value.milliSeconds);
    if (betweenTime > 0) {
      return `${betweenTime} ${value.time} ago`;
    }
  }
  return 'A moment ago';
};

export default difference;
