import './styles'

import {t, Trans} from '@lingui/macro'
import {FC, useMemo, useState} from 'react'
import Card from 'src/components/Card'
import CollapseCard from 'src/components/CollapaseCard'
import Field from 'src/components/Field'
import {GrayTokenCOFI, GrayTokenETH} from 'src/components/Icon'
import TokenInput from 'src/components/TokenInput'
import useDAOBalance from 'src/hooks/useDAOBalance'
import useDAOInfo from 'src/hooks/useDAOInfo'
import useTokenBalance from 'src/hooks/useTokenBalance'
import useRepurchase from 'src/hooks/useRepurchase'
import {TransactionType} from 'src/hooks/useTransaction'
import useWeb3 from 'src/hooks/useWeb3'
import {toBigNumber} from 'src/utils/util'
import TransactionButtonGroup from 'src/pages/shared/TransactionButtonGroup'

import {RiskAction, useRiskModal} from '../shared/RiskModal'
import RepurchaseCard from './Card'
import useEtherScanHost from 'src/hooks/useEtherScanHost'

const Repurchase: FC = () => {
  const { checkRisk } = useRiskModal()

  const { account, api } = useWeb3()
  const daoInfo = useDAOInfo()

  const [amount, setAmount] = useState('')
  const [ethAmount, setEthAmount] = useState('')
  const [action, setAction] = useState("token")
  const {balance: cofiBalance} = useTokenBalance('COFI', account || '')
  const anchorPool = api?.CoFixAnchorPools["ETH"]
  const [insufficient, setInsufficient] = useState(false)
  const [insufficient2, setInsufficient2] = useState(false)
  const daoBalance = useDAOBalance()
  const etherScanHost = useEtherScanHost()

  const handleRepurchase = useRepurchase({
    amount,
    symbol: "ETH",
  })

  const insufficientAnchor = useMemo(() => {
    if (!cofiBalance || !amount || !anchorPool || !daoBalance) {
      return false
    }

    const target = handleRepurchase.ethAmount
    if (!target) {
      return false
    }

    return target.amount.gte(daoBalance["ETH"].amount)
  }, [cofiBalance, amount, anchorPool, daoBalance, handleRepurchase.ethAmount])

  const classPrefix = 'cofi-page-repurchase'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <section className={`${classPrefix}-summary`}>
        <ul>
          <li>
            <RepurchaseCard
              title={t`DAO balance（ETH）`}
              value={daoInfo ? api?.Tokens.ETH.format(daoInfo.ethAmount) : '--'}
              icon={<GrayTokenETH/>}
              loading={!daoInfo}
            />
          </li>
          <li>
            <RepurchaseCard
              title={t`Accumulated repurchase in DAO (COFI)`}
              value={daoInfo ? toBigNumber(daoInfo.cofiAmount).toFormat(0) : '--'}
              icon={<GrayTokenCOFI/>}
              loading={!daoInfo}
            />
          </li>
          <li>
            <RepurchaseCard
              title={t`Current Circulation (COFI)`}
              value={daoInfo ? toBigNumber(daoInfo.cofiCirculationAmount).toFormat(0) : '--'}
              icon={<GrayTokenCOFI/>}
              loading={!daoInfo}
            />
          </li>
        </ul>
      </section>

      <section>
        <Card title={t`Repurchase`}>
          <TokenInput
            title={t`Input Repurchase Amount`}
            symbol="COFI"
            selectable={false}
            value={amount}
            onChange={(v) => {
              setAmount(v)
              setAction("token")
            }}
            checkInsufficientBalance
            onInsufficientBalance={(i) => setInsufficient(i)}
          />

          <TokenInput
            title={t`Estimated Receive:`}
            value={action === "token" ? handleRepurchase.ethAmount?.formatAmount : ethAmount}
            symbol="ETH"
            balance={daoBalance?.ETH}
            checkInsufficientBalance
            onInsufficientBalance={(i) => setInsufficient2(i)}
            balanceTitle={t`DAO balance`}
            selectable={false}
            onChange={(e) => {
              setEthAmount(e)
              setAction("eth")
              if (daoInfo?.cofiETHAmount) {
                setAmount(toBigNumber(e).div(daoInfo?.cofiETHAmount).toFixed(8))
              }
            }}
          />

          <Field
            name={t`Current available amount of repurchase`}
            value={daoInfo ? daoInfo.quota.toFixed(0) : `--`}
            loading={!daoInfo}
          />
          <Field
            name={t`Current Repurchase Price` + ` (COFI/ETH)`}
            value={
              daoInfo
                ? `${daoInfo.cofiETHAmount ? api?.Tokens.ETH.format(daoInfo.cofiETHAmount) : '--'} ETH`
                : '-- ETH'
            }
            loading={!daoInfo}
          />

          <TransactionButtonGroup
            approve={{
              transactionType: TransactionType.Repurchase,
              token: ['COFI', 'COFI'],
            }}
            disabled={insufficient || insufficient2 || insufficientAnchor || !amount || toBigNumber(amount).lte(0)}
            onClick={
              async () => {
                try {
                  await checkRisk(RiskAction.Repurchase)
                  handleRepurchase.handler()
                } catch (_) {
                  // comment for eslint
                }
              }
            }
          >
            <Trans>Repurchase</Trans>
          </TransactionButtonGroup>
        </Card>
      </section>

      <section>
        <CollapseCard title={t`About Repurchase`}>
          <section>
            <p>
              <Trans>
                CoFiX 3.0 has re-upgraded the fund pool. After the upgrade, all the handling fees are billed in ETH, and
                0.1% of the transaction handling fee is entered into the DAO contract.
                After the upgrade, the DAO contract only displays the ETH balance. The USD anchor currency in the DAO
                contract is traded into ETH during the upgrade and placed in the DAO contract
              </Trans>
            </p>
          </section>

          <section>
            <p>
              <Trans>CoFiX DAO contract address:</Trans>
            </p>
            <p>
              <a
                href={etherScanHost + '/address/' + api?.Contracts.CoFiXDAO?.address}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                {api?.Contracts.CoFiXDAO?.address}
              </a>
            </p>
          </section>
        </CollapseCard>
      </section>
    </div>
  )
}

export default Repurchase
