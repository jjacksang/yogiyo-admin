import { getAxios } from "./loginAPI";

// 점주 가게 목록 조회
export interface OwnerShopList {
    id: number;
    name: string;
    icon: string;
}

// 가게 영업시간
export interface BusinessHour {
    dayOfWeek: string;
    openTime: string;
    closeTime: string;
    breakTimeStart: string | null;
    breakTimeEnd: string | null;
    isOpen: boolean;
}

interface ShopBusinessHoursResponse {
    businessHours: BusinessHour[];
}

export const getShopBusinessHours = async (shopId: number): Promise<ShopBusinessHoursResponse> => {
    try {
        const response = await getAxios.get(`/owner/shop/${shopId}/business-hours`);
        return response.data;
    } catch (error) {
        console.error("Error fetching business hours:", error);
        throw error;
    }
};

// 가게 일시정지
export interface TempCloseShopRequest {
    closeUntil: string | null;
    today: boolean | null;
}

export const ShopList = async () => {
    try {
        const resShops = await getAxios.get("/owner/shop/");
        console.log(resShops.data);

        // 각 상점 데이터에 icon URL 추가
        const updatedShops = resShops.data.map((shop: any) => ({
            ...shop,
            icon: `https://yogiyo-clone.shop${shop.icon}`,
        }));

        return updatedShops;
    } catch (error) {
        console.error("Error fetching shop list:", error);
        throw error;
    }
};

// 일시정지 기능
export const tempCloseShop = async (shopId: number, tempCloseRequest: TempCloseShopRequest) => {
    try {
        const response = await getAxios.patch(`/owner/shop/${shopId}/temp-close`, tempCloseRequest);
        if (response.status === 204) {
            return "Success"; // 성공 응답 처리
        }
        return response.data; // 기타 응답 데이터 처리
    } catch (error) {
        console.error("Error while attempting to temporarily close the shop:", error);
        throw error; // 에러 재던지기
    }
};
