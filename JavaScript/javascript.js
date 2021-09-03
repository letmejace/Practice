"use stric";

const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];

const participant1 = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion1 = ["josipa", "filipa", "marina", "nikola"];

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i in participant) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

console.log(solution(participant, completion));
console.log(solution(participant1, completion1));
