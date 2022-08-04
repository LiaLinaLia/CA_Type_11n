"use strict";
console.groupCollapsed('Masyvų užduotys');
{
    const students = [{
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
    const fullnames = students.map(({ name, surname }) => `${name} ${surname}`);
    console.table(fullnames);
    console.groupEnd();
    console.group('pirmo kurso studentai');
    const studentsFirstCourse = students
        .filter(({ course }) => course === 1);
    console.table(studentsFirstCourse);
    console.groupEnd();
    console.group('visų studentų vidurkis');
    const avg = students
        .reduce((prevSum, student) => prevSum + student.avg, 0) / students.length;
    console.table(avg);
    console.groupEnd();
}
console.groupEnd();
console.group('Funkcijų užduotys');
{
    const numbers = [1, 2, 3, 4, 5];
    const numbers2 = [3, 9, 5, 7];
    console.group('Funkciją, kuri grąžina skaičių padauginta iš 2');
    {
        const double = (num) => num * 2;
        console.table({
            'double(2)': double(2),
            'double(4)': double(4),
            empty: undefined,
        });
        const numbersDoubled = numbers.map(double);
        console.table(numbersDoubled);
    }
    console.groupEnd();
    console.group('Funkciją, kuri tarpus sakinyje pakeičia brūkšneliais');
    {
        const replaceSpacesWithDash = (str) => str.replaceAll(' ', '-');
        console.table({
            'replaceSpacesWithDash(\'labas vakaras\')': replaceSpacesWithDash('labas vakaras'),
            'replaceSpacesWithDash(\'labas rytas\')': replaceSpacesWithDash('labas rytas'),
            empty: undefined,
        });
    }
    console.groupEnd();
    console.group('Funkciją, kuri skaičiuoja skaičių masyvo vidurkį');
    {
        const calcAvg = (arr) => arr.reduce((sum, num) => sum + num) / arr.length;
        console.table({
            'calcAvg([1, 2, 3, 4, 5])': calcAvg(numbers),
            'calcAvg([3, 9, 5, 7])': calcAvg(numbers2),
            empty: undefined,
        });
    }
    console.groupEnd();
    console.group('Funkciją, kuri sudaugintų visus number masyvo skaičius');
    {
        const numberArr = [1, 7, 9];
        const numberArr2 = [11, 74, 820];
        const numberArr3 = [4, 1, 9];
        const multyplyAllNumbers = (array) => array.reduce((a, b) => a * b, 1);
        console.log(multyplyAllNumbers(numberArr));
        console.log(multyplyAllNumbers(numberArr2));
        console.log(multyplyAllNumbers(numberArr3));
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map