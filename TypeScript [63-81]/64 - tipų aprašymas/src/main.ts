// 1. Sukurkite studento tipą:
//      ○ vardas: string
//      ○ pavardė: string
//      ○ kursas: number
//      ○ vidurkis: number
// 2. Sukurkite studentų masyvą iš 6 studentų
// 3. Panaudokite studentų masyvą, kad sukurtumėte:
//      ○ pilnų vardų masyvą:
// [
// ‘Skara Blauzdaitė’,
// ‘Makaronas Bomžpakis’,
// ‘Frakas Skveras’
// ]
//      ○ pirmojo kurso studentų masyvą
//      ○ visų studentų vidurkį
// 4. Visiems gautiems duomenims aprašykite tipus

type Student = {
    name: string,
    surname: string,
    course: number,
    avg: number,
}

type StudentFirstCourse = {
    name: string,
    surname: string,
    course: 1,
    avg: number,
}

type Fullname = string;

const students: Student[] = [{
        name: 'Valius',
        surname: 'Koridas',
        course: 1,
        avg: 7.2
    },{
        name: 'Virga',
        surname: 'Maikaitė',
        course: 2,
        avg: 6.3
    },{
        name: 'Šurna',
        surname: 'Mauzytė',
        course: 1,
        avg: 8.1
    },{
        name: 'Grybas',
        surname: 'Beržauskas',
        course: 1,
        avg: 8.1
    },{
        name: 'Surtė',
        surname: 'Koridaitė',
        course: 3,
        avg: 9.7
    },{
        name: 'Vazonius',
        surname: 'Sėkla',
        course: 4,
        avg: 5.2
    }];

// console.group('pilnų vardų masyvas');
// const fullnames: Fullname[] = students.map((student) => `${student.name} ${student.surname}`);
// console.log(fullnames)
// console.groupEnd();

console.group('pilnų vardų masyvas');
const fullnames: Fullname[] = students.map<Fullname>(({ name, surname }) => `${name} ${surname}`);
console.table(fullnames);   //lentelėje
console.groupEnd();
// const fullNames: string[] = students.map(({ name, surname }) => `${name} ${surname}`);
// console.log(fullNames);

console.group('pirmo kurso studentai');
const studentsFirstCourse: StudentFirstCourse[] = students.filter(({course}) => course === 1) as StudentFirstCourse[]; //as StudentFirstCourse[]; kad typescriptas priimtų kaip masyvą
console.table(studentsFirstCourse);
console.groupEnd();
// const studentsOfFirstCourse: Student[] = students.filter(({ course }) => course === 1);
// console.log(studentsOfFirstCourse);

console.group('visų studentų vidurkis');
const avg: number = students.reduce((prevSum, student) => prevSum + student.avg, 0) / students.length;
console.table(avg);
console.groupEnd();
// const studentsAvg: number = students.reduce((avgSum, { avg }) => avgSum + avg, 0) / students.length;
// console.log(studentsAvg);