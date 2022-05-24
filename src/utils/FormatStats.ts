const formatStat = (index: number): string => {
  let stat: string;

  switch (index) {
    case 0:
      stat = 'Hp';
      break;
    case 1:
      stat = 'Attaque';
      break;
    case 2:
      stat = 'Defense ';
      break;
    case 3:
      stat = 'Attaque spé';
      break;
    case 4:
      stat = 'Défense spé';
      break;
    case 5:
      stat = 'Vitesse';
      break;

    default:
      stat = '';
      break;
  }

  return stat;
};

export default formatStat;
