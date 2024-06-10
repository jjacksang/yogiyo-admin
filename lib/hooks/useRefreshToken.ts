"use client";

import { getAxios } from "@/app/services/loginAPI";
import { useSession } from "next-auth/react";

export const useRefreshToken = () => {
    const { data: session } = useSession();

    const refreshToken = async () => {
        const res = getAxios.post("/re-issue", {
            refresh: session?.user.refreshToken,
        });

        console.log("Refreshed");
        if (session) session.user.accessToken = (await res).data.accessToken;
    };

    return refreshToken;
};
