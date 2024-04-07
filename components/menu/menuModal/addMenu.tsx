import { useState } from "react";

export const addMenu = () => {
    const [menuName, setMenuName] = useState('')
    const [menuManual, setMenuManual] = useState('')
    const [price, setPrice] = useState('')

    const handleAddMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === 'menuName') {
            setMenuName()
        } else if (e.target.value === 'menuManual')} {
            setMenuManual()
        } else {
            setPrice()
        }
    }
    }
    
    return (
        <div>
            <div>
                <title>
                    <p>메뉴 추가</p>
                    <div>
                        <button>취소</button>
                        <button>저장</button>
                    </div>
                </title>
                <div>
                    <text>메뉴명</text>
                    <input value={menuName}></input>
                </div>
                <div>
                    <text>메뉴설명(선택)</text>
                    <input value={menuManual}></input>
                    <div>
                        <ul>
                            <span>주문수 올리는 메뉴설명 팁 작성팁 더보기</span>
                            <li>구성품목, 양 알려주기</li>
                            <li>들어가는 재료, 맛과 식감 알려주기</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <text>가격</text>
                    <input value={price}></input>
                </div>
                <div>
                    <text>노출상태</text>
                    <div>
                        <button>판매중</button>
                        <button>하루품절</button>
                        <button>숨김</button>
                    </div>
                </div>
                <div>
                    <text>메뉴사진(선택)</text>
                </div>
            </div>
        </div>
    );
};
