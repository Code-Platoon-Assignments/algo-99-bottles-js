function bottleSong() {
  let idx = 99
  while (idx > 2){
    console.log(`${idx} bottles of beer on the wall, ${idx} bottles of beer.\nTake one down and pass it around, ${idx-1} bottles of beer on the wall.`)
    idx--
  }
  console.log("2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.")
};

bottleSong();
