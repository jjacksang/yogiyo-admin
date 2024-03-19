import MenuSet from "./menuSet"

export const MenuNav = () => {
    return (
        <div className="flex bg-white">
            <div className="flex pl-8 text-xl font-bold text-font-black">
                <button onClick={() => <MenuSet />}>메뉴설정</button>
                <button>옵션설정</button>
                <button>대표메뉴</button>
            </div>
        </div>
    )
}