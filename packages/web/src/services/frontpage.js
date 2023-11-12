import axios from 'axios'

const baseUrl = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=`

const getFrontpage = async () => {
  const query = encodeURIComponent(`*[_type == "frontpage"] {
    items[] -> {
      _id,
      content
    }
  }`)
  const response = await axios.get(`${baseUrl}${query}`)
  console.log(response.data.result)
  return response.data.result[0].items
}

export default {
  getFrontpage
}
