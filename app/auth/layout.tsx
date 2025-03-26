import styles from "./authStyles.module.css";
// import Cookies from "js-cookie";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  // const pathName = usePathname();
  // const router = useRouter();

  // useEffect(() => {
  //   const TOKEN = Cookies.get("TAZOUD_TOKEN");
  //   if (TOKEN) {
  //     router.push("/dashboard/profile");
  //     return;
  //   }
  // }, [router]);

  return (
    <div className={`${styles.auth_layout} bg-slate-100`}>
      <div className={`${styles.auth_container}`}>{children}</div>
    </div>
  );
}
