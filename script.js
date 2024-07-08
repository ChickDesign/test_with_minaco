/* 絵文字の効果に関するデータ */
const emojiEffects = [
  {
    /* カテゴリー名 */
    category: "感情と雰囲気の調整",
    /* カテゴリーの色 */
    // 背景色を赤系にする (赤色の濃淡は200)
    color: "bg-red-200",
    /* 絵文字とその効果の配列 */
    emojis: [
      { emoji: "😀", effect: "テキストが明るく楽観的になる" },
      { emoji: "😂", effect: "ユーモアや軽さが増す" },
      { emoji: "😍", effect: "愛情や憧れの要素が強調される" },
      { emoji: "😢", effect: "悲しみや共感の要素が増える" },
      { emoji: "😠", effect: "批判的または対立的な視点が強まる" },
      { emoji: "😎", effect: "自信に満ちた表現が増加する" },
    ]
  },
  {
    category: "行動と活動の促進",
    // 背景色を青系にする (青色の濃淡は200)
    color: "bg-blue-200",
    emojis: [
      { emoji: "🏃", effect: "動的な描写が増える" },
      { emoji: "💪", effect: "努力や決意に関する内容が増加する" },
      { emoji: "🤝", effect: "協力や合意に関する要素が強調される" },
      { emoji: "🧗", effect: "困難や挑戦に関する描写が詳細になる" },
      { emoji: "🏆", effect: "成功や達成に焦点が当たる" },
      { emoji: "🎨", effect: "創造的なプロセスに関する詳細が増加する" },
    ]
  },
  {
    category: "環境と場面の設定",
    // 背景色を緑系にする (緑色の濃淡は200)
    color: "bg-green-200",
    emojis: [
      { emoji: "🏞️", effect: "自然環境の描写が増える" },
      { emoji: "🏙️", effect: "都市や現代的な要素が強調される" },
      { emoji: "🏠", effect: "家庭や個人的空間の描写が細かくなる" },
      { emoji: "🏫", effect: "教育や学習に関する内容が中心となる" },
      { emoji: "🏥", effect: "医療や健康に関する話題が増える" },
      { emoji: "🏢", effect: "ビジネスや組織に関する文脈が強まる" },
    ]
  },
  {
    category: "概念と思考の誘導",
    // 背景色を紫系にする (紫色の濃淡は200)
    color: "bg-purple-200",
    emojis: [
      { emoji: "💡", effect: "革新的なアイデアに焦点が当たる" },
      { emoji: "🔍", effect: "詳細な分析や調査に関する内容が増える" },
      { emoji: "🎭", effect: "感情表現や演技の描写が豊かになる" },
      { emoji: "⚖️", effect: "公平性や倫理的考察に重点が置かれる" },
      { emoji: "🔮", effect: "未来予測や仮説に関する内容が増える" },
      { emoji: "🧩", effect: "論理的思考のプロセスが描写される" },
    ]
  },
  {
    category: "コミュニケーションの形式",
    // 背景色を黄系にする (黄色の濃淡は200)
    color: "bg-yellow-200",
    emojis: [
      { emoji: "💬", effect: "対話形式の内容が増える" },
      { emoji: "📢", effect: "宣言や重要な発表の形式が強調される" },
      { emoji: "🤫", effect: "秘密や機密情報に関する要素が増える" },
      { emoji: "👂", effect: "傾聴や情報収集に焦点が当たる" },
      { emoji: "✍️", effect: "文章作成や記録に関する描写が増える" },
      { emoji: "🗣️", effect: "スピーチや公の場での発言形式が強調される" },
    ]
  },
  {
    category: "時間と進行の表現",
    // 背景色をピンク系にする (ピンク色の濃淡は200)
    color: "bg-pink-200",
    emojis: [
      { emoji: "⏳", effect: "時間経過や待機に関する描写が増える" },
      { emoji: "🚀", effect: "速さや進歩に焦点が当たる" },
      { emoji: "🌱", effect: "成長や発展過程の説明が増える" },
      { emoji: "🔄", effect: "繰り返しやサイクルに関する内容が増える" },
      { emoji: "⏰", effect: "期限や時間の重要性が強調される" },
      { emoji: "🍁", effect: "季節変化や時の流れの描写が豊かになる" },
    ]
  },
  {
    category: "関係性と相互作用",
    // 背景色を藍色系にする (藍色の濃淡は200)
    color: "bg-indigo-200",
    emojis: [
      { emoji: "❤️", effect: "愛情や感情的つながりの描写が増える" },
      { emoji: "🤝", effect: "協力や同意に関する内容が増える" },
      { emoji: "⚔️", effect: "競争や対立に関する描写が増える" },
      { emoji: "🧲", effect: "魅力や引力に関する表現が増える" },
      { emoji: "🌍", effect: "グローバルな視点の内容が増える" },
      { emoji: "🔗", effect: "連携や結びつきの描写が増える" },
    ]
  },
  {
    category: "象徴と比喩の使用",
    // 背景色をオレンジ系にする (オレンジ色の濃淡は200)
    color: "bg-orange-200",
    emojis: [
      { emoji: "🦁", effect: "勇気や力強さを象徴する表現が増える" },
      { emoji: "🌳", effect: "成長や安定を比喩的に表現する" },
      { emoji: "🌊", effect: "感情や変化の波を表す比喩が増える" },
      { emoji: "🔥", effect: "情熱や破壊力を象徴する表現が増える" },
      { emoji: "🧭", effect: "方向性や指針を示す比喩が増える" },
      { emoji: "⚓", effect: "安定や信頼を象徴する表現が増える" },
    ]
  },
];

/* 絵文字効果のテーブルを作成する関数 */
function createEmojiEffectTable() {
  /* 絵文字効果のテーブルを表示する要素を取得 */
  const container = document.getElementById('emojiEffectTable');

  /* グリッドコンテナを作成 */
  // グリッドレイアウトを設定 (4列、間隔4、幅100%)
  const gridContainer = document.createElement('div');
  gridContainer.className = 'grid grid-cols-4 gap-4 w-full';

  /* 各カテゴリーのデータに対して処理を行う */
  emojiEffects.forEach(category => {
    /* カテゴリーの要素を作成 */
    // 角丸、影、パディングを設定
    const categoryDiv = document.createElement('div');
    categoryDiv.className = `${category.color} rounded-xl shadow-lg p-4`;

    /* カテゴリーのタイトルを作成 */
    // フォントサイズ、太字、マージン、テキストカラーを設定
    const categoryTitle = document.createElement('h2');
    categoryTitle.className = 'text-lg font-semibold mb-2 text-gray-800';
    categoryTitle.textContent = category.category;
    /* カテゴリーの要素にタイトルを追加 */
    categoryDiv.appendChild(categoryTitle);

    /* 絵文字のグリッドを作成 */
    // グリッドレイアウトを設定 (3列、間隔2)
    const emojiGrid = document.createElement('div');
    emojiGrid.className = 'grid grid-cols-3 gap-2';

    /* 各絵文字のデータに対して処理を行う */
    category.emojis.forEach(item => {
      /* 絵文字アイテムの要素を作成 */
      // 背景色、角丸、パディング、影、トランジション、ホバー時の影、フレックスボックスを設定
      const emojiItem = document.createElement('div');
      emojiItem.className = 'bg-white rounded-lg p-2 shadow transition duration-300 ease-in-out hover:shadow-md flex flex-col items-center justify-center emoji-item';

      /* 絵文字の要素を作成 */
      // フォントサイズ、マージンを設定
      const emojiSpan = document.createElement('span');
      emojiSpan.className = 'text-xl mb-1';
      /* 絵文字を画像として扱う設定 */
      emojiSpan.setAttribute('role', 'img');
      /* 絵文字の代替テキストを設定 */
      emojiSpan.setAttribute('aria-label', item.emoji);
      /* 絵文字のテキストを設定 */
      emojiSpan.textContent = item.emoji;
      /* 絵文字アイテムの要素に絵文字を追加 */
      emojiItem.appendChild(emojiSpan);

      /* 絵文字の効果の説明文を作成 */
      // フォントサイズ、テキストカラー、テキスト配置を設定
      const effectP = document.createElement('p');
      effectP.className = 'text-xs text-gray-700 text-center';
      effectP.textContent = item.effect;
      /* 絵文字アイテムの要素に説明文を追加 */
      emojiItem.appendChild(effectP);

      /* 絵文字のグリッドに絵文字アイテムを追加 */
      emojiGrid.appendChild(emojiItem);
    });

    /* カテゴリーの要素に絵文字のグリッドを追加 */
    categoryDiv.appendChild(emojiGrid);
    /* グリッドコンテナにカテゴリーの要素を追加 */
    gridContainer.appendChild(categoryDiv);
  });

  /* 絵文字効果のテーブルの要素にグリッドコンテナを追加 */
  container.appendChild(gridContainer);
}

/* DOMContentLoadedイベントが発生したら絵文字効果のテーブルを作成 */
document.addEventListener('DOMContentLoaded', createEmojiEffectTable);
