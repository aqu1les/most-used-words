const { ipcMain } = require('electron');

const pathsToRows = require('./pathsToRows');
const prepareData = require('./prepareData');
const groupWords = require('./groupWords');

ipcMain.on('process-subtitles', (event, paths) => {
    pathsToRows(paths)
        .then(prepareData)
        .then(groupWords)
        .then((groupedWords) => event.reply('process-subtitles', groupedWords))
        .catch((e) => console.log(e));
});
