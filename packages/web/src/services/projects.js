import axios from "axios";


const baseUrl = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=`

const getProjects = async () => {
  const query = encodeURIComponent('*[_type == "projects"]')
  const response = await axios.get(`${baseUrl}${query}`)
  console.log(response.data.result[0])
  return response.data.result
}

export default {
  getProjects
}