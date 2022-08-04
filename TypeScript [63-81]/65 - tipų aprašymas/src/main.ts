/* eslint-disable no-lone-blocks */

console.groupCollapsed('Masyvų užduotys');
{
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
    avg: 7.2,
  }, {
    name: 'Virga',
    surname: 'Maikaitė',
    course: 2,
    avg: 6.3,
  }, {
    name: 'Šurna',
    surname: 'Mauzytė',
    course: 1,
    avg: 8.1,
  }, {
    name: 'Grybas',
    surname: 'Beržauskas',
    course: 1,
    avg: 8.1,
  }, {
    name: 'Surtė',
    surname: 'Koridaitė',
    course: 3,
    avg: 9.7,
  }, {
    name: 'Vazonius',
    surname: 'Sėkla',
    course: 4,
    avg: 5.2,
  }];

  console.group('pilnų vardų masyvas');
  const fullnames: Fullname[] = students.map<Fullname>(({ name, surname }) => `${name} ${surname}`);
  console.table(fullnames);
  console.groupEnd();

  console.group('pirmo kurso studentai');
  const studentsFirstCourse: StudentFirstCourse[] = students
    .filter(({ course }) => course === 1) as StudentFirstCourse[];
  console.table(studentsFirstCourse);
  console.groupEnd();

  console.group('visų studentų vidurkis');
  const avg: number = students
    .reduce((prevSum, student) => prevSum + student.avg, 0) / students.length;
  console.table(avg);
  console.groupEnd();
}
console.groupEnd();


console.group('Funkcijų užduotys');
// 1. Sukurkite funkcijas ir aprašykite jas tipais:
// 2. Funkciją, kuri grąžina skaičių padauginta iš 2:
//      ○ Panaudokite šią funkciją sudauginti vienai reikšmei
//      ○ Panaudokite šią funkciją sukurti naują dvigubų reikšmių masyvą iteruojant per skaičių masyvą, naudojant Array.prototype.map
// 3. Funkciją, kuri tarpus sakinyje pakeičia brūkšneliais 
//     (labas rytas → labas-rytas)
// 4. Funkciją, kuri skaičiuoja skaičių masyvo vidurkį
{
  const numbers = [1, 2, 3, 4, 5];
  const numbers2 = [3, 9, 5, 7];

  console.group('Funkciją, kuri grąžina skaičių padauginta iš 2');
  {
    const double = (num: number): number => /* return */ num * 2;

    console.table({
      'double(2)': double(2),
      'double(4)': double(4),
      empty: undefined,         //čia šiaip, kad pilnai lentelę rodytų konsolėj
    });
    
    const numbersDoubled: number[] = numbers.map(double);
    console.table(
      numbersDoubled,
    );
  }
  console.groupEnd();

  console.group('Funkciją, kuri tarpus sakinyje pakeičia brūkšneliais');
  {
    const replaceSpacesWithDash = (str: string): string => str.replaceAll(' ', '-');
    console.table({
      'replaceSpacesWithDash(\'labas vakaras\')': replaceSpacesWithDash('labas vakaras'),
      'replaceSpacesWithDash(\'labas rytas\')': replaceSpacesWithDash('labas rytas'),
      empty: undefined,
    });
  }
  console.groupEnd();

  console.group('Funkciją, kuri skaičiuoja skaičių masyvo vidurkį');
  {
    // const avg = numbers.reduce((prevSum, number) => prevSum + number) / numbers.length;
    // console.log(avg);   //paprastasis variantas
    
    const calcAvg = (arr: number[]): number => arr.reduce((sum, num) => sum + num) / arr.length;
    console.table({
      'calcAvg([1, 2, 3, 4, 5])': calcAvg(numbers),
      'calcAvg([3, 9, 5, 7])': calcAvg(numbers2),
      empty: undefined,
    });
  }
  console.groupEnd();

  console.group('Funkciją, kuri sudaugintų visus number masyvo skaičius');
  {
    const numberArr: number[] = [1, 7, 9];
    const numberArr2: number[] = [11, 74, 820];
    const numberArr3: number[] = [4, 1, 9];

    const multyplyAllNumbers = (array: number[]): number => array.reduce((a, b) => a * b, 1); //1 pradinė reikšmė reducui

    console.log(multyplyAllNumbers(numberArr));
    console.log(multyplyAllNumbers(numberArr2));
    console.log(multyplyAllNumbers(numberArr3));
  }
  console.groupEnd();
}
console.groupEnd();