import './styles'

import { t, Trans } from '@lingui/macro'
import { FC, useEffect, useRef, useState } from 'react'
import Popup from 'reactjs-popup'
import Button from 'src/components/Button'
import Card from 'src/components/Card'
import { createContainer } from 'unstated-next'

export enum RiskAction {
  Swap,
  Pool,
}

const container = createContainer(() => {
  const [show, setShow] = useState(false)
  const [action, setAction] = useState<RiskAction>(RiskAction.Swap)
  const [promise, setPromise] = useState<{
    resolve: any
    reject: any
  }>()

  const checkRisk = async (action: RiskAction) => {
    if (window.localStorage.getItem(`risk:${action}`)) {
      return
    }

    setAction(action)
    setShow(true)

    return new Promise((resolve, reject) => {
      setPromise({ resolve, reject })
    })
  }

  const approve = async (action: RiskAction) => {
    window.localStorage.setItem(`risk:${action}`, Date.now().toString())
    setShow(false)
    promise?.resolve()
  }

  useEffect(() => {
    if (promise?.reject && !show) {
      promise.reject(new Error('do not approve the risk'))
    }
  }, [show, promise])

  return {
    checkRisk,
    approve,
    action,
    show,
    setShow,
  }
})

export const RiskModalProvider = container.Provider
export const useRiskModal = container.useContainer

const RiskModal: FC = () => {
  const { action, approve, show, setShow } = useRiskModal()
  const [isReadSwap, setIsReadSwap] = useState(false)
  const [isReadPool, setIsReadPool] = useState(false)
  const modal = useRef<any>()

  useEffect(() => {
    if (show) {
      modal.current.open()
    } else {
      modal.current.close()
    }
  }, [show])

  const content = (() => {
    switch (action) {
      case RiskAction.Swap:
        return (
          <>
            <section>
              <p>
                <input style={{ display: 'none' }} />
                <Trans>
                  To enter the CoFiX 3.0 agreement, users/smart contracts participating in the transaction need to fully
                  understand the transaction rules and understand the following risks. Users who do not understand the
                  rules or cannot bear the risks are not recommended to participate:
                </Trans>
              </p>
            </section>

            <section>
              <p>
                <Trans>
                  1. The price of the CoFiX 3.0 protocol comes from the NEST oracle, which will deviate from the
                  centralized exchange;
                </Trans>
              </p>
            </section>

            <section>
              <p>
                <Trans>
                  2. There is a spread between the actual exchange price of the transaction and the price of the NEST
                  oracle, and the spread will increase the transaction cost. Therefore, the number of transactions
                  obtained in CoFiX 3.0 may be less than in the exchange;
                </Trans>
              </p>
            </section>

            <section>
              <p>
                <Trans>
                  3. The transaction requires a 0.3% handling fee, and there is a certain transaction cost. In addition,
                  the transaction also needs to pay a certain miners fee, which is paid to the Ethereum miners;
                </Trans>
              </p>
            </section>

            <section>
              <p>
                <Trans>
                  4. In extreme cases, such as long-term pending transactions, CoFiX 3.0 will fail the transaction, and
                  the miner fee will be collected by the Ethereum system and will not be refunded.
                </Trans>
              </p>
            </section>

            <section>
              <p>
                <Trans>
                  5. Although the CoFiX protocol carries out some security controls, there may be undiscovered loopholes
                  in external oracles and smart contracts, which may cause the transaction price to deviate from the
                  market price extremely, resulting in losses.
                </Trans>
              </p>
            </section>

            <div className={'tips'}>
              <input type="checkbox" className={'tips-checkbox'} onChange={(e) => setIsReadSwap(e.target.checked)} />
              <label htmlFor="opt-in" className={'tips-info'}>
                <Trans>
                  I have read carefully and fully understand the above risks, and I am willing to bear the losses caused
                  by the risks.
                </Trans>
              </label>
            </div>
          </>
        )

      case RiskAction.Pool:
        return (
          <>
            <section>
              <p>
                <input style={{ display: 'none' }} />
                <Trans>
                  To provide liquidity for the CoFiX 3.0 protocol (becoming an LP user/smart contract), it is necessary
                  to fully understand the market-making rules and understand the following risks. Users who do not
                  understand the rules or cannot bear the risks are not recommended to participate:
                </Trans>
              </p>
            </section>

            <section>
              <p>
                <Trans>
                  1. In the CoFiX protocol, market making can enter unilateral assets. The system will calculate the
                  market making share based on the net value of the current fund pool. When the price fluctuates, it
                  will cause the net value to change, and there may be impermanent losses. LP must be manually Hedging
                  can reduce or avoid impermanence losses;
                </Trans>
              </p>
            </section>

            <section>
              <p>
                <Trans>
                  2. The difference in the number of the two tokens in the CoFiX fund pool may be very large, and the
                  market maker may not be able to withdraw the designated token when withdrawing liquidity;
                </Trans>
              </p>
            </section>

            <section>
              <p>
                <Trans>
                  3. The price of the oracle used in the calculation of the LP share may deviate from the exchange price
                  to a certain extent, causing the expected share and the actual share to be inconsistent. The risk is
                  more obvious when the NEST oracle quotes density is small, and the LP can choose after the NEST price
                  takes effect (For example, within 20 blocks) to purchase or redeem to reduce the risk;
                </Trans>
              </p>
            </section>

            <section>
              <p>
                <Trans>
                  4. In CoFiX V3.0, LP providers do not have COFI rewards, and LPs can only obtain fee income. The fee
                  income does not necessarily cover impermanent losses, so market making may not be able to obtain
                  profits and may cause losses;
                </Trans>
              </p>
            </section>

            <section>
              <p>
                <Trans>
                  5. The price of the CoFiX protocol comes from the NEST oracle machine. If the oracle machine is
                  attacked or the price is abnormal due to other reasons, the system may have the risk of risk-free
                  arbitrage (although the system model has been multi-layered protection), once the system has arbitrage
                  risk , Will bring risks to all LPs;
                </Trans>
              </p>
            </section>

            <section>
              <p>
                <Trans>
                  6. Once the smart contract hides the undiscovered bug, it will cause unexpected risks. Because the
                  blockchain system itself has the characteristics of non-tampering, the bug may not be repairable, and
                  all participating users/smart contracts need to understand the risk;
                </Trans>
              </p>
            </section>

            <div className={'tips'}>
              <input type="checkbox" className={'tips-checkbox'} onChange={(e) => setIsReadPool(e.target.checked)} />
              <Trans>
                I have read carefully and fully understand the above risks, and I am willing to bear the losses caused
                by the risks.
              </Trans>
            </div>
          </>
        )

      default:
        return <></>
    }
  })()

  const classPrefix = 'cofi-risk-modal'
  return (
    <Popup modal open={show} onClose={() => setShow(false)} ref={modal} closeOnDocumentClick={false}>
      <Card title={t`Risk Warning`} className={`${classPrefix}-card`}>
        <div className={`${classPrefix}-card-content`}>{content}</div>

        <Button
          block
          primary
          disabled={
            !((action === 0 && isReadSwap) || (action === 1 && isReadPool))
          }
          onClick={() => approve(action)}
        >
          <Trans>Sure</Trans>
        </Button>

        <Button block>
          <a href="https://github.com/Computable-Finance/Doc#4-market-maker-mechanism" target="_blank" rel="noreferrer">
            <Trans>Read More</Trans>
          </a>
        </Button>
      </Card>
    </Popup>
  )
}

export default RiskModal
