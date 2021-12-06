import './styles/global.scss'
import 'src/components/Icon'

import BigNumber from 'bignumber.js'
import React from 'react'
import ReactDOM from 'react-dom'
import Provider from 'src/provider'
import I18nProvider from 'src/i18n'

import App from './pages/App'
import { RiskModalProvider } from './pages/shared/RiskModal'

BigNumber.config({ ROUNDING_MODE: BigNumber.ROUND_DOWN })
export const rootElement = document.getElementById('root')
const app = (
  <React.StrictMode>
    <I18nProvider>
      <Provider>
        <RiskModalProvider>
          <App />
        </RiskModalProvider>
      </Provider>
    </I18nProvider>
  </React.StrictMode>
)

if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrate(app, rootElement)
} else {
  ReactDOM.render(app, rootElement)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* eslint-disable no-alert, no-console */
if (process.env.REACT_APP_NODE_ENV === 'development') {
  import('./reportWebVitals').then((reportWebVitals) => {
    reportWebVitals.default(console.log)
  })
}
/* eslint-enable */
