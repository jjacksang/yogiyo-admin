import Link from "next/link";

export const LoginForm = () => {
    return (
        <div className="flex pt-6 px-4 pb-5 border border-solid border-[box-gray] rounded-lg">
            <div className="flex flex-col grow gap-y-6">
                <div className="text-sm font-normal">
                    <a>요기요 사장님 반갑습니다.</a>
                    <br />
                    <a>로그인해주세요 :)</a>
                </div>
                <div className="flex flex-col gap-3">
                    <Link
                        href="/login"
                        className="bg-[#0c7fe4] flex items-center justify-center w-full max-w-[480px] h-12 rounded-[10px] px-[18px]"
                    >
                        <span className="text-base text-white font-bold mx-0.5">사장님 로그인</span>
                    </Link>
                    <div className="flex justify-between text-xs font-bold text-[#d9d9d9]">
                        <Link href="/">
                            <span>아이디 </span>
                        </Link>
                        /
                        <Link href="/">
                            <span> 비밀번호 찾기</span>
                        </Link>
                        <Link href="/login/emailJoin">회원가입</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
