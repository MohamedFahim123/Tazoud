import styles from "../authStyles.module.css";

export default function LoginPage() {
  return (
    <>
      <h1 className={`${styles.heading} text-primary text-center mb-3 text-4xl font-bol`}>Login</h1>
      <p className={`${styles.paragraph} text-center mb-4`}>Welcome, Log into you account</p>
    </>
  );
}
