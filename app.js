const fs = require('fs')
const patron = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g
const urlArray = []
let dataIterada = ''
const getUrl = ''
let findUrl = ' '

const readMarkDown = (callBack) => {
  fs.readFile('./README.md', 'utf8', (err, data) => {
    if (err) {
      console.log('Tienes un error')
    } else {
      callBack(data)
      // console.log('1.1 = ' + data)
    }
  })
}

readMarkDown(callBack = (data) => {
  // console.log('1.1 = ' + data)
  for (let i = 0; i < data.length; i++) {
    let iteraData = data[i]
    dataIterada += iteraData
  }
  //console.log('1.2 = ' + dataIterada)

  const urlFinder = () => {
    findUrl = dataIterada.match(patron)
    // console.log(findUrl)
    urlArray.push(findUrl)
    console.log(urlArray)
    
  }

  urlFinder()
})
