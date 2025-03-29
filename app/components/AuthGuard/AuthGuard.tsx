"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/app/rtk/store";
import Cookies from "js-cookie";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("TAZOUD_TOKEN");

    if (!token) {
      router.push("/auth/login");
    } else {
      setLoading(false);
    }
  }, [user, router]);

  if (loading) return null;

  return <>{children}</>;
};

export default AuthGuard;
