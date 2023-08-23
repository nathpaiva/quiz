import { useState, useEffect } from 'react'

interface IState {
  data: []
  isLoading: boolean
  apiERROR: boolean
}

export const useFetchApi = (): [IState, (str: string) => void] => {
  const [data, setData] = useState<[]>([])
  const [apiERROR, setApiERROR] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(false)
  const [path, setPath] = useState<string>('')

  useEffect(() => {
    if (!path) return
    setIsLoading(true)

    async function apiCall() {
      try {
        const response = await fetch(`http://localhost:4000${path}`)
        const { results } = await response.json()

        setIsLoading(false)
        setApiERROR(false)
        setData(results)
      } catch (error) {
        setData([])
        setIsLoading(false)
        setApiERROR(true)
      }
    }

    apiCall()
  }, [path])

  return [{ data, isLoading, apiERROR }, setPath]
}
