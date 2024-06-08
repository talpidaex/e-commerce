'use client'
import { AppStore, makeStore } from "@/lib/store"
import { useRef } from "react"
import { Provider } from "react-redux"

interface Props {
    readonly children: React.ReactNode
}

const StoreProvider = ({ children }: Props) => {
    const storeRef = useRef<AppStore | null>(null)

    if (!storeRef.current) {
        storeRef.current = makeStore()
    }

    return <Provider store={storeRef.current}> {children}</Provider>

}

export default StoreProvider