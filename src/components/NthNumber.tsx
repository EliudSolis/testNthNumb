import  { useEffect } from 'react'
import { calculator } from '../functions/calculator'

interface Props {
    n: number,
    setResult: (n:number) => void
}

const NthNumber = ({n, setResult}: Props) => {
    
    useEffect(() => {
        setResult(calculator(n))
    })

  return (
    <div style={{display: 'none'}}></div>
  )
}

export default NthNumber