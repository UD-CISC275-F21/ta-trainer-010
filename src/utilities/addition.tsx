/*
const [first, second] = [1, 2]
console.log(first)*/

export function adder(first: number, second: number): number {
  return first + second;
}

adder(5, 7)

/*
function adderObj({first, second}: {first: number, second: number}): number {
  return first + second;
}

function adderData(data: {first: number, second: number}): number {
  return data.first + data.second;
}

adderObj({first: 5, second: 7})
adderData({first: 5, second: 7})
*/