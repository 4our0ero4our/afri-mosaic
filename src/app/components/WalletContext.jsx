"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useCurrentAccount, useDisconnectWallet } from "@mysten/dapp-kit";

const WalletContext = createContext();

export function WalletProviderCustom({ children }) {
    const currentAccount = useCurrentAccount();
    const { mutateAsync: disconnect } = useDisconnectWallet();
    const [account, setAccount] = useState(null);

    // Sync context state with dapp-kit state
    useEffect(() => {
        setAccount(currentAccount);
    }, [currentAccount]);

    // Optionally, you can add more wallet logic here

    return (
        <WalletContext.Provider value={{ account, disconnect }}>
            {children}
        </WalletContext.Provider>
    );
}

export function useWallet() {
    return useContext(WalletContext);
}
