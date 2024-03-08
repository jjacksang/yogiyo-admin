"use client";
import { useRouter, useSearchParams } from "next/navigation";
import react, { useEffect } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userStateAtom } from "../../recoil/state";
import { getAxios } from "../../services/loginAPI";
import { DynamicRoute } from "@/lib/types";

export default function Loading({ params }: DynamicRoute) {
    const setUserState = useSetRecoilState(userStateAtom);

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

        console.log(res);
    };

    const getNaverToken = async () => {
        const CODE = new URL(window.location.href).searchParams.get("code");
        console.log(CODE);
        const response = await getAxios.post("/owner/login", {
            email: null,
            password: null,
            authCode: CODE,
            providerType: providerType.toUpperCase(),
        });
        console.log(response);
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
