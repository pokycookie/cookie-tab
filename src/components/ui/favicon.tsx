import axios from 'axios'
import * as cheerio from 'cheerio'
import { useEffect, useState } from 'react'

interface IProps {
  url: string
}

export default function Favicon(props: IProps) {
  const [imgURL, setImgURL] = useState<string | null>(null)

  //   async function fetch(url: string) {
  //     try {
  //       const response = await axios.get(url)
  //       const html = response.data
  //       const $ = cheerio.load(html)
  //       const faviconLink = $('link[rel="icon"]').attr('href')
  //       setImgURL(faviconLink ?? null)
  //     } catch (error) {
  //       console.error('Error fetching favicon URL:', error)
  //       setImgURL(null)
  //     }
  //   }

  function fetch(url: string) {
    console.log('fetch start')
    chrome.runtime?.sendMessage({ key: 'favicon', url }, (res) => {
      console.log(res)
    })
  }

  useEffect(() => {
    fetch(props.url)
  }, [props.url])

  return <>{imgURL ? <img src={''} alt="favicon" /> : null}</>
}
