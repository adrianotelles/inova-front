import { createContext } from "react";
type ToastContextType = {
    onToast: (message: string, type: string) => void;
}

const ToastContext = createContext<ToastContextType>({
    onToast: () => { }
});

export default ToastContext;