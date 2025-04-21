export function getEventsUrl(
    contractAddress: string,
    limit: number = 100
): string {
    return `https://testnet.tonapi.io/v2/accounts/${contractAddress}/events?limit=${limit}`;
}

export function getTransaction(txHash: string): string {
    return `https://testnet.tonapi.io/v2/blockchain/transactions/${txHash}`;
}

export const ipfsToHttp = (uri: string) =>
    uri.startsWith("ipfs://") ? `https://ipfs.io/ipfs/${uri.slice(7)}` : uri;

export async function getCollectionData(
    contractAddress: string
): Promise<{ collectionContent: string; ownerAddress: string }> {
    const url = `https://testnet.tonapi.io/v2/blockchain/accounts/${contractAddress}/methods/get_collection_data`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.success) {
            // Extract collection data from the 'decoded' field
            let collectionContent = data.decoded.collection_content;
            const ownerAddress = data.decoded.owner_address;
            collectionContent = getLink(hexToUtf8(collectionContent));
            return { collectionContent, ownerAddress };
        } else {
            throw new Error(
                "Failed to fetch collection data: " + JSON.stringify(data)
            );
        }
    } catch (error) {
        console.error("Error fetching collection data:", error);
        throw error; // Re-throw error to be handled by the caller
    }
}

function hexToUtf8(hex: string): string {
    let str = "";
    for (let i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }

    return str;
}

function getLink(utf8: string): string {
    const ipfsHash = utf8.split("//")[1]; // Remove the "ipfs://" prefix
    const ipfsUrl = `https://ipfs.io/ipfs/${ipfsHash}`;

    return ipfsUrl; // This will give the full URL
}
