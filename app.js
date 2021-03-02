const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones

const demPresidents = presidents.filter((president) => president.party === "D");

console.table(demPresidents);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement

const repPresidents = presidents.filter(
  (president) => president.party === "R" && president.terms === 1
);

console.table(repPresidents);

//3) return only the last three presidents

const last3Presidents = presidents.slice(9, 12);

console.table(last3Presidents);

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice

const demWith2Terms = presidents.filter(
  (president) => president.party === "D" && president.terms === 2
);

console.table(demWith2Terms);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

const LBJ = presidents.some(function (president) {
  //const currentPresident = new pres();
  if( president.name === "Lyndon Johnson"  && president.year ===)
});

// :p ^.^ ^-^ ^_^ ʕ•́ᴥ•̀ʔっ ¯\_( ͡❛ ͜ʖ ͡❛)_/¯ (ㆆ_ㆆ) (✿◠‿◠)
// (͠≖ ͜ʖ͠≖) (╥﹏╥) ᕙ(⇀‸↼‶)ᕗ ◔̯◔ ᶘ ◕ᴥ◕ᶅ 【≽ܫ≼】 (>^o^)><(^o^<)
// (>^o^)> uwu :)
