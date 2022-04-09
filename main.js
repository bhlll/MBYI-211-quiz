// input should be an array of answers' number (A->0, B->1, C->2, D->3), e.g. [0,3,...]
const calcuateResult = (input) => {
  if (input.length !== 8) {
    console.error(
      "请填写所有问题！"
    );
    return;
  }

  const results = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
  }
  input.forEach((value, index)=> {
    const questionScore = scores[index].score[value];
    results[questionScore.result] += questionScore.point;
  });

  console.log(maxResult(results));
}

const maxResult = (dict) => {
  // convert dict to array
  let items = Object.keys(dict).map((key) => {
    return [key, dict[key]];
  });

  // Sort the array based on the second element
  items.sort((first, second) => {
    return second[1] - first[1];
  });

  console.log(items);
  return items[0];
}
