import './styles'

import { t, Trans } from '@lingui/macro'
import { FC, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Card from 'src/components/Card'
import Field from 'src/components/Field'
import TokenInput from 'src/components/TokenInput'
import useAddLiquidity from 'src/libs/web3/hooks/useAddLiquidity'
import { TransactionType } from 'src/libs/web3/hooks/useTransaction'
import useWeb3 from 'src/libs/web3/hooks/useWeb3'
import TransactionButtonGroup from 'src/pages/shared/TransactionButtonGroup'
import usePoolInfo from '../../../../hooks/usePoolInfo'
import { PoolInfo } from '../../../../libs/web3/api/CoFiXPair'

const AddLiquidity: FC = () => {
  const history = useHistory()
  const params = useParams<{
    token0: string
    token1: string
  }>()

  const { api } = useWeb3()
  const [symbol, setSymbol] = useState(params.token0)
  const [amount, setAmount] = useState('0')
  const { info: poolInfo } = usePoolInfo<PoolInfo>(params.token0, params.token1)

  const [insufficient1, setInsufficient1] = useState(false)

  useEffect(() => {
    if (!api) {
      return
    }
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

  const handleChange = async (amount: string, symbol: string) => {
    setSymbol(symbol)
    setAmount(amount)
  }

  const handleAddLiquidity = useAddLiquidity({
    token0: { symbol: params.token0, amount: symbol === params.token0 ? amount : '0' },
    token1: { symbol: params.token1, amount: symbol === params.token1 ? amount : '0' },
  })

  return (
    <Card backward onBackwardClick={() => history.push(`/pool`)} title={t`Add Liquidity`}>
      <TokenInput
        selectable
        symbol={symbol}
        title={`${t`Input`}${t`Amount`}`}
        value={amount}
        editable
        tokens={[params.token0, params.token1]}
        onChange={(amount: string, symbol: string) => handleChange(amount, symbol)}
        checkInsufficientBalance
        onInsufficientBalance={(i) => setInsufficient1(i)}
      />

      <Field name={t`Current Net Worth`} value={poolInfo ? poolInfo.nav.toFormat(8) : '--'} />

      <Field name={t`Expected share`} value={`${handleAddLiquidity.liquidity || '--'}`} />

      <TransactionButtonGroup
        approve={{
          transactionType: TransactionType.AddLiquidity,
          token: [symbol[0], symbol[1] || symbol[0]],
        }}
        onClick={handleAddLiquidity.handler}
        disabled={insufficient1}
      >
        <Trans>Add Liquidity</Trans>
      </TransactionButtonGroup>
    </Card>
  )
}

export default AddLiquidity
