let urlArray = []
let patron = /'(http|https):\/\/(\w+:{0.1}\*w)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/
let findUrl = ' '
let dataIterada = ''
let getUrl = ''

const fs = require('fs')
const readReadme = (callBack) => {
  fs.readFile('./README.md', 'utf8', (err, data) => {
    if (err) {
      console.log('Tienes un error')
    } else {
      callBack(data)
    }
  })
}
readReadme(callBack = (data) => {
     // console.log(data)
     for (let i = 0; i < data.length; i++) {
      let iteraData = data[i]
      dataIterada += iteraData
      console.log(dataIterada)
  }
})