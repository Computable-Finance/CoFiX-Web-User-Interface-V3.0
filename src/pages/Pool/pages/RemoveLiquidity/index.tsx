import './styles'

import { t, Trans } from '@lingui/macro'
import { FC, useEffect } from 'react'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Card from 'src/components/Card'
import Field from 'src/components/Field'
import TokenInput from 'src/components/TokenInput'
import usePoolInfo from 'src/hooks/usePoolInfo'
import { PoolInfo } from 'src/libs/web3/api/CoFiXPair'
import useRemoveLiquidity from 'src/libs/web3/hooks/useRemoveLiquidity'
import { TransactionType } from 'src/libs/web3/hooks/useTransaction'
import useWeb3 from 'src/libs/web3/hooks/useWeb3'
import useXToken from 'src/libs/web3/hooks/useXToken'
import { toBigNumber } from 'src/libs/web3/util'
import TransactionButtonGroup from 'src/pages/shared/TransactionButtonGroup'
import TokenReceive from "../../../../components/TokenReceive";

const RemoveLiquidity: FC = () => {
  const history = useHistory()
  const params = useParams<{
    token0: string
    token1: string
  }>()

  const { api } = useWeb3()
  const [symbol, setSymbol] = useState(['', ''])
  const [amount, setAmount] = useState('')
  const { info: poolInfo } = usePoolInfo<PoolInfo>(symbol[0], symbol[1])
  const xtoken = useXToken(symbol[0], symbol[1])
  const [insufficient, setInsufficient] = useState(false)
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setSymbol([params.token0, params.token1])
    const token0 = api.Tokens[params.token0]
    if (!token0) {
      history.push('/pool')
      return
    }

    const token1 = api.Tokens[params.token1]
    if (params.token1 && !token1) {
      history.push('/pool')
      return
    }
  }, [api, params])

  useEffect(()=> {
    if (poolInfo?.xtokenTotalSupply.value) {
      setPercent(toBigNumber(amount).div(poolInfo?.xtokenTotalSupply.amount).toNumber())
    }
  }, [amount])

  const handleRemoveLiquidity = useRemoveLiquidity({
    token0: symbol[0],
    token1: symbol[1],
    liquidity: amount,
  })

  return (
    <Card backward onBackwardClick={() => history.push('/pool')} title={t`Remove Liquidity`}>
      <TokenInput
        selectable={false}
        symbol={xtoken?.symbol}
        editable
        balance={poolInfo?.xtokenBalance}
        value={amount}
        onChange={(v) => setAmount(v)}
        checkInsufficientBalance
        onInsufficientBalance={(i) => setInsufficient(i)}
      />

      <TokenReceive
        title={t`Received Assets`}
        tokens={[symbol[0], symbol[1]]}
        percent={percent}
        tooltip={
          <>
            <section>
              <p>
                <Trans>
                  The fund pool is priced in ETH, and the share * net value is the amount of ETH that can be received.
                  The withdrawal of non-ETH currency needs to be converted according to the current exchange rate.
                </Trans>
              </p>
            </section>
          </>
        }
      />

      <Field name={t`Current Net Worth`} value={poolInfo ? poolInfo.nav.toFormat(8) : '--'}/>

      <Field name={t`Pool total share`} value={poolInfo?.xtokenTotalSupply.amount.toFormat(8)}/>

      <TransactionButtonGroup
        approve={{
          transactionType: TransactionType.RemoveLiquidity,
          token: [symbol[0], symbol[1]],
        }}
        onClick={handleRemoveLiquidity.handler}
        disabled={insufficient || !amount || toBigNumber(amount).lte(0)}
      >
        <Trans>Remove Liquidity</Trans>
      </TransactionButtonGroup>
    </Card>
  )
}

export default RemoveLiquidity
