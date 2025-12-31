import axios from 'axios'

const API_URL = 'https://dev.apinetbo.bekindnetwork.com/api'

export const loginRequest = async (data) => {
  const response = await axios.post(
    `${API_URL}/Authentication/Login`,
    data
  )

  return response.data
}
