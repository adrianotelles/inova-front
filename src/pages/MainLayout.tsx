import { Outlet, ScrollRestoration } from "react-router"
import Header from "@shared/components/Header"
import Footer from "@shared/components/Footer"
import ToastProvider from "@providers/toast.provider"

export const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <Header />
            </header>
            <main className="mt-15 flex-1">
                <ToastProvider>
                    <ScrollRestoration />
                    <Outlet />
                </ToastProvider>
            </main>
            <Footer />
        </div>
    )
}
