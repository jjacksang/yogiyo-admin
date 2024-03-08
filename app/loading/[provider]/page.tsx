"use client";
import { useRouter } from "next/navigation";
import react, { useEffect } from "react";
import axios from "axios";
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
        if (res.status === 200) {
            const user = {
                userId: res.data.id,
                email: res.data.email,
                nickname: res.data.nickname,
                isLoggedIn: true,
            };
            sessionStorage.setItem("user", JSON.stringify(user));
            setUserState(user);
            router.push("/");
        }
        console.log(res);
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
        if (res.status === 200) {
            const user = {
                userId: res.data.id,
                email: res.data.email,
                nickname: res.data.nickname,
                isLoggedIn: true,
            };
            sessionStorage.setItem("user", JSON.stringify(user));
            setUserState(user);
            router.push("/");
        }
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
}
