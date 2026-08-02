import Link from "next/link";

const links = [
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/lab", label: "Lab" },
    { href: "/contact", label: "Contact" },
];

export default function Nav() {
    return (
        <header className="flex items-center justify-between px-6 py-6 md:px-12">
            <Link href="/" className="font-display text-xl text-ink">
                Giselle
            </Link>
            <nav className="flex gap-6">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}