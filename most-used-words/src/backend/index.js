const { ipcMain } = require("electron")
const pathToRows = require("./pathsToRows")
const prepareData = require("./prepareData")
const groupedWords = require('./grupedWords')

ipcMain.on("process-subtitles", (event, paths) => {
  pathToRows(paths)
    .then(rows => prepareData(rows))
    .then(prepareData => groupedWords(prepareData))
    .then(groupedWords => {
      event.reply("process-subtitles", groupedWords)
    })
})