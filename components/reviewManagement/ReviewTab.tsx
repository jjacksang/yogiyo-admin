import { content } from "@/app/recoil/state";
import { useState } from "react";
import { useRecoilState } from "recoil";

export const ReviewTab = () => {
    const [showOption, setShowOption] = useState<boolean>(false);
    const [selectMenu, setSelectMenu] = useRecoilState(content);

    const OpenCloseBtn = (): void => {
        setShowOption(!showOption);
    };

    const handleMenuClick = (review: "ReviewManagement") => {
        setSelectMenu(review);
    };
    return (
        <>
            <a
                style={{ lineHeight: "16px", color: "rgba(0, 0, 0, 0.4)" }}
                className="pl-3 text-xs font-bold flex flex-row items-center h-10 decoration-none"
            >
                <svg
                    width="20"
                    height="20"
                    fill="none"
                    style={{ fill: "none" }}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                ></svg>
                리뷰
                <button onClick={OpenCloseBtn}>ㅇ</button>
            </a>
            {showOption ? (
                <ul>
                    <li
                        className="text-base pt-2 pl-6"
                        onClick={() => handleMenuClick("ReviewManagement")}
                    >
                        리뷰 관리
                    </li>
                </ul>
            ) : (
                <div></div>
            )}
        </>
    );
};
