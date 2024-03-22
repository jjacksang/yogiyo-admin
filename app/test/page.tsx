export default function AddMenu() {
  return (
    <div className="flex flex-col">
      <div className="border py-6 px-3 bg-white">
        <div className="flex justify-center text-xl font-bold w-full">
          <span>메뉴 그룹 추가</span>
          <button className="absolute right-4 pr-6">X</button>
        </div>
      </div>
      <div className="flex items-center mx-8 mt-4 ">
        <div className="flex flex-col text-lg gap-4">
          <p>메뉴 그룹명</p>
          <input
            placeholder="메뉴그룹 입력란"
            className="border rounded-lg w-[300px] h-[50px] pl-4"
          ></input>
          <p>0/70</p> {/* 입력 가능한 글자 수 */}
        </div>
      </div>
      <div className="flex items-center mx-8 mt-4 ">
        <div className="flex flex-col w-full">
          <span>메뉴그룹 설명(선택)</span>
          <input
            placeholder="그룹에 대한 설명을 입력해주세요"
            className="border rounded-lg w-full"
          ></input>
          <p>0/250</p> {/* 입력 가능한 글자 수 */}
        </div>
      </div>
      <div className="flex items-center mx-8 mt-4">
        <div className="flex flex-col">
            <span>상태설정</span>
            <div className="border rounded-lg">
                <button>판매중</button>
                <button>숨김</button>
            </div>
        </div>
      </div>
    </div>
  );
}
