import React, { useContext, useState } from 'react'
import { TaskType } from '../models/types'

type GlobalStateType = {
  editingTask: TaskType | null
}

type GlobalStateContextType = {
  value: GlobalStateType
  update?: <T>(key: string, value: T) => void
}

const initialGlobalState: GlobalStateType = {
  editingTask: null,
}

const GlobalStateContext = React.createContext<GlobalStateContextType>({
  value: initialGlobalState,
})

export const useGlobalStateContext = (): [
  GlobalStateType,
  (<T>(key: string, value: T) => void) | undefined,
] => {
  const globalState = useContext(GlobalStateContext)
  return [globalState.value, globalState.update]
}

type Props = {
  children: React.ReactNode
}

const GlobalStateProvider = ({ children }: Props): JSX.Element => {
  const [globalState, setGlobalState] = useState<GlobalStateType>(
    initialGlobalState,
  )

  const handleUpdate = <T,>(key: string, value: T): void => {
    setGlobalState((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  return (
    <GlobalStateContext.Provider
      value={{ value: globalState, update: handleUpdate }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalStateProvider
