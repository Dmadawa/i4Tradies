import { curryN, gte, is } from 'ramda'

import { Config } from 'App/Config'
import SInfo from 'react-native-sensitive-info';
import axios from 'axios'
import { useSelector } from 'react-redux'

const isWithin = curryN(3, (min, max, value) => {
        const isNumber = is(Number)
        return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
      })
      const in200s = isWithin(200, 299)
      userApiClient = axios.create({
        baseURL: Config.API_URL,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        timeout: 3000,
      })

      const getList = async () => {
        try {
          const data = await SInfo.getItem('access_token', {
            sharedPreferencesName: 'mySharedPrefs',
            keychainService: 'myKeychain'
          });
            return userApiClient.get('/consumer/company/all',  { headers: { 'Authorization': `Bearer ${data}` } }).then((response) => {
              if (in200s(response.status)) {
                return response.data.result
              }
              return null
            })
        } catch (ex) {
          console.log('Error', ex.message);
        }
      };

export const companyService = {
    getList,
}