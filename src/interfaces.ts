// type is mandatory, payload is optional
export interface Action {
  type: string;
  payload?: any;
}

//takes a type, return the same type
export type Reducer<T> = (state: T, action: Action) => T;

export type Listener = Function;
