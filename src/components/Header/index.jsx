import Link from "next/link";
import HeaderStyles from "./Header.module.css";

export function Header() {
  return (
    <header className={HeaderStyles.header}>
      <Link href="/">
        <a className={HeaderStyles.anchor}>Index</a>
      </Link>
      <Link href="/about">
        <a className={HeaderStyles.anchor}>About</a>
      </Link>
    </header>
  );
}
