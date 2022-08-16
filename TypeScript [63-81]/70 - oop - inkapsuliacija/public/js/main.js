"use strict";
console.group('1. Naudojant "getter" ir "setter" NESUTRUMPINTAS funkcijas:');
{
    class Person {
        name;
        surname;
        items;
        age;
        constructor(name, surname, items, age) {
            this.setName(name);
            this.setSurname(surname);
            this.setItems(items);
            this.setAge(age);
        }
        setName(name) {
            this.name = name;
        }
        getName() {
            return this.name;
        }
        setSurname(surname) {
            this.surname = surname;
        }
        getSurname() {
            return this.surname;
        }
        setItems(items) {
            this.items = JSON.parse(JSON.stringify(items));
        }
        getItems() {
            return JSON.parse(JSON.stringify(this.items));
        }
        setAge(age) {
            this.age = age;
        }
        getAge() {
            return this.age;
        }
    }
    const person = new Person('Veibraidis', 'Klynka', [], 25);
    console.groupCollapsed(`1.1. Sukurkite klasę Person, kuri turėtų privačias savybes:
      name: string,
      surname: string,
      items: Array<{title: string, price: number}>,
      age: number,
    Aprašykite konstruktorių kuris priimtų šiom savybėms skirtus parametrus ir nustatytų reikšmes naudojant "setter" funkcijas.
  `);
    {
        console.log(person);
    }
    console.groupEnd();
    console.groupCollapsed('1.2. Aprašykite kiekvienai savybei "getter" funkcijas');
    {
    }
    console.groupEnd();
    console.groupCollapsed('1.3. Sukurkite papildomą getterį "getFullname", kuris grąžintų pilną žmogaus vardą.');
    {
    }
    console.groupEnd();
    console.groupCollapsed('1.4. Sukurkite papildomą getterį "getTotalItemValue", kuris grąžintų visų asmens daiktų kainų sumą');
    {
    }
    console.groupEnd();
    console.groupCollapsed('1.5. setName "setter"yje aprašykite 3 savo sugalvotas validacijas');
    {
    }
    console.groupEnd();
    console.groupCollapsed('1.6. setSurname "setter"yje aprašykite 3 savo sugalvotas validacijas');
    {
    }
    console.groupEnd();
    console.groupCollapsed('1.7. setAge "setter"yje aprašykite 2 savo sugalvotas validacijas');
    {
    }
    console.groupEnd();
    console.groupCollapsed('1.8. setItems "setter"yje aprašykite 3 savo sugalvotas validacijas KIEKVIENO priskiriamo masyvo "daiktams"');
    {
    }
    console.groupEnd();
}
console.groupEnd();
console.group('2. Naudojant "get" ir "set" ES6 funkcijas:');
{
    class Person {
    }
    const person = new Person();
    console.groupCollapsed(`2.1. Sukurkite klasę Person, kuri turėtų privačias savybes:
      name: string,
      surname: string,
      items: Array<{title: string, price: number}>,
      age: number,
    Aprašykite konstruktorių kuris priimtų šiom savybėms skirtus parametrus ir nustatytų reikšmes naudojant "setter" funkcijas.
  `);
    {
    }
    console.groupEnd();
    console.groupCollapsed('2.2. Aprašykite kiekvienai savybei ES6 "get" funkcijas');
    {
    }
    console.groupEnd();
    console.groupCollapsed('2.3. Sukurkite papildomą getterį "fullname", kuris grąžintų pilną žmogaus vardą.');
    {
    }
    console.groupEnd();
    console.groupCollapsed('2.4. Sukurkite papildomą getterį "totalItemValue", kuris grąžintų visų asmens daiktų kainų sumą');
    {
    }
    console.groupEnd();
    console.groupCollapsed('2.5. name "setter"yje aprašykite 3 savo sugalvotas validacijas');
    {
    }
    console.groupEnd();
    console.groupCollapsed('2.6. surname "setter"yje aprašykite 3 savo sugalvotas validacijas');
    {
    }
    console.groupEnd();
    console.groupCollapsed('2.7. age "setter"yje aprašykite 2 savo sugalvotas validacijas');
    {
    }
    console.groupEnd();
    console.groupCollapsed('2.8. items "setter"yje aprašykite 3 savo sugalvotas validacijas KIEKVIENO priskiriamo masyvo "daiktams"');
    {
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map