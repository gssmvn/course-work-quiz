const correctAnswers = {
  q1: 'a',
  q2: 'a',
  q3: 'b',
  q4: 'a',
  q5: 'a',
  q6: 'c',
  q7: 'c',
  q8: 'a',
  q9: 'a',
  q10: 'c',
};

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let score = 0;
  const formData = new FormData(form);

  for (let [question, answer] of formData.entries()) {
    if (answer === correctAnswers[question]) {
      score += 1;
    }
    console.log(score)
  }

  const totalScore = document.createElement('p');
  totalScore.textContent = `Your score is ${score}/${Object.keys(correctAnswers).length}`;
  form.appendChild(totalScore);

});


const problems = document.querySelectorAll('code')
const radioButton = document.querySelectorAll("form label input[type='radio']:checked");
const label = document.querySelectorAll("label")
for (var i = 0; i < problems.length; i++) {
  var str = problems[i].textContent;
  var result = 0;
  var newStr = str.substring(0, str.length - 1).split(' ');
  console.log(newStr)


  if (newStr.includes("+")) {
    result = +newStr[0] + (+newStr[2])
    for (let j = 4 * i; j < 4 * i + 4; j++) {
      if (label[j].textContent.includes(result.toString())) {
        console.log(result)

        correctAnswers[`q${i + 1}`] = `${label[j].textContent.substring(0, 1)}`
      }
    }

  }
  else if (newStr.includes("-")) {
    result = +newStr[0] - (+newStr[2])
    for (let j = 4 * i; j < 4 * i + 4; j++) {
      if (label[j].textContent.includes(result.toString())) {
        correctAnswers[`q${i + 1}`] = `${label[j].textContent.substring(0, 1)}`
      }
    }
  }
  else if (newStr.includes("*")) {
    result = +newStr[0] * (+newStr[2])
    for (let j = 4 * i; j < 4 * i + 4; j++) {
      console.log(label[j])
      if (label[j].textContent.includes(result.toString())) {
        console.log(result)
        correctAnswers[`q${i + 1}`] = `${label[j].textContent.substring(0, 1)}`
      }
    }
  }
  else {
    result = +newStr[0] / (+newStr[2])
    for (let j = 4 * i; j < 4 * i + 4; j++) {
      if (label[j].textContent.includes(result.toString())) {
        correctAnswers[`q${i + 1}`] = `${label[j].textContent.substring(0, 1)}`
      }
    }
  }

}

