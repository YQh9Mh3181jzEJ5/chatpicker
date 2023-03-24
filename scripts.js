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
  "お互いの理想の休日について話す",
  "最初に惹かれた瞬間について語る",
  "お互いの趣味や特技を共有する",
  "将来の夢や目標について話す",
  "お互いの家族構成を説明する",
  "お気に入りの映画や音楽について語る",
  "これまでの旅行や経験について話す",
  "お互いの恋愛観を共有する",
  "初デートで行きたい場所を提案する",
  "お互いの好きな料理や食べ物を話す",
  "好きなタイプはどんな人ですか？",
  "最近の悩みは何ですか？",
  "一番好きな場所はどこですか？",
  "理想のデートスポットはありますか？",
  "好きな映画やドラマはありますか？",
  "好きな食べ物は何ですか？",
  "過去の恋愛経験はありますか？",
  "最近見た素敵な風景は何ですか？",
  "好きな音楽ジャンルは何ですか？",
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