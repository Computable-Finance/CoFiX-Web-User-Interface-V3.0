import './styles'

import { t } from '@lingui/macro'
import classNames from 'classnames'
import { FC, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { QuestionOutline, TokenXToken } from 'src/components/Icon'
import useToken from 'src/hooks/useToken'
import usePoolInfo from '../../hooks/usePoolInfo'
import { PoolInfo } from '../../libs/web3/api/CoFiXPair'
import Popup from 'reactjs-popup'

type Props = {
  title?: string
  className?: string
  onChange?: (choice: number) => any
  tokens: Array<string>
  percent: number
  tooltip?: JSX.Element
}

const TokenReceive: FC<Props> = ({ ...props }) => {
  const token0 = useToken(props.tokens[0])
  const token1 = useToken(props.tokens[1])
  const { info: poolInfo } = usePoolInfo<PoolInfo>(props.tokens[0], props.tokens[1])
  const [receive, setReceive] = useState([0, 0])
  const classPrefix = 'cofi-token-input'

  useEffect(() => {
    if (poolInfo?.amounts) {
      setReceive([poolInfo?.amounts[0].toNumber() * props.percent, poolInfo?.amounts[1].toNumber() * props.percent])
    }
  }, [setReceive, poolInfo, props.percent])

  return (
    <div className={`${classPrefix} ${props.className}`}>
      <div className={`${classPrefix}-name`}>
        {props.title && <div className={`${classPrefix}-title`}>{props.title}</div>}
        {props.tooltip && (
          <Popup
            on="hover"
            trigger={
              <span className={`${classPrefix}-tooltip-icon`}>
                <QuestionOutline />
              </span>
            }
          >
            <div className={`${classPrefix}-tooltip`}>{props.tooltip}</div>
          </Popup>
        )}
      </div>
      <div className={`${classPrefix}-container`}>
        <div className={`${classPrefix}-token`}>
          {token0 ? token0.isXToken ? <TokenXToken /> : <token0.Icon /> : <Skeleton width={44} height={44} circle />}
          <span>{token0 ? token0.isXToken ? 'XToken' : token0.symbol : <Skeleton width={80} />}</span>
        </div>
        <div>{receive[0] === 0 ? '-' : receive[0].toFixed(6)}</div>
      </div>

      <div className={`${classPrefix}-extra`}>
        <span
          className={classNames({
            [`${classPrefix}-balance`]: true,
          })}
        >
          <>
            {t`Pool Balance:`} {poolInfo?.formatAmounts[0] ?? '-'}{' '}
            {token0 ? (token0.isXToken ? 'XToken' : token0.symbol) : ''}
          </>
        </span>
      </div>

      <div className={`${classPrefix}-container`}>
        <div className={`${classPrefix}-token`}>
          {token1 ? token1.isXToken ? <TokenXToken /> : <token1.Icon /> : <Skeleton width={44} height={44} circle />}
          <span>{token1 ? token1.isXToken ? 'XToken' : token1.symbol : <Skeleton width={80} />}</span>
        </div>
        <div>{receive[1] === 0 ? '-' : receive[1].toFixed(6)}</div>
      </div>

      <div className={`${classPrefix}-extra`}>
        <span
          className={classNames({
            [`${classPrefix}-balance`]: true,
          })}
        >
          <>
            {t`Pool Balance:`} {poolInfo?.formatAmounts[1] ?? '-'}{' '}
            {token1 ? (token1.isXToken ? 'XToken' : token1.symbol) : ''}
          </>
        </span>
      </div>
    </div>
  )
}

TokenReceive.defaultProps = {}

export default TokenReceive
