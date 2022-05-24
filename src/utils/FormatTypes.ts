const formatType = (type: string): string => {
  let color: string;

  switch (type) {
    case 'fire':
      color = '#FB1B1B';
      break;
    case 'water':
      color = '#2a75bb';
      break;
    case 'grass':
      color = '#4DAD5B';
      break;
    case 'bug':
      color = '#37796C';
      break;
    case 'Normal':
      color = '#f5f4c0';
      break;
    case 'flying':
      color = '#16D6FB';
      break;
    case 'poison':
      color = '#855AC9';
      break;
    case 'fairy':
      color = '#f59bad';
      break;
    case 'psychic':
      color = '#d56671';
      break;
    case 'electric':
      color = '#ffcb05';
      break;
    case 'fighting':
      color = '#c04c4b';
      break;
    case 'ground':
      color = '#8d6033';
      break;
    case 'steel':
      color = '#6EA4BB';
      break;
    case 'dragon':
      color = '#3c5aa6';
      break;
    case 'dark':
      color = '#000000';
      break;
    case 'ghost':
      color = '#7c7ab0';
      break;
    case 'rock':
      color = '#c7a008';
      break;
    case 'ice':
      color = '#5EBDFC';
      break;
    default:
      color = 'grey';
      break;
  }

  return color;
};

export default formatType;
