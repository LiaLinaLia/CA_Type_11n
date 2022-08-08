"use strict";
console.group('1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis');
{
    const toUpperCase = (str) => str.toLocaleUpperCase();
    console.table({
        'toUpperCase(\'labas\')': toUpperCase('labas'),
        'toUpperCase(\'viso\')': toUpperCase('viso'),
        'toUpperCase(\'man patinka bananai\')': toUpperCase('man patinka bananai'),
        empty: undefined,
    });
    const arg1 = 'labas';
    const arg2 = 'viso gero';
    const arg3 = 'man patinka bananai';
    console.table({
        [`toUpperCase(${arg1})`]: toUpperCase(arg1),
        [`toUpperCase(${arg2})`]: toUpperCase(arg2),
        [`toUpperCase(${arg3})`]: toUpperCase(arg3),
        empty: undefined,
    });
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių');
{
    const symbolCount = (str1, str2) => str1.length + str2.length;
    const args1 = ['labas', 'vakaras'];
    const args2 = ['viso', 'gero'];
    const args3 = ['laba', 'diena'];
    console.table({
        [`symbolCount(${JSON.stringify(args1)})`]: symbolCount(...args1),
        [`symbolCount(${JSON.stringify(args2)})`]: symbolCount(...args2),
        [`symbolCount(${JSON.stringify(args3)})`]: symbolCount(...args3),
        empty: undefined,
    });
    const totalCase = (str1, str2) => str1.length + str2.length;
    console.table({
        'totalCase(\'labas\' ir \'iki\')': totalCase('labas', 'iki'),
        empty: undefined,
    });
}
console.groupEnd();
console.groupCollapsed('3. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2-tru parametru perduota raidė, priešingu atveju false');
{
    const includesLetter = (str, letter) => str.includes(letter);
    const args1 = ['labas', 'l'];
    const args2 = ['labas', 'z'];
    const args3 = ['labasai', 'a'];
    console.table({
        [`includesLetter(${JSON.stringify(args1)})`]: includesLetter(...args1),
        [`includesLetter(${JSON.stringify(args2)})`]: includesLetter(...args2),
        [`includesLetter(${JSON.stringify(args3)})`]: includesLetter(...args3),
        empty: undefined,
    });
}
console.groupEnd();
console.groupCollapsed('4. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių');
{
    const equalSymbolCount = (str) => str.length % 2 === 0;
    const arg1 = 'labas';
    const arg2 = 'viso gero';
    const arg3 = 'man patinka bananai';
    console.table({
        [`equalSymbolCount(${arg1})`]: equalSymbolCount(arg1),
        [`equalSymbolCount(${arg2})`]: equalSymbolCount(arg2),
        [`equalSymbolCount(${arg3})`]: equalSymbolCount(arg3),
        empty: undefined,
    });
}
console.groupEnd();
console.groupCollapsed('5. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje');
{
    const VOWEL_REGEX = /[aeiyouAEIYOUąęėįųūĄĘĖĮŲŪ]/;
    const countVowels = (str) => {
        let count = 0;
        Array.from(str).forEach((letter) => {
            if (VOWEL_REGEX.test(letter)) {
                count += 1;
            }
        });
        return count;
    };
    const arg1 = 'labas';
    const arg2 = 'viso gero';
    const arg3 = 'man patinka bananai';
    console.table({
        [`countVowels(${arg1})`]: countVowels(arg1),
        [`countVowels(${arg2})`]: countVowels(arg2),
        [`countVowels(${arg3})`]: countVowels(arg3),
        empty: undefined,
    });
    const VOWEL_REGEX2 = /[aeiyouAEIYOUąęėįųūĄĘĖĮŲŪ]/g;
    const countVowels2 = (str) => [...str.matchAll(VOWEL_REGEX2)].length;
    console.table({
        [`countVowels2(${arg1})`]: countVowels2(arg1),
        [`countVowels2(${arg2})`]: countVowels2(arg2),
        [`countVowels2(${arg3})`]: countVowels2(arg3),
        empty: undefined,
    });
    const text = 'dhgg fhjyuazvvb bup asbl oomuesa';
    const countVowels3 = (str) => Array.from(str).filter((letter) => 'aeiyouAEIYOUąęėįųūĄĘĖĮŲŪ'.includes(letter)).length;
    console.table({
        [`countVowels3(${text})`]: countVowels3(text),
    });
}
console.groupEnd();
console.groupCollapsed('6. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje');
{
    const recurrenceCount = (str, letter) => {
        let count = 0;
        for (let i = 0; i < str.length; i += 1) {
            if (str[i] === letter) {
                count += 1;
            }
        }
        return count;
    };
    const args1 = ['labas', 'a'];
    const args2 = ['labas', 'b'];
    const args3 = ['labas', 'p'];
    console.table({
        [`recurrenceCount(${JSON.stringify(args1)})`]: recurrenceCount(...args1),
        [`recurrenceCount(${JSON.stringify(args2)})`]: recurrenceCount(...args2),
        [`recurrenceCount(${JSON.stringify(args3)})`]: recurrenceCount(...args3),
        empty: undefined,
    });
    const countLetters = (str, searchLetter) => {
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
console.groupCollapsed('7. Sukurkite funkciją, kuri ištrintų pirmą surastą simbolį žodyje ir grąžintų pakeistą žodį');
{
    const removeLetter = (str, letter) => str.replace(letter, '');
    console.log({
        labas: removeLetter('labas', 'b'),
        kempiniukas: removeLetter('kempiniukas', 's'),
        123123: removeLetter('123123', 'a'),
    });
}
console.groupEnd();
console.groupCollapsed('8. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.');
{
    const filterLetters = (str, letters) => letters
        .reduce((prevStr, letter) => prevStr.replaceAll(letter, ''), str);
    const str = filterLetters('Brangakmienio paveikslas', ['a', 'i']);
    console.log(str);
}
console.groupEnd();
console.groupCollapsed('9. Sukurkite funkciją, kuri taiso pastraipos klaidas');
{
    const REGEX_WHITESPACE = /[\s]+/g;
    const REGEX_SEPARATORS = /[.?!]/g;
    const removeMultipleSpaces = (str) => str.replaceAll(REGEX_WHITESPACE, ' ');
    const removeSpacesBeforeCommas = (str) => str.replaceAll(' , ', ',');
    const ensureSpacesAfterCommas = (str) => str.replaceAll(',', (_, index, text) => (text[index + 1] === ' ' ? ',' : ', '));
    const decomposeText = (text) => {
        const captures = [...text.matchAll(REGEX_SEPARATORS)];
        let from = -1;
        const sentencesAndSeparators = captures.reduce((prevSentencesAndSeparators, capture) => {
            const [separator] = capture;
            const index = capture.index;
            const sentence = text.slice(from + 1, index);
            prevSentencesAndSeparators.sentences.push(sentence);
            prevSentencesAndSeparators.separators.push(separator);
            from = index;
            return prevSentencesAndSeparators;
        }, {
            sentences: [],
            separators: [],
        });
        return sentencesAndSeparators;
    };
    const composeText = ({ sentences, separators }) => sentences
        .reduce((text, sentence, index) => `${text + sentence + separators[index]} `, '');
    const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
    const fixText = (text) => {
        let result = text.trim();
        result = removeMultipleSpaces(result);
        result = removeSpacesBeforeCommas(result);
        result = ensureSpacesAfterCommas(result);
        const decomposedText = decomposeText(result);
        const sentences = decomposedText.sentences
            .map((sentence) => sentence.trim())
            .map(capitalize);
        result = composeText({ ...decomposedText, sentences });
        return result;
    };
    const text = '    labas , aš Serbentautas .   Man      patinka vaisiai? Visokie     vaisiai  !    Ypač    bananai       , obuoliai,kriaušės.    ';
    const fixedText = fixText(text);
    console.log(fixedText);
}
console.groupEnd();
const numsOrStrs1 = [4, 6, 46, 45];
const numsOrStrs2 = ['fghhkj', 'fghglkjl', '45634321', '45m'];
const mixed = [4, 'gfhjk6', '46', 45];
console.log({
    numsOrStrs1,
    numsOrStrs2,
    mixed,
});
let a = 0;
for (let index = 0; index < 10 ** 6; index += 1) {
    a += 1;
}
console.log(a);
const str = 'labas';
const reg = /a/g;
const foundElements = [...str.matchAll(reg)];
console.log([...str.matchAll(reg)].length);
//# sourceMappingURL=main.js.map