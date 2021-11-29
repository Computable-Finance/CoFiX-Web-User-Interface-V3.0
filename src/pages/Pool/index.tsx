import './styles'

import {FC} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import CollapseCard from 'src/components/CollapaseCard'
import {Trans, t} from '@lingui/macro'

import loadable from '@loadable/component'

const Index = loadable(() => import('./pages/Index'))
const AddLiquidity = loadable(() => import('./pages/AddLiquidity'))
const RemoveLiquidity = loadable(() => import('./pages/RemoveLiquidity'))

const Pool: FC = () => {
  const classPrefix = 'cofi-page-pool'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <Switch>
        <Route path="/pool" exact>
          <Index/>
        </Route>

        <Route path="/pool/add-liquidity/:token0/:token1?" exact>
          <AddLiquidity/>
        </Route>

        <Route path="/pool/remove-liquidity/:token0/:token1?" exact>
          <RemoveLiquidity/>
        </Route>

        <Redirect to="/pool"/>
      </Switch>

      <section>
        <CollapseCard title={t`risk warning`}>
          <section>
            <p>
              <Trans>
                You add assets (ETH, USDT, etc.) to the fund pool, and you only get commission income from making the
                market, and you no longer get mining rewards. Market making has certain risks that will cause
                impermanent losses. Please carefully understand the market making rules and the risks before providing
                liquidity.
              </Trans>
            </p>
          </section>

          <section>
            <p>
              <a
                href="https://github.com/Computable-Finance/Doc#4-market-maker-mechanism"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <Trans>Read More</Trans>
              </a>
            </p>
          </section>
        </CollapseCard>
      </section>
    </div>
  )
}

export default Pool
