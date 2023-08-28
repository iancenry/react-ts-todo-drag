import { createContext } from 'react';
import { IContextProps } from '../@types/todo';

export const TodoContext = createContext<IContextProps>({} as IContextProps);

// export const TodoContext = createContext<IContextProps | null>(null);
