const numbers: number[] = [1, 2, 3, 4, 5, 6];

// const doubleNumbers = numbers.map(x => {
//  return x * 2;
// });
// pvz: const adsfsg = () => /* return */ x *2;  //eslint sako, kad kai aprašant lambda išraiška aprašoma tik viena komanda, return yra numanomas ir tos vienos komandoos rezultatas automatiškai grąžinamas, dėl to galima susitrumpinti užrašymą

const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers);