import { createContext, useReducer } from 'react';

export const FormDataContext = createContext();

const initialState = {
  name: '',
  email: '',
  topics: [
    { id: 1, topic: 'Software Development', selected: false },
    { id: 2, topic: 'User Experience', selected: false },
    { id: 3, topic: 'Graphic Design', selected: false },
  ],
  page: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case 'REGISTER':
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        page: action.payload.page,
      };
    case 'TOPICS':
      return {
        ...state,
        topics: [...action.payload.topics],
        page: action.payload.page,
      };
    case 'SUMMARY':
      return {
        ...state,
        page: action.payload,
      };
    case 'SUBMITTED':
      return {
        ...state,
        page: action.payload,
      };
    default:
      throw new Error('Unknown action type');
  }
}

function FormDataProvider({ children }) {
  const [{ name, email, topics, page }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const formData = { name, email, topics, page };

  return (
    <FormDataContext.Provider
      value={{
        formData,
        formDispatch: dispatch,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
}

export default FormDataProvider;
