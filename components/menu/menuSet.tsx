const MenuSet = () => {
    return(
        <div className="px-8 py-4">
            <div className="px-4">
                <input className="pl-2">메뉴 검색</input> {/* 메뉴 검색 영역 */}
                <div>
                    <button>메뉴그룹</button> {/* 메뉴 그룹 드레그 영역 */}
                    <button className="border rounded-lg bg-yogiyo-blue text-white">메뉴 그룹 추가</button> {/* 메뉴 그룹 추가 버튼 */}
                </div>
                <div className="flex px-8 py-4">
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                        <p className="text-base font-bold text-font-black">햄버거 세트</p>
                        <p className="text-xs text-custom-gray">참깨빵 위에 순쇠고기 패티 두 장 특별한 소스 양상추 치즈피클 양파까지</p>
                        </div>
                        <div className="border rounded-lg">
                            <select>
                                <option>판매중</option>
                                <option>하루 품절</option>
                                <option>숨김</option>
                            </select>
                            <select>
                            <option>메뉴그룹 수정</option>
                            <option>메뉴그룹 순서변경</option>
                            <option>메뉴그룹 삭제</option>
                            </select>
                        </div> {/* 판매, 품절 등 드롭다운 메뉴 */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuSet;