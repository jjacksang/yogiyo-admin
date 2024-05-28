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

// 메뉴 그룹 순서 변경
export const ReorderMenu = async (shopId: number, menuGroupIds: number[]) => {
    try {
        const res = await getAxios.put(`/owner/menu-group/shop/${shopId}/change-position`, {
            menuGroupIds: menuGroupIds,
        });
        if (res.status === 204) {
            console.log(res);
            console.log(res.data);
        }
    } catch (error) {
        console.error("메뉴 그룹 순서 변경 실패", error);
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
