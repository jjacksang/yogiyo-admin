import { menuListState, shopIdAtom } from "@/app/recoil/state";
import { getAxios } from "@/app/services/loginAPI";
import React from "react";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export const GroupDataFrom = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuName, setMenuName] = useState("");
    const [content, setContent] = useState("");
    const [menuList, setMenuList] = useRecoilState(menuListState);
    const shopId = useRecoilValue(shopIdAtom);

    const handleOpenModal = () => {
        setIsOpen(true);
    };
    const handleCloseModal = () => {
        setIsOpen(false);
    };
    const handleAddMenu = async () => {
        if (!menuName.trim() || !content.trim()) {
            console.log("아무것도 없음 입력하셈");
            return;
        }
        try {
            const req = await getAxios.post("/owner/menu-group/add", {
                shopId: shopId,
                name: menuName,
                content: content,
            });
            const newMenuId = req.data.id;
            const newMenuData = {
                id: newMenuId,
                name: menuName,
                content: content,
            };
            console.log(req.data);
            console.log(newMenuData);
            setMenuList((prevMenuList) => [...prevMenuList, newMenuData]);
        } catch (error) {
            console.error("메뉴 추가 안되고 있음", error);
        }
    };
    return (
        <div>
            <div className="flex items-center mx-8 py-4 ">
                <div className="border py-6 px-3 bg- rounded-t-2xl">
                    <div className="flex justify-center text-xl font-bold w-full relative">
                        <span>메뉴 그룹 추가</span>
                        <button className="absolute right-4 pr-6" onClick={handleCloseModal}>
                            X
                        </button>
                    </div>
                </div>
                <div className="flex flex-col text-lg gap-4">
                    <p>메뉴 그룹명</p>
                    <input
                        placeholder="메뉴그룹 입력란"
                        className="border rounded-lg w-[300px] h-[50px] pl-4"
                        value={menuName}
                        type="text"
                        onChange={(e) => setMenuName(e.target.value)}
                        id="menuName"
                    ></input>
                    <p>0/70</p> {/* 입력 가능한 글자 수 */}
                </div>
            </div>
            <div className="flex items-center mx-8 py-4 ">
                <div className="flex flex-col w-full">
                    <span>메뉴그룹 설명(선택)</span>
                    <input
                        placeholder="그룹에 대한 설명을 입력해주세요"
                        className="border rounded-lg w-full"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></input>
                    <p>0/250</p> {/* 입력 가능한 글자 수 */}
                </div>
            </div>
            <div className="flex items-center mx-8 py-4">
                <div className="flex flex-col">
                    <span>상태설정</span>
                    <div className="border rounded-lg">
                        <button>판매중</button>
                        <button>숨김</button>
                    </div>
                </div>
            </div>
            <button
                className="border bg-yogiyo-blue rounded-xl py-4 px-8 mx-8 my-4 text-xl text-white font-bold"
                onClick={handleAddMenu}
                disabled={!menuName.trim() || !content.trim()}
            >
                저장
            </button>
        </div>
    );
};
