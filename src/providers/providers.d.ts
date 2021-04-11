export type ContextSetterType<T> = React.Dispatch<React.SetStateAction<T>>

export type ContextType<T> = {
  value: T
  update?: ContextSetterType<T>
}
