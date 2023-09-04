import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({children}) {

  const [toasts, setToasts] = React.useState([])

  function CreateToast(message, variant) {
    
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message, 
        variant,
      }
    ]
    setToasts(nextToasts)

    
  }

  function DismissToast(id) {
    const nextToasts = toasts.filter(toast => {
      return toast.id !== id
    })

    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider 
    value={{
      toasts,
      CreateToast,
      DismissToast
      }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
