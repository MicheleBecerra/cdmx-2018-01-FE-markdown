const fs = require('fs')
const fetch = require('node-fetch')
const path = require('path')
const patron = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-/]))/gim
const urlName = /\[([^\]]*)\]/gim
const urlArray = []
let dataIterada = ''
let findUrl = ' '
// const urlFinder = ''
// const readMarkDown = ''
let findName = ''
let data = '' 

function readMarkDown (filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {
        return reject(err)
      }
      // console.log(data)
      resolve(data)
    })
  })
  
}
function urlFinder (url, data) {

  return new Promise(function (resolve, reject) {
    fs.writeFile(url, data, function (err) {
      console.log(data)
      if (err) {
        return reject(err)
      } else {
        const mdDocument = data
        //console.log(mdDocument)
        console.log(data)
         findUrl = mdDocument.match(patron)
         findName = mdDocument.match(urlName)
        

        // console.log(findUrl)
        // console.log(findName)
      }

      // console.log(findUrl)
      // console.log(findName)
      resolve(url)
    })
  })
}

readMarkDown('./Readme.md')
  .then(data => urlFinder('./cantidad.txt', findName, findUrl))
  .catch(err => console.log('Hubo un error' + err))

// const readMarkDown = (callBack) => {
//   // const myFile = absPath('./Readme.md')

//   fs.readFile('./Readme.md', 'utf8', (error, data) => {
//     if (error) {
//       console.log('Tienes un error ...')
//     } else {
//       callBack(data)
//       console.log(data)
//     }
//   })
// }
// markDownReader(
//   callBack = (data) => {
// readMarkDown(callBack = (data) => {
//   // console.log('1.1 = ' + data)
//   for (let i = 0; i < data.length; i++) {
//     let iteraData = data[i]
//     dataIterada += iteraData
//   }
//   // console.log('1.1 = ' + dataIterada)
//   urlFinder()
// })
// const urlFinder = () => {
//   findUrl = dataIterada.match(patron)
//   findName = dataIterada.match(urlName)
//   // console.log(findName)
//   if (findUrl) {
//     for (let i = 0; i < findUrl.length; i++) {
//       let request = findUrl[i]
//       fetch(request).then((response) => {
//         // console.log(response)
//         let status = response.status
//         if (status === 200) {
//           // console.log('ok')
//         } else {
//           // console.log('Failed')
//         }
//         const objectUrl = {
//           Name: findName[i],
//           Url: findUrl[i],
//           Status: status,
//           statusText: response.statusText
//         }
//         // console.log(objectUrl)
//         urlArray.push(objectUrl)
//         console.log(urlArray)
//       })
//         .catch((error) => {
//           console.log(error.message)
//         })
//     }
//   }
// }
