import './styles'

import {t, Trans} from '@lingui/macro'
import {FC, useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import Card from 'src/components/Card'
import Field from 'src/components/Field'
import TokenInput from 'src/components/TokenInput'
import useAddLiquidity from 'src/libs/web3/hooks/useAddLiquidity'
import {TransactionType} from 'src/libs/web3/hooks/useTransaction'
import useWeb3 from 'src/libs/web3/hooks/useWeb3'
import {toBigNumber} from 'src/libs/web3/util'
import TransactionButtonGroup from 'src/pages/shared/TransactionButtonGroup'
import usePoolInfo from "../../../../hooks/usePoolInfo";
import {PoolInfo} from "../../../../libs/web3/api/CoFiXPair";
import Button from "../../../../components/Button";

const AddLiquidity: FC = () => {
  const history = useHistory()
  const params = useParams<{
    token0: string
    token1: string
  }>()

  const {api} = useWeb3()
  const [symbol, setSymbol] = useState(['', ''])
  const [amount, setAmount] = useState(['', ''])
  const {info: poolInfo} = usePoolInfo<PoolInfo>(symbol[0], symbol[1])

  const [insufficient0, setInsufficient0] = useState(false)
  const [insufficient1, setInsufficient1] = useState(false)

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

  const handleToken0AmountChange = (a: string) => {
    setAmount([a, amount[1]])
  }

  const handleToken1AmountChange = (a: string) => {
    setAmount([amount[0], a])
  }

  const handleAddLiquidity = useAddLiquidity({
    token0: {symbol: symbol[0], amount: amount[0]},
    token1: {symbol: symbol[1], amount: amount[1]}
  })

  return (
    <Card backward onBackwardClick={() => history.push(`/pool`)} title={t`Add Liquidity`}>
      <TokenInput
        selectable={false}
        symbol={symbol[0]}
        title={`${t`Input`}${t`Amount`}`}
        value={amount[0]}
        onChange={handleToken0AmountChange}
        checkInsufficientBalance
        onInsufficientBalance={(i) => setInsufficient0(i)}
      />

      <TokenInput
        selectable={false}
        symbol={symbol[1]}
        title={`${t`Input`}${t`Amount`}`}
        value={amount[1]}
        onChange={handleToken1AmountChange}
        checkInsufficientBalance
        onInsufficientBalance={(i) => setInsufficient1(i)}
      />

      <Field name={t`Current Net Worth`} value={poolInfo ? poolInfo.nav.toFormat(8) : '--'}/>

      <Field name={t`Expected share`} value={`${handleAddLiquidity.liquidity || '--'}`}/>

      {toBigNumber(amount[1]).gt(0) ? (
        <TransactionButtonGroup
          approve={{
            transactionType: TransactionType.AddLiquidity,
            token: [symbol[0], symbol[1] || symbol[0]],
          }}
          onClick={handleAddLiquidity.handler}
          disabled={
            insufficient0 || insufficient1
          }
        >
          <Trans>Add Liquidity</Trans>
        </TransactionButtonGroup>
      ) : (
        <Button
          block
          gradient
          primary
          onClick={handleAddLiquidity.handler}
          disabled={
            insufficient1 || toBigNumber(amount[1]).lte(0)
          }
        >
          <Trans>Add Liquidity</Trans>
        </Button>
      )}

    </Card>
  )
}

export default AddLiquidity
