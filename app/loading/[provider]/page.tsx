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

    console.log(providerType);

    const getKakaoToken = async (providerType: string) => {
        const CODE = new URL(window.location.href).searchParams.get("code");
        console.log(CODE);
        const res = await getAxios.post("/owner/login", {
            email: null,
            password: null,
            authCode: CODE,
            providerType: providerType.toUpperCase(),
        });
        console.log(res.data);
        if (res.status >= 200 && res.status < 300) {
            const userId = res.data.userId;
            const userEmail = res.data.email;

            const resMyPage = await getAxios.get("/owner/mypage");
            const userNickname = resMyPage.data.nickname;
            console.log("여기까지 정상 진행");
            try {
                const userData = {
                    userId: res.data.userId,
                    email: res.data.email,
                    nickname: res.data.nickname,
                    isLoggedIn: true,
                };
                console.log(userData);
                setUserState(userData);
            } catch {
                console.log("nickname 정보 불러오기 실패");
            }
            router.push("/");
            return { userId, userEmail, userNickname };
        } else {
            console.log(res);
        }
    };

    const getNaverToken = async (providerType: string) => {
        const CODE = new URL(window.location.href).searchParams.get("code");
        console.log(CODE);
        const res = await getAxios.post("/owner/login", {
            email: null,
            password: null,
            authCode: CODE,
            providerType: providerType.toUpperCase(),
        });
        console.log(res.data);
        if (res.status === 200) {
            const userId = res.data.userId;
            const userEmail = res.data.email;

            const resMyPage = await getAxios.get("/owner/mypage");
            const userNickname = resMyPage.data.nickname;

            router.push("/");
            return { userId, userEmail, userNickname };
        } else {
            console.log(res);
        }

        useEffect(() => {
            if (providerType === "kakao") {
                getKakaoToken(providerType as string);
            } else if (providerType === "naver") {
                getNaverToken(providerType as string);
            }
        }, [providerType]);
        return (
            <>
                <h2>로딩 페이지</h2>
            </>
        );
    };
}
