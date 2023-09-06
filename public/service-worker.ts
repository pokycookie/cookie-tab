// import axios from 'axios'
// import * as cheerio from 'cheerio'

const axios = require('axios')
const cheerio = require('cheerio')

chrome.runtime.onMessage.addListener(async (message, sender, res) => {
  switch (message.key) {
    case 'favicon':
      //   res(await getURL(message.url))
      res('plz')
      break
    default:
      break
  }
})

async function getURL(url: string) {
  try {
    const response = await axios.get(url)
    const html = response.data
    const $ = cheerio.load(html)
    const faviconLink = $('link[rel="icon"]').attr('href')
    return faviconLink ?? null
  } catch (error) {
    console.error('Error fetching favicon URL:', error)
    return null
  }
}
