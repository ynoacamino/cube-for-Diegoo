/* eslint-disable no-plusplus */
function Scramble() {
  const random = (a) => Math.floor(Math.random() * a);

  const nums = [
    ['R', "R'", '2R'],
    ['L', "L'", '2L'],
    ['D', "D'", '2D'],
    ['U', "U'", '2U'],
    ['F', "F'", '2F'],
    ['B', "B'", '2B'],
  ];

  const scramble = [];
  let before = 5;
  for (let i = 0; i < 20; i++) {
    const newRandom = random(5);
    const preview = nums[before];
    nums.splice(before, 1);
    scramble.push(nums[newRandom][random(3)]);
    nums.push(preview);
    before = newRandom;
  }

  return scramble.join(' ');
}

export default Scramble;
