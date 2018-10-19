const Solutions = require('./Solutions');
let solutions = new Solutions();
let data1 = [
  {words: ['bacdc', 'dcbac','dcbac','dcbad'],result:4},
  {words: ['bacdc', 'dcbac'],result:0},
  {words: ['bacdc', 'dcbad'],result:2},
  {words: ['c', 't'],result:2},
  {words: ['cccccc', ''],result:6},
  {words: ['cc', 't'],result:3}

];
data1.forEach((values)=>{
  test(`${values.words} to equal ${values.result}`, () => {
    let result = eval(`solutions.f1('${values.words.join("','")}')`);
    expect(result).toBe(values.result);
  })
});

let data2 = [
  {input1: ['aba', 'baba', 'aba', 'xzxb'],input2:['aba', 'xzxb', 'ab'],output:[2,1,0]},
  {input1: ['aba', 'baba', 'aba', 'xzxb'],input2:['1'],output:[0]},
  {input1: ['aba',1, 'baba', 'aba', 'u','xzxb'],input2:['aba', 'xzxb', 'ab'],output:[2,1,0]}
];

data2.forEach((values)=>{
  test(`${values.input1} and ${values.input2} to equal ${values.output}`, () => {
    expect(solutions.f2(values.input1,values.input2)).toEqual(values.output);
  });
});

let data3 = [
  {input1: '',output:0},
  {input1: 'xtech.guru',output:2},
  {input1: '@xtech.guru',output:0},
  {input1: 'xtech.guru@',output:0},
  {input1: 'ñxtech.guru',output:0},
  {input1: 'you.com',output:2},
  {input1: 'you',output:1}
];

data3.forEach((values)=>{
  test(`${values.input1}  to equal ${values.output}`, () => {
    expect(solutions.f3(values.input1)).toBe(values.output);
  });
});
