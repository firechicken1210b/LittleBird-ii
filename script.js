const contentEl = document.getElementById('content');
const btnEl = document.getElementById('btn');

const contentList = [
  {
    title: '🕊 小鳥的故事',
    text: `
    很久很久以前，
    有一隻可愛的小鳥，
    小鳥在森林的盡頭找到了一塊石頭，
    並背負著它想要把它帶到遠方，

    這塊石頭賦予了小鳥力量，
    但在旅程中，小鳥失去了石頭。

    回憶中的石頭不會說話，
    小鳥無法理解石頭想要傳達的訊息。
    每當它嘗試回憶石頭時，
    都覺得有些東西失落了。`
  },
  {
    title: '🕊 小鳥的故事', text: `
    在漫長的旅途中，
    每天的小鳥都有著不同的背景和目的，
    回憶越來越模糊不清。

    小鳥開始想著，
    如果它將石頭丟棄，
    它是否能夠輕鬆地飛行，
    如果它決定把石頭放下。

    但此時小鳥已經忘記了石頭的樣子，
    如果它把石頭放在心臟的核心，
    也許它就不會失去石頭，
    
    但現在一切已經過去了。
    小鳥漫無目的地飛行，
    未來將發生的都被小鳥視為一種病。` 
  },
  {
    title: '🕊 小鳥的故事', text: `
    過了很長一段時間，
    小鳥發現了一個小湖。
    湖中的水清澈見底，
    周圍的景色也十分美麗。

    它飛到湖邊，
    仔細觀察著湖中的倒影，
    漸漸地，
    它感到湖中的倒影是自己的一部分，
    
    小鳥感到很開心，
    它終於找到了，
    並決定前往那裡。
    
    它的方向和目的就在湖中的倒影。` 
  },
  {
    title: '🕊 小鳥的故事', text: `
    沿著湖岸線飛行，
    它發現一塊石頭，
    這塊石頭很像記憶中的它，
    但與之前的石頭不同，
    小鳥能夠理解石頭的感受和想法。

    小鳥飛過森林，一路背負著石頭。
    
    它能聽到石頭對它說：
    我們可以去幻想我們錯過的選擇，
    那些可能會發生的事，
    那些永遠不會知道的結局通往了哪裡，
    並深陷這座森林。` 
  },
  {
    title: '🕊 小鳥的故事', text: `
    在這座森林中，
    河流沒有放下，
    河流沒有妥協，
    河流沒有錯過，
    
    就像河流自然地流動一樣，
    讓它自然地發生，
    回憶在這裡保持清晰、明亮。` 
  },
  {
    title: '🕊 小鳥的故事', text: `
    小鳥的大腦將後來的回憶，
    視為當時事件的重現，
    存放在同樣的地方。
    所以小鳥越是努力回憶，
    回憶越是模糊不清。
    
    小鳥永遠不會知道那些結局通往了哪裡，
    直到時間的盡頭，
    回憶是沒有終點的旅程。` 
  },
];

let currentIndex = 0;

function renderContent() {
  const currentContent = contentList[currentIndex];
  document.getElementById('title').textContent = currentContent.title;
  document.getElementById('currentIndex-container').textContent = `${currentIndex + 1}`;

  // Fade out the current content before fading in the new content
  contentEl.style.opacity = 0;

  // Wait for the fade out animation to finish before updating the text content
  setTimeout(() => {
    document.getElementById('text').textContent = currentContent.text;
    
    // Fade in the new content
    contentEl.style.opacity = 1;
  }, 500);
}



renderContent();

btnEl.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % contentList.length;
  renderContent();
});
