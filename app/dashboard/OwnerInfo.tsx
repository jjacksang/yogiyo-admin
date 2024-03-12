export const OwnerInfo = () => {
  return (
    <div>
      <div className="flex flex-col mt-12 p-10 m-auto">
        <p className="text-xl font-bold text-font-black mb-4">내 정보</p>
        <div className="flex flex-col w-auto gap-4">
          <div className="border rounded-lg bg-white shadow py-8 px-6 ">
            <div className="text-xl text-font-black font-bold">
              회원 정보
              <div className="text-sm text-custom-gray">
                아이디, 이름, 비밀번호, 휴대폰번호, 이메일을 확인/변경 할 수
                있습니다.
              </div>
            </div>
          </div>
          <div className="border rounded-lg bg-white shadow py-8 px-6">
            <div className="text-xl text-font-black font-bold">
              사장님 승인 알람
              <div className="text-sm text-custom-gray">
                사장님의 승인이 필요한 요청을 확인하고 처리할 수 있습니다.
              </div>
            </div>
          </div>
          <div className="border rounded-lg bg-white shadow py-8 px-6">
            <div className="text-xl text-font-black font-bold">
              사업자 정보
              <div className="text-sm text-custom-gray">
                사업자 등록증 정보를 확인/변경 할 수 있습니다.
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-custom-gray">
              가게 직원 정보는 운영정보에서 추가해주세요
              <a>직원정보 추가하기</a>
              
            </span>
            <div className="text-sm text-custom-gray ml-auto mt-0">회원탈퇴 로그아웃</div>
          </div>
        </div>
      </div>
    </div>
  );
};
