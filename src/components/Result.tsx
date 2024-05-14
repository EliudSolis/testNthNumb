

interface Props {
    n: number 
}

const Result = ({n}: Props) => {
  return (

    <div className="result" style={{display: n != null ? 'block' : 'none' }}>
        <h2 className="result_title">El resultado es: {n?.toFixed(2)}</h2>
    </div>
    
  )
}

export default Result