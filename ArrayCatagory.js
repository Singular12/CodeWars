const Category = {
  Open: 'Open',
  Senior: 'Senior',
};

function openOrSenior(data){
 return data.map(([age, handicap]) => {
    if (age >= 55 && handicap > 7) {
      return Category.Senior;
    }

    return Category.Open;
 });
}
