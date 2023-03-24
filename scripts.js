const topics = [
  "好きな映画は？",
  "休日の過ごし方は？",
  "一番美味しかった料理は？",
  "旅行で行きたい場所は？",
  "好きな音楽ジャンルは？",
  "趣味は？",
  "どんな恋愛観を持っていますか？",
  "理想のデートは？",
  "これまでの恋愛で最高の瞬間は？",
  "恋愛で大切にしていることは？",
  "お互いの理想の休日は？",
  "最初に惹かれた瞬間は？",
  "お互いの趣味や特技は？",
  "将来の夢や目標は？",
  "お互いの家族構成は？",
  "お気に入りの映画や音楽は？",
  "これまでの旅行経験は？",
  "お互いの恋愛観は？",
  "初デートで行きたい場所は？",
  "お互いの好きな料理や食べ物は？",
  "好きなタイプは？",
  "最近の悩みは？",
  "一番好きな場所は？",
  "理想のデートスポットは？",
  "好きな映画やドラマは？",
  "好きな食べ物は？",
  "過去の恋愛経験は？",
  "最近見た素敵な風景は？",
  "好きな音楽ジャンルは？",
  "今後の目標は何ですか？",
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
