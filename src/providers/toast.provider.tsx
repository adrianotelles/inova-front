import ToastContext from "@context/toast.context";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toast, setToast] = useState({
        showToast: false,
        type: '',
        message: ''
    });

    const timeout = useRef(0);
    const onToast = useCallback((message: string, type: string) => {
        setToast({
            showToast: true,
            type,
            message
        })
    }, []);

    useEffect(() => {
        clearTimeout(timeout?.current);

        if (toast.showToast) {
            timeout.current = setTimeout(() => {
                setToast({
                    showToast: false,
                    type: '',
                    message: ''
                });

                console.log(toast.type)
            }, 4000);
        }
    }, [toast]);

    return (
        <ToastContext.Provider value={{ onToast }} >
            {children}

            <div role="alert" className={`alert fixed bottom-0 alert-${toast.type ?? ''} block w-full ${toast.showToast ? 'block' : 'hidden'}`}>
                <span>
                    {
                        toast.message && toast.message
                    }
                </span>
            </div>
        </ToastContext.Provider>
    )
}

export default ToastProvider;