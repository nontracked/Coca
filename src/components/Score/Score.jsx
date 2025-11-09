import './Score.scss'

export const Score = ({ num, label }) => {
  return (
    <div className="score">
      <span className="score__num">{num}</span>
      <span className="score__desc">{label}</span>
    </div>
  )
}
