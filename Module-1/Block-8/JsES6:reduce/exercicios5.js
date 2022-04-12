const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(names) {
  return names.reduce((times, name) => {
    name.split('').forEach((char) => {
      if (char === 'A' || char === 'a') times += 1;
    });
    return times;
  }, 0);
}

console.log(containsA(names));