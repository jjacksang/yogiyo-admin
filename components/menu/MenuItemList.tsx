import { menuItemAtom } from "@/app/recoil/state";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

interface MenuItemListProps {
    menuGroupId: number;
}

export const MenuItemList = ({ menuGroupId }: MenuItemListProps) => {
    const [viewOption, setViewOption] = useState<Boolean>(false);
    const menuGroup = useRecoilValue(menuItemAtom).find((group) => group.id === menuGroupId);
    if (!menuGroup || !menuGroup.menus) {
        return null;
    }
    const toggleViewOption = () => {
        setViewOption(!viewOption);
        console.log(menuGroupId);
    };

    // useEffect(() => {
    //     const getItemList = async () => {
    //         try {
    //             const res = await getAxios.get(`owner/menu-group/${menuGroupId}/menu`);
    //             const menus = res.data;
    //             // setMenuItems(menus);
    //             console.log(menus);
    //             console.log(res.data);
    //         } catch (error) {
    //             console.log("리스트 가져오기 실패", error);
    //         }
    //     };
    //     getItemList();
    // }, [menuGroup]);

    return (
        <div>
            {menuGroup.menus.map((menuItem) => (
                <div className="flex justify-between w-full mb-4" key={menuItem.id}>
                    <div className="flex flex-col">
                        <span className="text-base font-bold">{menuItem.name}</span>
                        <p className="text-xs text-custom-gray pb-2">{menuItem.content}</p>
                        <p className="text-xs">{menuItem.price}</p>
                    </div>
                    <div className="flex items-center border rounded-lg relative">
                        <>
                            <select>
                                <option>판매중</option>
                                <option>하루 품절</option>
                                <option>숨김</option>
                            </select>
                        </>

                        <div className="flex">
                            <button className="mx-2" onClick={() => toggleViewOption()}>
                                보기
                                {viewOption ? (
                                    <ul className="flex flex-col divide-y absolute right-0 w-[200px] border rounded-lg bg-white mt-4 px-2 py-1 z-10">
                                        <li className="flex justify-start py-2">메뉴 수정</li>
                                        <li className="flex justify-start py-2">메뉴 삭제</li>
                                    </ul>
                                ) : (
                                    <div></div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
