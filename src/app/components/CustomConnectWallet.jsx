import {
    ConnectModal,
    useCurrentAccount,
    useDisconnectWallet,
    useSuiClient,
} from '@mysten/dapp-kit';
import { useState, useEffect, useRef } from 'react';

export function CustomConnectWallet() {
    const [connectModalOpen, setConnectModalOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const currentAccount = useCurrentAccount();
    const { mutateAsync: disconnect } = useDisconnectWallet();
    const suiClient = useSuiClient();
    const [balance, setBalance] = useState(null);
    const dropdownRef = useRef(null);

    // Fetch balance when connected
    useEffect(() => {
        async function fetchBalance() {
            if (currentAccount) {
                try {
                    const res = await suiClient.getBalance({
                        owner: currentAccount.address,
                    });
                    setBalance(res.totalBalance / 1e9);
                } catch (e) {
                    setBalance(null);
                }
            } else {
                setBalance(null);
            }
        }
        fetchBalance();
    }, [currentAccount, suiClient]);

    // Closes dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
            }
        }
        if (dropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpen]);

    if (!currentAccount) {
        return (
            <>
                <button
                    className="walletButton"
                    style={{
                        background: "#fff",
                        color: "#232b36",
                        fontFamily: "LexendBold",
                        padding: "0.5rem 1.2rem",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                        cursor: "pointer",
                    }}
                    onClick={() => setConnectModalOpen(true)}
                >
                    Connect Wallet
                </button>
                <ConnectModal
                    trigger={<></>}
                    open={connectModalOpen}
                    onOpenChange={setConnectModalOpen}
                />
            </>
        );
    }

    // Connected state
    return (
        <div style={{ position: "relative", display: "inline-block" }} ref={dropdownRef}>
            <button
                className="walletButton walletButtonConnected"
                style={{
                    background: "#232b36",
                    color: "#fff",
                    fontFamily: "LexendExtraBold",
                    padding: "0.6rem 1.5rem",
                    borderRadius: "6px",
                    fontSize: "1rem",
                    fontWeight: 700,
                    boxShadow: "0 2px 8px rgba(59, 130, 246, 0.15)",
                    letterSpacing: "0.5px",
                    width: "100%",
                }}
                onClick={() => setDropdownOpen((open) => !open)}
            >
                {currentAccount.address.slice(0, 6)}...{currentAccount.address.slice(-4)}
            </button>
            {dropdownOpen && (
                <div
                    className="walletDropdown"
                    style={{
                        position: "absolute",
                        right: 0,
                        marginTop: "0.5rem",
                        background: "#232b36",
                        borderRadius: "8px",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                        minWidth: "220px",
                        zIndex: 1000,
                        padding: "1rem",
                        color: "#fff",
                        fontFamily: "LexendBold",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                    }}
                >
                    <div style={{ fontSize: "0.95rem", opacity: 0.85 }}>
                        <span style={{ fontWeight: 600 }}>Address:</span>
                        <br />
                        {currentAccount.address.slice(0, 10)}...{currentAccount.address.slice(-6)}
                    </div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                        {balance !== null ? (
                            <>
                                <span style={{ color: "#3b82f6" }}>{balance.toLocaleString(undefined, { maximumFractionDigits: 4 })}</span> SUI
                            </>
                        ) : (
                            "Loading balance..."
                        )}
                    </div>
                    <button
                        onClick={() => {
                            disconnect();
                            setDropdownOpen(false);
                        }}
                        style={{
                            background: "#e53e3e",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            padding: "0.5rem 1.2rem",
                            fontFamily: "LexendBold",
                            fontWeight: 600,
                            fontSize: "1rem",
                            cursor: "pointer",
                            alignSelf: "stretch",
                            marginTop: "0.5rem",
                            transition: "background 0.2s",
                        }}
                    >
                        Disconnect Wallet
                    </button>
                </div>
            )}
        </div>
    );
}
