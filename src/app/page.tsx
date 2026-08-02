"use client"

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from(".hero-heading" ,{
                opacity: 0,
                y: 24,
                duration: 1,
                ease: "power2.out",
            });
        },
        { scope: container }
    );

    return (
        <main
            ref={container}
            className="flex min-h-screen flex-col items-center justify-center gap-4"
        >
            <h1 className="hero-heading font-display text-6xl text-ink">
                Giselle
            </h1>
            <p className="font-sans text-muted">
                Software engineer &amp; creative problem solver
            </p>
            <span className="font-mono text-sm text-accent">it&apos;s working</span>
        </main>
    );
}