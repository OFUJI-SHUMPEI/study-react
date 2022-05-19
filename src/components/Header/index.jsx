import Link from "next/link";
import HeaderStyles from "./Header.module.css";

export const Header = () => {
  const NAV_ITEMS = [
    { href: "/", label: "Index" },
    { href: "/about", label: "About" },
    { href: "/users", label: "Users" },
    { href: "/comments", label: "Comments" },
  ];

  return (
    <header className={HeaderStyles.header}>
      {NAV_ITEMS.map((items) => (
        <Link key={items.href} href={items.href}>
          <a className={HeaderStyles.anchor}>{items.label}</a>
        </Link>
      ))}
    </header>
  );
};
