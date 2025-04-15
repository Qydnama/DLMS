export interface UserData {
    name: string;
    address: string;
    balance: string;
}

export async function fetchTonWalletData(addr: string): Promise<UserData> {
    const apiKey = import.meta.env.VITE_TONCENTER_TESTNET;
    if (!apiKey) {
        throw new Error("TON API key is not defined in .env");
    }

    // const rawAddress = Address.parse(addr)

    const url = new URL("https://testnet.toncenter.com/api/v2/getWalletInformation");
    url.searchParams.set("address", addr);
    url.searchParams.set("api_key", apiKey);

    const res = await fetch(url.toString(), { method: "GET" });

    if (!res.ok) {
        throw new Error(`Failed to fetch data from tonapi.io: ${res.status} ${res.statusText}`);
    }
    
    const data = await res.json();
 
    const nanoBalance = data.result.balance ?? 0;
    const tonBalance = nanoBalance / 10**9;
    const walletName = data.result.name || "Wallet";
    
    return {
        address: addr,
        balance: `${tonBalance.toFixed(4)}`,
        name: walletName,
    };
}
