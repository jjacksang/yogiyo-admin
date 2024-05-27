import { menuItemAtom } from "@/app/recoil/state";
import { getAxios } from "@/app/services/loginAPI";
import { ImageUploadBtn } from "@/components/common/ImageUploadBtn";
import { ModalProps } from "@/lib/types";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";

interface MenuData {
    menuName?: string;
    content?: string;
    price?: number;
}

export const AddMenuItemModal = ({
    onClose,
    menuGroupId,
    itemId,
}: ModalProps & { menuGroupId: number | null; itemId?: number | null | undefined }) => {
    const [prevData, setPrevData] = useState<MenuData | null>(null);
    const [itemImage, setItemImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const menuGroup = useRecoilValue(menuItemAtom);
    let itemData = {};

    const filterMenuGroups = menuGroup.find((item) => item.id === menuGroupId);
    const filterMenuItem = filterMenuGroups?.menus?.find((item) => item.id === itemId);

    const handleImageSelect = (image: File | null) => {
        setItemImage(image);
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(image);
        } else {
            setImagePreview(null);
        }
    };

    const handleAddItem = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const menuItem = new FormData();

        if (prevData) {
            itemData = {
                name: prevData.menuName,
                content: prevData.content,
                price: prevData.price,
            };
            const jsonBlob = new Blob([JSON.stringify(itemData)], { type: "application/json" });
            menuItem.append("menuData", jsonBlob);
        }
        if (itemImage && itemImage instanceof File) {
            menuItem.append("picture", itemImage);
        }
        try {
            const res = await getAxios.post(`/owner/menu-group/${menuGroupId}/add-menu`, menuItem, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrevData({ ...prevData, [e.target.id]: e.target.value });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="flex flex-col w-3/5 h-auto bg-white border divide-y rounded-2xl p-6 pb-20 mb-16">
                <div>
                    <p className="flex justify-center text-xl font-bold">메뉴 추가</p>
                    <div className="flex justify-end gap-2 mb-4">
                        <button
                            className="border rounded-md px-2 py-1 bg-yogiyo-gray text-md font-bold"
                            onClick={onClose}
                        >
                            취소
                        </button>
                        <button
                            className="border rounded-md px-2 py-1 bg-yogiyo-blue text-md font-bold text-white"
                            onClick={handleAddItem}
                        >
                            저장
                        </button>
                    </div>
                </div>
                <div className="flex py-4 px-2">
                    <span className="text-xl font-bold">메뉴명</span>
                    <input
                        onChange={handleAddMenu}
                        value={filterMenuItem ? filterMenuItem?.name : prevData?.menuName}
                        id="menuName"
                        type="text"
                        className="border rounded-lg h-auto"
                    ></input>
                </div>
                <div className="flex py-4 px-2">
                    <span className="col-start-1 text-xl font-bold">메뉴설명(선택)</span>
                    <div className="py-4 px-2">
                        <input
                            onChange={handleAddMenu}
                            value={filterMenuItem ? filterMenuItem?.content : prevData?.content}
                            id="content"
                            type="text"
                            className="border rounded-lg"
                        ></input>

                        <ul className=" text-custom-gray list-disc">
                            <span className="font-bold">
                                주문수 올리는 메뉴설명 팁 작성팁 더보기
                            </span>
                            <li className="">구성품목, 양 알려주기</li>
                            <li className="">들어가는 재료, 맛과 식감 알려주기</li>
                        </ul>
                    </div>
                </div>
                <div className="flex py-4 px-2">
                    <span className="text-xl font-bold">가격</span>
                    <input
                        onChange={handleAddMenu}
                        value={filterMenuItem ? filterMenuItem?.price : prevData?.price}
                        id="price"
                        type="number"
                        className="border rounded-lg"
                    ></input>
                </div>
                <div className="flex items-center py-4 px-2">
                    <span className="text-xl font-bold">노출상태</span>
                    <div className="border divide-x rounded-lg text-lg px-2 py-2">
                        <button className="text-md font-bold text-custom-gray  px-2">판매중</button>
                        <button className="text-md font-bold text-custom-gray  px-2">
                            하루품절
                        </button>
                        <button className="text-md font-bold text-custom-gray px-2">숨김</button>
                    </div>
                </div>
                <div className="flex py-4 px-2">
                    <span className="text-xl font-bold">메뉴사진(선택)</span>
                    <div>
                        {imagePreview && (
                            <img
                                src={imagePreview}
                                alt="preview"
                                className="w-[70px] h-[70px] rounded-lg"
                            />
                        )}
                        <ImageUploadBtn onImageSelect={handleImageSelect} />
                    </div>
                </div>
            </div>
            <div>{/* 미리보기 영역 */}</div>
        </div>
    );
};
