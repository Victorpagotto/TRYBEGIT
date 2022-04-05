const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 40,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 50,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = [lesson1, lesson2, lesson3];

function listAllValues(object) {
  const values = Object.values(object);
  console.log('----Values----');
  for(let key in values) {
    console.log(values[key]);
  }
}
function addProperty(object, property, value, readsObject) {
  object[property] = value;
  readsObject(object);
  listAllValues(object)
  return object;
}
function merger(objects) {
  const target = {};
  for (let key = 0; key < objects.length; key += 1) {
    target[`lesson${key + 1}`] = Object.assign({}, objects[key]);
  }
  return target;
}
function StudentNum(object, property) {
  let sumUp = 0;
  for (key in object) {
    sumUp += object[key][property];
  }
  return sumUp;
}
function getValueByPosition(object, position) {
  const values = Object.values(object);
  return values[position - 1];
}
function verifyEntries(object, key, value) {
  const entries = Object.entries(object);
  for (let i in entries) {
    if (entries[i][0] === key && entries[i][1] === value) {
      return `The combination "${key} : ${value}" exists in this object.`; 
    }
  }
  return 'This combination does not exist';
}
function sumsMath(object) {
  const objects = Object.values(object);
  let sumUp = 0;
  for (let key in objects) {
    if (objects[key].materia === 'Matemática') {
      sumUp += objects[key].numeroEstudantes;
    }
  }
  return sumUp;
}
function createReport(object, teacher) {
  const report = {
    professor: teacher,
    aulas: [],
    estudantes: 0
  };
  const lessons = Object.values(object);
  for (let key in lessons) {
    if (lessons[key].professor === teacher) {
      report.aulas.push(lessons[key].materia);
      report.estudantes += lessons[key].numeroEstudantes;
    }
  }
  return report;
}

addProperty(lesson2, 'turno', 'manhã', (object) => {
  const keys = Object.keys(object);
  for (let key in keys) {
    console.log(keys[key]);
  }
});
console.log(Object.keys(lesson2).length);
console.log(lesson2);
console.log('-------------------');
console.log(merger(allLessons));
const lessonList = merger(allLessons);
console.log('-------------------');
console.log(StudentNum(allLessons, 'numeroEstudantes'));
console.log('-------------------');
console.log(getValueByPosition(lesson1, 3));
console.log('-------------------');
console.log(verifyEntries(lesson1, 'professor', 'Maria Clara'));
console.log('-------------------');
console.log(sumsMath(lessonList));
console.log('-------------------');
console.log(createReport(lessonList, 'Carlos'));