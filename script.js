function QuizStart() {
  var score = 0;
  var name = prompt("What is your name?");
  alert("Hi " + name);
  alert(
    "Today we'll be doing a quiz about food! To answer the questions type in lower case without any spaces and press enter after typing out the letter you think is the correct answer. Let's start!"
  );

  var ans1 = prompt(
    "what country does parmasean cheese come from? (a) Italy    (b) Greece    (c) Netherlands    (d) Brazil        Answer:"
  );

  if ("a" == ans1) {
    score += 1;
    alert("Correct! Your score is: " + score);
  } else {
    alert("Incorrect! The correct anser was a");
    alert("Your current sore is: " + score);
  }

  var ans2 = prompt(
    "What temprature should chicken be cooked to?  a) 22°C   b) 39°C    c) -42°C    d) 75°C     Answer:"
  );
  if ("d" == ans2) {
    score += 1;
    alert("Correct! Your score is: " + score);
  } else {
    alert("Incorrect! The correct anser was d");
    alert("Your current sore is: " + score);
  }
  var ans3 = prompt(
    "Which of these countries is the biggest consumer of icecream?   a) Australia   b) New Zealand    c) China    d) United States     Answer:"
  );
  if ("b" == ans3) {
    score += 1;
    alert("Correct! Your score is: " + score);
  } else {
    alert("Incorrect! The correct anser was b");
    alert("Your current sore is: " + score);
  }

  var ans4 = prompt(
    "How many cookies does the average North American eat in a lifetime?   a) 2000 cookies   b) 19000 cookies    c) 20000 cookies    d) 5000 cookies     Answer:"
  );
  if ("b" == ans4) {
    score += 1;
    alert("Correct! Your score is: " + score);
  } else {
    alert("Incorrect! The correct anser was b");
    alert("Your current sore is: " + score);
  }

  var ans5 = prompt(
    "Does pineapple belong on pizza?   a) Yes   b) Only cats know    c) no    d) Even cats dont know     Answer:"
  );
  if ("c" == ans5) {
    score += 1;
    alert("Correct! Your score is: " + score);
    alert("Thank you for doing the quiz! your final score was: " + score);
  } else {
    alert("Incorrect! The correct anser was b");
    alert("Your current sore is: " + score);
    alert("Thank you for doing the quiz! your final score was: " + score);
  }
}
