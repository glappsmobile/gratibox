const spacing = (space) => {
  switch (space) {
    case 'small':
      return '5px';
    case 'normal':
      return '10px';
    case 'big':
      return '20px';
    case 'huge':
      return '40px';
    default:
      return '0px';
  }
};

export default spacing;
