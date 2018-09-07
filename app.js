const fs = require('fs')
const fetch = require('node-fetch')
const patron = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-/]))/gim
const urlName = /\[([^\]]*)\]/gim
const urlArray = []
let dataIterada = ''
let findUrl = ' '
let findName = ''

const readMarkDown = (callBack) => {
  fs.readFile('./Readme.md', 'utf8', (error, data) => {
    if (error) {
      console.log('Tienes un error ...')
    } else {
      callBack(data)
      // console.log(data)
    }
  })
}

readMarkDown(callBack = (data) => {
  // console.log('1.1 = ' + data)
  for (let i = 0; i < data.length; i++) {
    let iteraData = data[i]
    dataIterada += iteraData
  }
  // console.log('1.1 = ' + dataIterada)
  urlFinder()
})
const urlFinder = () => {
  findUrl = dataIterada.match(patron)
  findName = dataIterada.match(urlName)
  // console.log(findName)
  if (findUrl) {
    for (let i = 0; i < findUrl.length; i++) {
      let request = findUrl[i]
      fetch(request).then((response) => {
        // console.log(response)
        let status = response.status
        if (status === 200) {
          console.log('ok')
        } else {
          console.log('Failed')
        }
        const objectUrl = {
          Name: findName[i],
          Url: findUrl[i],
          Status: status
        }
        // console.log(objectUrl)
        urlArray.push(objectUrl)
        console.log(urlArray)
      })
        .catch((error) => {
          console.log(error.message)
        })
    }
  }
}
