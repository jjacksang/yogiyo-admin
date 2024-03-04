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

// 가게 입점 부분 
interface ShopRegistration{
  // Authorization header
  authorization: string; 
  icon: {
    filename: string; // 
    contentType: string; // 이미지 부분 "image/png"
    data: Blob; 
  };

  banner: {
    filename: string; 
    contentType: string; 
    data: Blob; 
  };

  shopData: {
    name: string;
    callNumber: string;
    address: string;
    latitude: number;
    longitude: number;
    categories: string[];
  };
}
  
// 점주 가게 목록 조회 
export interface OwnerShopList {
  id: number;
  name: string;
  icon: string;
}


export const registerShop = async (shopRegistrationData: ShopRegistration) => {
  const { authorization, icon, banner, shopData } = shopRegistrationData;

  // FormData 객체 생성
  const formData = new FormData();
  formData.append('icon', icon.data, icon.filename);
  formData.append('banner', banner.data, banner.filename);
  formData.append('shopData', JSON.stringify(shopData));

  try {
      // getAxios 인스턴스를 사용하여 Authorization 헤더와 함께 요청 전송
      const response = await getAxios.post('/owner/shop/register', formData, {
          headers: {
              'Authorization': authorization,
              'Content-Type': 'multipart/form-data',
          },
      });
      return response.data; // 성공 응답 데이터 반환
  } catch (error) {
      console.error(error);
      throw error;
  }
};

// 가게 목록 조회 함수
export const fetchShopList = async (authorization: string) => {
  try {
    const response = await getAxios.get('/owner/shop/list', {
      headers: { 'Authorization': authorization },
    });
    return response.data; // 성공 응답 데이터 반환
  } catch (error) {
    console.error("가게 목록 조회 중 오류:", error);
    throw error;
  }
};


