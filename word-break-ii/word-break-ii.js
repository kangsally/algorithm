/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const result = [];
  let words = [];
  const isInDic = (s) => {
    return wordDict.findIndex((word) => word === s) !== -1;
  };
  const findWord = (startIdx) => {
    for (let i = startIdx; i < s.length; i++) {
      const str = s.slice(startIdx, i + 1);
      if (isInDic(str)) {
        words.push(str);
        findWord(i + 1);
        words.pop();
      }
    }
    if (startIdx === s.length) {
      result.push(words.slice());
    }
  };
  findWord(0);
  return result.map((value) => value.join(' '));
};
