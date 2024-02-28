"use client";

import { HomeLogo } from "@/components/common/HomeLogo";
import { useEffect, useState } from "react";
import { emailLogin } from "@/app/services/loginAPI";
import { useSetRecoilState } from "recoil";
import { loginState } from "@/app/recoil/state";
import { useRouter } from "next/navigation";

const EmailLogin = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setLogin = useSetRecoilState(loginState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.id == "email") {
            setEmail(e.target.value);
        } else if (e.target.id == "password") {
            setPassword(e.target.value);
        }
    };

    const handleSubmit = async () => {
        const data = await emailLogin(email, password);

        if (data) {
            document.cookie = `user=${JSON.stringify(data)}; max-age=${30 * 60}; path=/`;
            router.push("/");
        } else {
            console.log("로그인 실패");
        }
        setLogin(true);
    };

    return (
        <div className="flex-auto">
            <div className="flex flex-col m-auto pt-[60px] px-[20px] max-w-[480px]">
                <div className="flex items-center justify-center mb-11">
                    <HomeLogo />
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-lg font-normal text-font-black">이메일</p>
                    <input
                        placeholder="이메일을 입력하시요."
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        className="border rounded-xl mt-2 p-4 w-full h-[60px] text-custom-gray text-xl"
                    ></input>
                    <p className="text-lg font-normal text-font-black">비밀번호</p>
                    <input
                        placeholder="비밀번호를 입력하시요."
                        id="password"
                        type="password"
                        value={password}
                        onChange={handleChange}
                        className="border rounded-xl mt-2 p-4 w-full h-[60px] text-xl"
                    ></input>
                </div>
                <div>
                    <button
                        className="w-full h-[60px] mt-10 border-none rounded-xl text-xl font-bold text-white bg-yogiyo-blue"
                        onClick={handleSubmit}
                    >
                        로그인
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmailLogin;
