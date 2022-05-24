const formatColorStats = (stats: number): string => {
  let color: string;
  let n: number;
  if (stats < 50) {
    n = 0;
  } else if (stats >= 50 && stats < 100) {
    n = 1;
  } else if (stats >= 100 && stats <= 130) {
    n = 2;
  } else {
    n = 3;
  }

  switch (n) {
    case 0:
      color = 'red';
      break;
    case 1:
      color = 'yellow';
      break;
    case 2:
      color = 'green';
      break;
    case 3:
      color = 'blue';
      break;

    default:
      color = 'black';
      break;
  }

  return color;
};

export default formatColorStats;
