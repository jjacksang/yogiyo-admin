"use client";

import { menuItemAtom, shopIdAtom } from "@/app/recoil/state";
import { getAxios } from "@/app/services/loginAPI";
import { MenuItem } from "@/lib/types";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

const MainMenu = () => {
    const shopId = useRecoilValue(shopIdAtom);
    const menuGroups = useRecoilValue(menuItemAtom);
    console.log(menuGroups);

    // const setMainMenu = async () => {
    //     try {
    //         const res = await getAxios.put("/owner/signature-menu/set");
    //         console.log(menuGroupsData);

    //         if (res.status === 204) {
    //             console.log(res);
    //             console.log(res.data);
    //         } else {
    //             console.error("대표메뉴조회실패");
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <div>
            <div className="border rounded-lg w-full h-auto">
                <div className="flex justify-between py-4 px-4">
                    <span className="font-bold text-lg">대표메뉴</span>
                    <div className="flex text-sm text-custom-gray">
                        <button className="px-2 py-2">순서 변경</button>
                        <button className="border rounded-lg bg-yogiyo-blue px-2 py-2 text-white">
                            대표 메뉴 설정
                        </button>
                    </div>
                </div>
            </div>
            <div>{/* 대표 메뉴 영역 */}</div>
        </div>
    );
};

export default MainMenu;
