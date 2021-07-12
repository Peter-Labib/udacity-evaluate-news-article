import { isUri } from 'valid-url'
import axios from 'axios'

function handleSubmit(event) {
  event.preventDefault()
  const URL = document.querySelector('#article-url').value

  if (isUri(URL)) {
    postArticleURL({ url: 'http://localhost:8081/api', articleUrl: URL }).then(res=>{
      document.getElementById('agreement').innerText = `Agreement: ${res.agreement}`
      document.getElementById('confidence').innerText = `Confidence: ${res.confidence}`
      document.getElementById('irony').innerText = `Irony: ${res.irony}`
      document.getElementById('score_tag').innerText = `Score tag: ${res.score_tag}`
      document.getElementById('subjectivity').innerText = `Subjectivity: ${res.subjectivity}`
    })
  } else {
    alert('please enter a valid URL')
  }
}

const postArticleURL = async ({ url, articleUrl }) => {
  const res = await axios.post(url, { url: articleUrl })
  try {
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export { handleSubmit }
