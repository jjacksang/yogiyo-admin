import axios from "axios";
import { getAxios } from "./loginAPI";
// 가게 정보 조회
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

// 가게 입점 부분 정보
interface ShopData {
    name: string;
    callNumber: string;
    address: string;
    latitude: number;
    longitude: number;
    categories: string[];
}

// 점주 가게 목록 조회
export interface OwnerShopList {
    id: number;
    name: string;
    icon: string;
}

// 가게 일시정지
export interface TempCloseShopRequest {
    closeUntil: string | null;
    today: boolean | null;
}

export const ShopList = async () => {
    try {
        const resShops = await getAxios.get("/owner/shop/");
        console.log(resShops.data);
        const some = resShops.data.map((ss: any) => ({
            ...ss,
            icon: `https://yogiyo-clone.shop${ss.icon}`,
        }));
        return some; // 이 부분 수정하세여
    } catch (error) {
        console.error("Error fetching shop list:", error);
        throw error;
    }
};

// 메뉴 그룹 전체 조회
export const GroupList = async (shopId: number) => {
    try {
        const res = await getAxios.get(`/owner/menu-group/shop/${shopId}`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

// 메뉴 그룹 삭제

export const DeleteMenuGroup = async () => {
    try {
        const res = await getAxios.delete(`owner/menu-group/`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error("삭제오류", error);
    }
};

// 메뉴 그룹 메뉴 삭제
export const deleteMenuItem = async (menuGroupId: number) => {
    try {
        const res = await getAxios.delete(`/owner/menu-group/delete-menu/${menuGroupId}`);
        if (res.status === 204) {
            console.log(res.data);
            console.log(res);
        }
    } catch (error) {
        console.error("메뉴 삭제실패", error);
    }
};

// 메뉴 그룹 메뉴 조회

// 일시정지
export const tempCloseShop = async (shopId: number, tempCloseRequest: TempCloseShopRequest) => {
    try {
        const response = await axios.patch(`/owner/shop/${shopId}/temp-close`, tempCloseRequest);
        return response.data;
    } catch (error) {
        console.error("Error while attempting to temporarily close the shop:", error);
        throw error; // Error rethrowing to be handled by the caller
    }
};

// 옵션그룹 삭제
export const deleteOptionGroup = async (optionId: number) => {
    const optionID = optionId;
    try {
        const res = await getAxios.delete(`owner/menu-option-group/${optionId}/delete`);
    } catch (error) {
        console.error("삭제 실패", error);
    }
};

// 옵션 삭제
export const deleteOption = async (optionId: number) => {
    try {
        const res = await getAxios.delete(`/owner/menu-option-group/option/${optionId}/delete`);
        if (res.status === 204) {
            console.log("옵션 삭제 성공", res.data);
        }
    } catch (error) {
        console.error("옵션 삭제 실패", error);
    }
};
