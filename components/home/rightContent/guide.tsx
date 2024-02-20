import Link from "next/link";

export const Guide = () => {
    return (
        <div className="flex flex-col grow px-4 my-6 bg-white border rounded-lg">
            <Link
                href="https://partner.yogiyo.co.kr/guide"
                target="_blank"
                className="flex justify-between items-center py-4"
            >
                <div className="flex">
                    <div className="w-2 h-2 rounded-[50%] bg-[#d9d9d9] mt-1.5 mr-2" />
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-font-black">
                            서비스 이용법 요기요
                        </span>
                        <span className="text-xs font-normal text-[#d9d9d9]">사장님 A to Z</span>
                    </div>
                </div>
            </Link>
            <hr />
            <Link
                href="https://partner.yogiyo.co.kr/faq"
                target="_blank"
                className="flex justify-between items-center py-4"
            >
                <div className="flex">
                    <div className="w-2 h-2 rounded-[50%] bg-[#d9d9d9] mt-1.5 mr-2" />
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-font-black">자주 묻는 질문</span>
                        <span className="text-xs font-normal text-[#d9d9d9]">
                            빠르게 질문을 해결해보세요
                        </span>
                    </div>
                </div>
            </Link>
            <hr />
            <Link
                href="https://partner.yogiyo.co.kr/content/view/%EC%9A%94%EA%B8%B0%EC%9A%94-%EC%9A%94%EA%B8%B0%EC%9A%94%EC%A3%BC%EB%AC%B8-%EC%9A%94%EA%B8%B0%EC%9A%94%EC%A3%BC%EB%AC%B8%EC%A0%91%EC%88%98-%EC%9A%94%EA%B8%B0%EC%9A%94%EC%A3%BC%EB%AC%B8%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EC%9A%94%EA%B8%B0%EC%9A%94%EC%A0%91%EC%88%98%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EC%9A%94%EA%B8%B0%EC%9A%94pc-%EC%9A%94%EA%B8%B0%EC%9A%94%EC%BB%B4%ED%93%A8%ED%84%B0-%EC%9A%94%EA%B8%B0%EC%9A%94%ED%8F%AC%EC%8A%A4"
                target="_blank"
                className="flex justify-between items-center py-4"
            >
                <div className="flex">
                    <div className="w-2 h-2 rounded-[50%] bg-[#d9d9d9] mt-1.5 mr-2" />
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-font-black">주문접수 이용방법</span>
                        <span className="text-xs font-normal text-[#d9d9d9]">주문접수 가이드</span>
                    </div>
                </div>
            </Link>
            <hr />
            <Link
                href="https://partner.yogiyo.co.kr/partner"
                target="_blank"
                className="flex justify-between items-center py-4"
            >
                <div className="flex">
                    <div className="w-2 h-2 rounded-[50%] bg-[#d9d9d9] mt-1.5 mr-2" />
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-font-black">사장님 입점신청</span>
                        <span className="text-xs font-normal text-[#d9d9d9]">
                            요기요 사장님이 되어보세요
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};
