/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
  Užduočių atlikimo eiga:
  * Pirmiausiai perskaitykite visą užduotį:
  * Klauskite dėstytojo užduoties paaiškinimo, jeigu užduotis nėra aiški.
  * Galvoje susidarytkite sprendimo planą:
    * Kaip atliksiu užduotį? Galbūt verta pasibraižyti sprendimo idėją ant lapelio?
    * Kokių tipų reikės? Parametrų tipai, rezultatų tipai, funkcijų tipai.
    * Kaip aiškiai ir tvarkingai pateiksiu rezultatus?
  * Bandykite atlikti užduotį:
    * Pavyko:
      * Atspausdinkite rezultatus ir/arba veikimo pavyzdžius
      * Pabandykite patobulinti savo kodą:
        * pabandykite aiškiau aprašyti kintamųjų/tipų pavadinimus
        * sužiūrėkite ar tikrai naudojate vieningą sintaksę
      * Palyginkite savo sprendimą su užuočių atsakymų failu.
      * Suformuokite klausimus dėstytojui, pagal sprendimų skirtumus
    * Nepavyko:
      * pažiūrėkite atsakymų failą ir PO VIENĄ EILUTĘ nusirašykite sprendimą
      * rašant kiekvieną eilutę smulkmeniškai suformuokite klausimus.
    * Spręskite kitus uždavinius, o kai dėstytojas aiškins užduoties sprendimą, klausykitės
      * Po dėstytojo sprendimo ir aiškinimo užduokite klausimus, kurių vis dar nesuprantate.
  Patarimai:
    * Paspauskite komandą: ALT + Z - tai padės lengviau skaityti užduočių tekstą
    * Nežiūrėkite į atsakymų failus anksčiau laiko.
      jūsų tikslas lavinti inžinerinį mąstymą, o ne atlikti užduotis.
    * Nesedėkite prie kompiuterio ilgiau nei 1 val iš eilės, darykite pertraukas po 10 min
    * Klauskite visko ko nesuprantate. Neklausdami eikvojat savo laiką, kurį šie kursai taupo.
      Gerbiat savo laiką - gerbiat save.
    * Kodo tvarka ir aiškumas tiek pat svarbūs kiek funkcionalumas. Išmoksite tai dabar,
      arba kuomet negausite darbo dėl netvarkingo kodo.
    * Atlikę užduotį, užduokite sau klausimą: "Ar tai geriausia ką galėjau?"
    * Įsigilinimas jūsų žinias iš supratimo perkelia į suvokimą. Tik suvokiant dalykus, galite
      žinias pritaikyti kūrybiškai. Iš to seka, kad užduoties atlikimo kokybė >>> užduočių kiekis
    * Užduočių rezultatų pateikimas tike pat svarbus, kiek sprendimas.
*/

type StringPair = [string, string]; // globalus kintamasis

// 10 min
console.group('1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis');
{
  const toUpperCase = (str: string): string => str.toLocaleUpperCase();
  console.table({
    'toUpperCase(\'labas\')': toUpperCase('labas'),
    'toUpperCase(\'viso\')': toUpperCase('viso'),
    'toUpperCase(\'man patinka bananai\')': toUpperCase('man patinka bananai'),
    empty: undefined,
  });
// 'toUpperCase(\'man patinka bananai\')': - "\" panaikina vieno simbolio parašyto po \ funkcinę prasmę (nes pvz kodas supranta tą simbolį kitaip). Jei norėtumėm consolėje atsispausdinti "\", tai kode spausdintumėm "\\".
  
//pvz: kaip gražiai atspausdinti consolėje-----------
const arg1 = 'labas';
const arg2 = 'viso gero';
const arg3 = 'man patinka bananai';
  console.table({
    [`toUpperCase(${arg1})`]: toUpperCase(arg1), //jei naudoji kintamuosius sąvybės formavimui dar reik viską (tą savybę) įdėt į [].
    [`toUpperCase(${arg2})`]: toUpperCase(arg2),
    [`toUpperCase(${arg3})`]: toUpperCase(arg3),
    empty: undefined,
  });
//----------------------------------------------------
}
console.groupEnd();

// 10 min
console.groupCollapsed('2. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių');
{
  // globaliam skope // type StringPair = [string, string];  //su tuple, kur galime nurodyti masyvą su konkrečius skaičiumi stringų
  const symbolCount = (str1: string, str2: string): number => str1.length + str2.length;
  const args1: StringPair = ['labas', 'vakaras'];
  const args2: StringPair = ['viso', 'gero'];
  const args3: StringPair = ['laba', 'diena'];
  console.table({
    [`symbolCount(${JSON.stringify(args1)})`]: symbolCount(...args1),  //"..." reiškias destruktūrizuoti
    [`symbolCount(${JSON.stringify(args2)})`]: symbolCount(...args2),
    [`symbolCount(${JSON.stringify(args3)})`]: symbolCount(...args3),
    empty: undefined,
  });

  const totalCase = (str1: string, str2: string): number => str1.length + str2.length;
  console.table({
    'totalCase(\'labas\' ir \'iki\')': totalCase('labas', 'iki'),
    empty: undefined,
  });
}
console.groupEnd();

// 10 min
console.groupCollapsed('3. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2-tru parametru perduota raidė, priešingu atveju false');
// const aiškinimo = (taiKameIeskot, raideKuriosIEskot) -> true - jeigu ta raidė yra žodyje, false - jei nėra.
{
// globaliam skope // type StringPair = [string, string];
const includesLetter = (str: string, letter: string): boolean => str.includes(letter);
// const includesLetter = (str: string, letter: string, letter2:string) => str.includes(letter) && str.includes(letter2); // patikrintų ar yra dvi raidės

const args1: StringPair = ['labas', 'l'];
const args2: StringPair = ['labas', 'z'];
const args3: StringPair = ['labasai', 'a'];
console.table({
  [`includesLetter(${JSON.stringify(args1)})`]: includesLetter(...args1),  //"..." reiškias destruktūrizuoti
  [`includesLetter(${JSON.stringify(args2)})`]: includesLetter(...args2),
  [`includesLetter(${JSON.stringify(args3)})`]: includesLetter(...args3),
  empty: undefined,
});
}
console.groupEnd();

// 10 min
console.groupCollapsed('4. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių');
{
  const equalSymbolCount = (str: string): boolean => str.length % 2 === 0;  //operatorius, jei simbolių sk. žodyje dalijant iš 2 liekana lygi 0 tai lyginis (true).
  const arg1 = 'labas';
  const arg2 = 'viso gero';
  const arg3 = 'man patinka bananai';
  console.table({
    [`equalSymbolCount(${arg1})`]: equalSymbolCount(arg1), //jei naudoji kintamuosius sąvybės formavimui dar reik viską (tą savybę) įdėt į [].
    [`equalSymbolCount(${arg2})`]: equalSymbolCount(arg2),
    [`equalSymbolCount(${arg3})`]: equalSymbolCount(arg3),
    empty: undefined,
  });
}
console.groupEnd();

// 15 min
// regexr.com
console.groupCollapsed('5. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje');
{
  const VOWEL_REGEX = /[aeiyouAEIYOUąęėįųūĄĘĖĮŲŪ]/;  //regexr užrašymas(u šoninių skliaustų sintaksė, kurią javascript kompiliatorius supranta, kad čia yra kuriamas regexp). Dar galimas ir toks perduodant regexp taisyklę, kaip stringą ... = new RegExp('[aeiyouAEIYOUąęėįųūĄĘĖĮŲŪ]');

  const countVowels = (str: string): number => {
    let count = 0;
    Array.from(str).forEach((letter) => {
      if (VOWEL_REGEX.test(letter)) {       // .test regex metodas, kuris tikrina ar atitinka raidė su raide esančia nurodytame regexo šablone.
        count +=1;
      }
    });
    return count;
  };

  // //kitas variantas:
  // const countVowels = (str: string): number => {
  //   let count = 0;
  //   for (let i = 0; i < str.length; i += 1) {
  //     if (VOWEL_REGEX.test(str[i])) {
  //       count +=1;
  //     }
  //   }
  //   return count;
  // };

  // // kitas patrumpintas:
  // const countVowels = (str: string): number => {
  //   let count = 0;
  //   for (let i = 0; i < str.length; i += 1) {
  //     if (VOWEL_REGEX.test(str[i])) count +=1;   // jei if turi tik vieną komandą, jam galima nerašyti {}. Ir todėl jei po if nėra {} sėkmės atveju vykdoma tik viena komanda. T.p. ir su ciklu, todėl ir {} apgaubiančius if galima būtų nuimt.
  //   }
  //   return count;
  // };

  //  // kitas patrumpintas dar:
  //  const countVowels = (str: string): number => {
  //   let count = 0;
  //   for (let i = 0; i < str.length; i += 1) if (VOWEL_REGEX.test(str[i])) count +=1;
  //   return count;
  // };
  const arg1 = 'labas';
  const arg2 = 'viso gero';
  const arg3 = 'man patinka bananai';
  console.table({
    [`countVowels(${arg1})`]: countVowels(arg1), //jei naudoji kintamuosius sąvybės formavimui dar reik viską (tą savybę) įdėt į [].
    [`countVowels(${arg2})`]: countVowels(arg2),
    [`countVowels(${arg3})`]: countVowels(arg3),
    empty: undefined,
  });

  //antras būdas
  const VOWEL_REGEX2 = /[aeiyouAEIYOUąęėįųūĄĘĖĮŲŪ]/g; //g - globalus regex // /[aeiyouąęėįųū]/ig; - nebus kreipiama dėmesio į raidžių dydį(case insensitive)

  const countVowels2 = (str: string): number => [...str.matchAll(VOWEL_REGEX2)].length;
    // const arg1 = 'labas';
    // const arg2 = 'viso gero';
    // const arg3 = 'man patinka bananai';
    console.table({
      [`countVowels2(${arg1})`]: countVowels2(arg1), //jei naudoji kintamuosius sąvybės formavimui dar reik viską (tą savybę) įdėt į [].
      [`countVowels2(${arg2})`]: countVowels2(arg2),
      [`countVowels2(${arg3})`]: countVowels2(arg3),
      empty: undefined,
    });

    // trečias būdas:
    const text = 'dhgg fhjyuazvvb bup asbl oomuesa';
    const countVowels3 = (str: string): number => Array.from(str).filter((letter) => 'aeiyouAEIYOUąęėįųūĄĘĖĮŲŪ'.includes(letter)).length;
    console.table({
      [`countVowels3(${text})`]: countVowels3(text),
    })
}
console.groupEnd();

// 15 min
console.groupCollapsed('6. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje');
{
  const recurrenceCount = (str: string, letter: string): number => {
    let count = 0;
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === letter) {
        count += 1;
      }
    }
    return count;
  };
  const args1: StringPair = ['labas', 'a'];
  const args2: StringPair = ['labas', 'b'];
  const args3: StringPair = ['labas', 'p'];

  console.table({
    [`recurrenceCount(${JSON.stringify(args1)})`]: recurrenceCount(...args1),
    [`recurrenceCount(${JSON.stringify(args2)})`]: recurrenceCount(...args2),
    [`recurrenceCount(${JSON.stringify(args3)})`]: recurrenceCount(...args3),
    empty: undefined,
  });

  //antras variantas:
  const countLetters = (str: string, searchLetter: string): number => {
    const searchLetterRegex = new RegExp(searchLetter, 'g');
    const regexMatchesArr = [...str.matchAll(searchLetterRegex)];

    return regexMatchesArr.length;
  };
  console.log({
    'labas, a': countLetters('labas', 'a'),
    'kempės, k': countLetters('kempės', 'k'),
    '123123, z': countLetters('123123', 'z'),
  });
}
console.groupEnd();

// 15 min
console.groupCollapsed('7. Sukurkite funkciją, kuri ištrintų pirmą surastą simbolį žodyje ir grąžintų pakeistą žodį');
{
  const removeLetter = (str: string, letter: string): string => str.replace(letter, '');

  console.log({
    labas: removeLetter('labas', 'b'),
    kempiniukas: removeLetter('kempiniukas', 's'),
    123123: removeLetter('123123', 'a'),
  });
}
console.groupEnd();

// 20 min
//  8. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.groupCollapsed('8. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.');
{
  const filterLetters = (str: string, letters: string[]): string => letters
  .reduce((prevStr, letter) => prevStr.replaceAll(letter, ''), str);

const str = filterLetters('Brangakmienio paveikslas', ['a', 'i']);
console.log(str);
}
console.groupEnd();

// 60 min
// 9. Sukurkite funkciją, kuri taiso teksto klaidas, pagal tokius reikalavimus:
//  * Pirma sakinio raidė didžioji.
//  * Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  * Bet koks kiekis tarpų pakeičiamas vienu tarpu
//  * Pašalinti tarpus aplink visą tekstą

//aiškina 08.04 paskaitos pačiam gale.

console.groupCollapsed('9. Sukurkite funkciją, kuri taiso pastraipos klaidas');
{
  type StringModifier = (str: string) => string;
  type DecomposedText = {
    sentences: string[],
    separators: string[],
  };
  // PATEIKTAS VIENAS IŠ DAUGELIO VARIANTŲ - išsprendus savaip galite palyginti sprendimus
  // Su dėstytoju aptarkite pliusus ir minusus šio ir jūsų sprendimo.

  const REGEX_WHITESPACE = /[\s]+/g;
  const REGEX_SEPARATORS = /[.?!]/g;

  const removeMultipleSpaces: StringModifier = (str) => str.replaceAll(REGEX_WHITESPACE, ' ');

  const removeSpacesBeforeCommas: StringModifier = (str) => str.replaceAll(' , ', ',');

  const ensureSpacesAfterCommas: StringModifier = (str) => str.replaceAll(
    ',',
    (_, index, text) => (text[index + 1] === ' ' ? ',' : ', '),
  );

  const decomposeText = (text: string): DecomposedText => {
    const captures = [...text.matchAll(REGEX_SEPARATORS)];

    let from = -1;
    const sentencesAndSeparators: DecomposedText = captures.reduce<DecomposedText>(
      (prevSentencesAndSeparators, capture) => {
        const [separator] = capture;
        const index = capture.index as number;
        const sentence = text.slice(from + 1, index);

        prevSentencesAndSeparators.sentences.push(sentence);
        prevSentencesAndSeparators.separators.push(separator);
        from = index;

        return prevSentencesAndSeparators;
      },
      {
        sentences: [],
        separators: [],
      },
    );

    return sentencesAndSeparators;
  };

  const composeText = ({ sentences, separators }: DecomposedText): string => sentences
    .reduce((text, sentence, index) => `${text + sentence + separators[index]} `, '');

  const capitalize: StringModifier = (str) => str[0].toUpperCase() + str.slice(1);

  // const capitalizeWord = (word: string): string => word[0].toUpperCase() + word.slice(1);

  const fixText = (text: string): string => {
    let result = text.trim();
    result = removeMultipleSpaces(result);
    result = removeSpacesBeforeCommas(result);
    result = ensureSpacesAfterCommas(result);
    const decomposedText = decomposeText(result);
    const sentences = decomposedText.sentences
      .map((sentence) => sentence.trim())
      .map(capitalize);

    result = composeText({ ...decomposedText, sentences });
    // result = composeText({ sentences, separators: decomposedText.separators });


    return result;
  };

  const text = '    labas , aš Serbentautas .   Man      patinka vaisiai? Visokie     vaisiai  !    Ypač    bananai       , obuoliai,kriaušės.    ';
  const fixedText = fixText(text);
  console.log(fixedText);
}
console.groupEnd();

//pamokos pvz.:
const numsOrStrs1: number[] | string[] = [4, 6, 46, 45];   //masyvas gali būti arba skaičius, arba stringas.
const numsOrStrs2: number[] | string[] = ['fghhkj', 'fghglkjl', '45634321', '45m'];

// const mixed: (number | string)[] = [4, 'gfhjk6', '46', 45];  //masyvas gali būti ir skaičius, ir stringas, bet taip nedaroma.
const mixed: Array<number | string> = [4, 'gfhjk6', '46', 45];  //masyvas gali būti ir skaičius, ir stringas, bet taip nedaroma.

console.log({
  numsOrStrs1,
  numsOrStrs2,
  mixed,
});

//spread operatorius "..." destruktūrizacija veikia su objektais ir masyvais
// naudojam objektus tam, kad struktūrizuotumėm du kintamuosius į vieną atminties vietą pasiekiamą nuorodos tipu:

// const person = {               tai yra tas pats kas:     const person = Object.create({
//   name: 'jonas',                                           name: 'jonas',
//   surname: 'pizonas',                                      surname: 'pizonas',
// };                                                       });
// //kuriant masyvą:
// const numbers = [1, 2, 3];      tai yra tas pats kas:    const numbers = new Array(1, 2, 3);

//destruktūrizacija reiškia: 
// ...person -> 
// name: 'jonas',
// surname: 'pizonas',   
// //bet jos vienos užrašymas, neturi prasmės, ji naudojama kitose savybėse:
// const describedPerson = {
//   ...person,
//   age: 16,
//   height: 170,
// }
// tas pats kas:
// const describedPerson = {
//   name: 'jonas',
//   surname: 'pizonas',
//   age: 16,
//   height: 170,
// }
//destruktūrizacija su masyvais, panaudotas kintamasis, kad išskleistumėm jame esančius elementus:
// const numbers = [1, 2, 3];
// const joinedNumbers = [...numbers, 4, 5];   //tas pats kas: const joinedNumbers = [1, 2, 3, 4, 5];
// console.log(1, 2, 3); gauname tarsi parametrus, kuriuos kažkur įdedam tas pats kas: console.log(...numbers);


//alt + z perkelia į kitą eilutę, jei netelpa ekrane. mac'e opt + z

// iteruoja 1000000 kartų:
let a = 0;
for (let index = 0; index < 10 ** 6; index += 1) {
  a += 1;
}  
console.log(a);  

//regex sukūrimas:

// const str = 'labas';
// const reg = /a/g;                        //g - global RegExp argument(atributas) reikalingas naudoti su matchAll
// for (const test of str.matchAll(reg)){   //senovinis paduoti stringą, o gražina iteratorių
//   console.log(test);
// }

// const str = 'labas';
// const reg = /a/g;
// const foundElements = [...str.matchAll(reg)];  // paimam iteratorių ir naudodami spread operatorių išskeidžiam naujai formuojamam masyve.
//   console.log(foundElements);

const str = 'labas';
const reg = /a/g;
const foundElements = [...str.matchAll(reg)];  
  console.log([...str.matchAll(reg)].length);   //gaunam rastų simbolių kiekį

