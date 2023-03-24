const topics = [
  "好きな映画は？",
  "休日の過ごし方は？",
  "一番美味しかった料理は？",
  "旅行で行きたい場所は？",
  "好きな音楽ジャンルは？",
  "趣味は？",
  "どんな恋愛観を持ってる？",
];

const topicElement = document.getElementById("topic");
const nextButton = document.getElementById("next-button");

function getRandomTopic() {
  const randomIndex = Math.floor(Math.random() * topics.length);
  return topics[randomIndex];
}

function displayTopic() {
  topicElement.textContent = getRandomTopic();
}

nextButton.addEventListener("click", displayTopic);
