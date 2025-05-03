import { PinataSDK } from "pinata";

export const createPinataInstance = (jwt: string, gateway: string) => {
    return new PinataSDK({
        pinataJwt: jwt,
        pinataGateway: gateway,
    });
};

export const checkPinataConnection = async (jwt: string): Promise<boolean> => {
    try {
        const res = await fetch(
            "https://api.pinata.cloud/data/testAuthentication",
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }
        );

        return res.ok;
    } catch (error) {
        console.error("Ошибка при проверке Pinata:", error);
        return false;
    }
};

export const listPinataGateways = async (jwt: string): Promise<string[]> => {
    try {
        const res = await fetch("https://api.pinata.cloud/v3/ipfs/gateways", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });

        if (!res.ok) {
            console.error("Не удалось получить список шлюзов:", res.status);
            return [];
        }

        const data = await res.json();
        interface Gateway {
            domain: string;
        }

        return data.data?.rows?.map((gateway: Gateway) => gateway.domain) || [];
    } catch (error) {
        console.error("Ошибка при получении шлюзов:", error);
        return [];
    }
};
