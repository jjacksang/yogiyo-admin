export const EventBanner = () => {
    return (
        <div className="flex flex-end items-center justify-end relative min-h-[92px] overflow-hidden border-white rounded-lg mt-8 bg-[#fff5a5] cursor-pointer">
            <a
                className="absolute w-full h-full top-0 left-0"
                href="https://partner.yogiyo.co.kr/content/view/%EC%9A%94%EA%B8%B0%EC%9A%94%EC%82%AC%EC%9E%A5%EB%8B%98-%EC%B9%B4%ED%86%A1-%EC%B1%84%EB%84%90-%EC%B6%94%EA%B0%80-%EC%9D%B4%EB%B2%A4%ED%8A%B8-24%EB%85%84-2%EC%9B%94?utm_source=yogiyo&utm_medium=site&utm_term=middlebanner&utm_content=kakao_plus_y24m2"
                target="_blank"
            ></a>
            <span className="absolute left-4 m-auto text-base text-font-black font-bold text-basew hitespace-pre-line">
                아직 채널 친구 아니세요?
                <br />
                지금 추가하고 3만원 받기
            </span>
            <div className="flex flex-end">
                <img
                    className="align-bottom w-[400px] h-[92px]"
                    src="../bannerimage/eventbanner.png"
                />
            </div>
        </div>
    );
};
