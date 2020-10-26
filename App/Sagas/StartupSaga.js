import { NavigationActions } from 'react-navigation'
import NavigationService from 'App/Services/NavigationService'

export function* startup() {
  NavigationService.navigateAndReset('MainScreen')
}
