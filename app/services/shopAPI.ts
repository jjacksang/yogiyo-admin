import axios from "axios";
import { getAxios } from "./loginAPI";

interface ShopInfo {
    id: number;
    name: string;
    callNumber: string;
    address: string;
    categories: null;
}

interface Shop {
    shopId: number;
    shopName: string;
    orderNum: number;
    reviewNum: number;
    totalScore: number;
    distance: number;
    deliveryTime: number;
    minDeliveryPrice: number;
    maxDeliveryPrice: number;
    icon: string;
}

export interface OwnerShopList {
    id: number;
    name: string;
    icon: string;
}
[];

export const ShopList = async () => {
    try {
        const resShops = await getAxios.get("/owner/shop/");

        console.log(resShops.data);

        return resShops.data;
    } catch (error) {
        console.error("Error fetching shop list:", error);
        throw error;
    }
};
