import './styles'

import {FC, useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import CollapseCard from 'src/components/CollapaseCard'
import {Trans, t} from '@lingui/macro'
import Card from 'src/components/Card'

import loadable from '@loadable/component'
import {RiskAction, useRiskModal} from '../shared/RiskModal'

const Index = loadable(() => import('./pages/Index'))
const AddLiquidity = loadable(() => import('./pages/AddLiquidity'))
const RemoveLiquidity = loadable(() => import('./pages/RemoveLiquidity'))

const Pool: FC = () => {
  const {checkRisk} = useRiskModal()
  useEffect(() => {
    ;(async () => {
      try {
        await checkRisk(RiskAction.Pool)
      } catch (_) {
        // comment for eslint
      }
    })()
  }, [])

  const classPrefix = 'cofi-page-pool'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <section className={`${classPrefix}-notice`}>
        <Card>
          <section>
            <p>
              <Trans>
                CoFiX 3.0 newly upgraded the fund pool contract. After the upgrade, market makers will no longer receive
                mining rewards.
                The CoFiX 2.0 fund pool needs to be manually migrated to CoFiX 3.0 version. Please withdraw funds from
                the old version of the fund pool as soon as possible.
                Jump to the old version
              </Trans>

              <a href="https://v2.cofix.tech" className="link" target="_blank" rel="noreferrer">
                <Trans>Jump to v2.1</Trans>
              </a>
            </p>
          </section>
        </Card>
      </section>

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
