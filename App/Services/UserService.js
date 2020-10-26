import { curryN, gte, is } from 'ramda'

import { Config } from 'App/Config'
import SInfo from 'react-native-sensitive-info';
import axios from 'axios'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})

const in200s = isWithin(200, 500)
userApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

async function storeToken(token) {
  await SInfo.setItem('access_token', token, {
    sharedPreferencesName: 'mySharedPrefs',
    keychainService: 'myKeychain'
});
}

function login(username,password) {
const parameters = {
    client_id: "3",
    client_secret: "wYGlGHN3kZsUgEvfqNUFmiolfLUJBL6NE3yjElpD",
    grant_type: "password",
    username: username,
    password: password
}
  return userApiClient.post('/auth', parameters).then((response) => {
    console.log(response)
    if (in200s(response.status)) {
      response && SInfo.setItem('access_token', response.data.result.access_token, {
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain'
      });
      return response
    }

    return null
  })
}

export const userService = {
  login,
}
