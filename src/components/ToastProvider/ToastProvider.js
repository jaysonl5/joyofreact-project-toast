import React, {useState, useEffect} from "react";
import { useEscapeKey } from "../../hooks/use-escape-key";

export const ToastContext = React.createContext();

export const ToastProvider = ({children}) => {
  const [toastVariant, setToastVariant] = useState("notice");
  const [messageText, setMessageText] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toasts, setToasts] = useState([])

  useEscapeKey(() => setToasts([]));

  const createToast = (e) => {
    e.preventDefault();
    const newToast = {id: Math.random(), variant: toastVariant, text: messageText};

    const toastCopy = toasts;
    setToasts([...toastCopy, newToast])


    setShowToast(true);
    setMessageText("");
    setToastVariant("notice");
  }

  const deleteToast = (toastId) => {
    let filteredArray = toasts.filter(toast => toast.id !== toastId);
    setToasts(filteredArray);
   }

  return (
  <ToastContext.Provider
    value={{ toastVariant, messageText, showToast, toasts, createToast, deleteToast, setMessageText, setToastVariant }}
  >
    {children}
  </ToastContext.Provider>)
}

export default ToastProvider;
