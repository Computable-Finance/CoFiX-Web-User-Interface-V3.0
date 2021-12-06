import './styles'

import {t, Trans} from '@lingui/macro'
import {FC, useState} from 'react'
import Skeleton from 'react-loading-skeleton'
import {Link, useHistory} from 'react-router-dom'
import Button from 'src/components/Button'
import Card from 'src/components/Card'
import {Asset, BarGraphOutline, DollarOutline, Empty, Percent, PercentageSignOutline} from 'src/components/Icon'
import usePoolInfo from 'src/hooks/usePoolInfo'
import useToken from 'src/hooks/useToken'
import {PoolInfo} from 'src/api/CoFiXPair'
import useWeb3 from 'src/hooks/useWeb3'
import PoolSelector from 'src/pages/shared/PoolSelector'
import {RiskAction, useRiskModal} from "../../../shared/RiskModal";
import {toBigNumber} from "../../../../utils/util";

const Item: FC<{
  Icon: typeof DollarOutline
  title: string
  content: string
  loading: boolean
}> = ({ Icon, title, content, loading }) => {
  return (
    <>
      <Icon />

      <div>
        <span>{title}</span>
        {loading ? <Skeleton width={100} /> : <span>{content}</span>}
      </div>
    </>
  )
}

const Pool: FC = () => {
  const { api } = useWeb3()
  const {checkRisk} = useRiskModal()
  const [pair, setPair] = useState(['ETH', 'NEST'])
  const { info: poolInfo } = usePoolInfo<PoolInfo>(pair[0], pair[1])

  const [token0, token1] = [useToken(pair[0]), useToken(pair[1])]

  const classPrefix = 'cofi-page-pool-index'

  const empty = (
    <div className={`${classPrefix}-empty`}>
      <Empty />
      <div>
        <Trans>Empty Liquidity</Trans>
      </div>
    </div>
  )

  const history = useHistory()

  const sectionPairPool = token0 && token1 && (
    <section className={`${classPrefix}-pool-container`}>
      <div className={`${classPrefix}-pool`}>
        <PoolSelector symbol={pair} onChange={(p) => setPair(p)} />

        <div className={`${classPrefix}-info`}>
          <div className={`${classPrefix}-info-container`}>
            <h1 className={`${classPrefix}-h1`}>{`${token0.symbol}-${token1.symbol} ${t`Pool`}`}</h1>
            <Card>
              <div className={`${classPrefix}-section`}>
                <div className={`${classPrefix}-header`}>
                  <div className={`${classPrefix}-title`}>
                    <span>{`${token0.symbol}-${token1.symbol} ${t`Pool`}`}</span>
                    {/* <Tag>{`${t`Mining`} x2`}</Tag> */}
                  </div>
                </div>

                <ul className={`${classPrefix}-ul responsive`}>
                  <li>
                    <Item
                      Icon={DollarOutline}
                      title={t`TVL`}
                      content={api && poolInfo ? api.Tokens.USDT.format(poolInfo.totalFunds) : '--'}
                      loading={!poolInfo}
                    />
                  </li>
                  <li>
                    <Item
                      Icon={PercentageSignOutline}
                      title={t`Net worth`}
                      content={poolInfo ? poolInfo.nav.toFormat(8) : '--'}
                      loading={!poolInfo}
                    />
                  </li>
                  <li>
                    <Item
                      Icon={token0.Icon}
                      title={`${token0.symbol} ${t`Amount`}`}
                      content={poolInfo ? poolInfo.formatAmounts[0] : '--'}
                      loading={!poolInfo}
                    />
                  </li>
                  <li>
                    <Item
                      Icon={token1.Icon}
                      title={`${token1.symbol} ${t`Amount`}`}
                      content={poolInfo ? poolInfo.formatAmounts[1] : '--'}
                      loading={!poolInfo}
                    />
                  </li>
                  <li>
                    <Item
                      Icon={BarGraphOutline}
                      title={`${t`Total Share`}`}
                      content={poolInfo ? poolInfo.xtokenTotalSupply.amount.toFormat(8) : '--'}
                      loading={!poolInfo}
                    />
                  </li>
                </ul>
              </div>
            </Card>

            <Button
              block
              gradient
              primary
              disabled={token0.symbol === 'ETH' && token1.symbol === 'USDT'}
              onClick={async () => {
                try {
                  await checkRisk(RiskAction.Pool)
                  history.push(`/pool/add-liquidity/${token0.symbol}/${token1.symbol}`)
                }catch(_) {
                  // comment for eslint
                }

              }}
            >
              <Trans>Add Liquidity</Trans>
            </Button>

            {token0.symbol === 'ETH' && token1.symbol === 'USDT' && (
              <div className={`${classPrefix}-footer`}>
                <span>
                  <Trans>The current fund pool is no longer mined</Trans>
                </span>
              </div>
            )}
          </div>

          <div className={`${classPrefix}-info-container`}>
            <h1 className={`${classPrefix}-h1`}>{t`My Pool`}</h1>
            {poolInfo?.emptyLiquidity || poolInfo?.xtokenBalance.amount.lt(toBigNumber(0.00000001)) ? (
              empty
            ) : (
              <Card>
                <div className={`${classPrefix}-section`}>
                  <ul className={`${classPrefix}-ul`}>
                    <li>
                      <Asset/>
                      <div>
                        <span>
                          <Trans>My Share</Trans>
                        </span>
                        {poolInfo ? (
                          <span>{poolInfo ? `${ poolInfo.xtokenBalance.amount.toFormat(8) }` : '--'}</span>
                        ) : (
                          <Skeleton width={200} />
                        )}
                      </div>
                    </li>
                    <li>
                      <Percent/>
                      <div>
                        <span>
                          <Trans>Ratio</Trans>
                        </span>
                        {poolInfo ? (
                          <span>{poolInfo ? `${poolInfo.myPoolRatio}` : '--'}</span>
                        ) : (
                          <Skeleton width={200} />
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
              </Card>
            )}

            {!poolInfo || poolInfo?.emptyLiquidity || poolInfo?.xtokenBalance.amount.lt(toBigNumber(0.00000001))  || (
              <Button block>
                <Link to={`/pool/remove-liquidity/${token0.symbol}/${token1.symbol}`}>
                  <Trans>Remove Liquidity</Trans>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <>
      {sectionPairPool}
    </>
  )
}

export default Pool
