"use client";
import { useRouter } from "next/navigation";
import react, { useEffect } from "react";

import { useSetRecoilState } from "recoil";
import { userStateAtom } from "../../recoil/state";
import { getAxios } from "../../services/loginAPI";
import { DynamicRoute } from "@/lib/types";

export default function Loading({ params }: DynamicRoute) {
    const setUserState = useSetRecoilState(userStateAtom);
    const router = useRouter();
    const providerType = params.provider;

    const getKakaoToken = async () => {
        const CODE = new URL(window.location.href).searchParams.get("code");
        console.log(CODE);
        const res = await getAxios.post("/owner/login", {
            email: null,
            password: null,
            authCode: CODE as string,
            providerType: providerType.toUpperCase(),
        });
        if(res.status >= 200 && res.status < 300 ) {
        const userId = res.data.userId;
            const userEmail = res.data.email;

            const resMyPage = await getAxios.get('/owner/mypage')
            const userNickname = resMyPage.data.nickname;
            router.push('/')
            try {
                const userData = {
                    userId: userId,
                    email: userEmail,
                    nickname: userNickname,
                    isLoggedIn: true,
                }
                console.log(userData)
                setUserState(userData)
            } catch {
                console.log("nickname 정보 불러오기 실패")
            }
            return { userId, userEmail, userNickname }
    } else {
        console.log(res);
    }
    };

    const getNaverToken = async () => {
        const CODE = new URL(window.location.href).searchParams.get("code");
        console.log(CODE);
        const res = await getAxios.post("/owner/login", {
            email: null,
            password: null,
            authCode: CODE,
            providerType: providerType.toUpperCase(),
        });
        if(res.status === 200) {
            const userId = res.data.userId;
            const userEmail = res.data.email;

            const resMyPage = await getAxios.get('/owner/mypage')
            const userNickname = resMyPage.data.nickname;
            
            router.push('/')
            return { userId, userEmail, userNickname }
        
    } else {
        console.log(res);
    };

    useEffect(() => {
        const provider = localStorage.getItem("provider");
        if (provider === "kakao") {
            getKakaoToken();
        } else if (provider === "naver") {
            getNaverToken();
        }
    
    }, []);
    return (
        <>
            <h2>로딩 페이지</h2>
        </>
    );
}}
