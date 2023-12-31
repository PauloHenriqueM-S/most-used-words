module.exports = words => {
  return new Promise((resolve, reject) => {
    try {
      const grupedWords = words.reduce((obj, word) => {
        if (obj[word]) {
          obj[word] = obj[word] + 1
        } else {
          obj[word] = 1
        }
        return obj
      }, {})
      const grupedWordsArray = Object
        .keys(grupedWords)
        .map(key => ({ word: key, amount: grupedWords[key] }))
        .sort((w1, w2) => w2.amount - w1.amount)
      resolve(grupedWordsArray)
    } catch (e) {
      reject(e)
    }
  })
}