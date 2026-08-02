"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

            tl.to(".chaos-block", {
                rotation: 0,
                y: 0,
                backgroundColor: "#7c2635",
                duration: 0.6,
                stagger: 0.08,
            })
                .to(".chaos-block", { opacity: 0, duration: 0.4 }, "+=0.2")
                .from(".hero-heading", { opacity: 0, y: 24, duration: 1 }, "<")
                .from(".hero-sub", { opacity: 0, y: 16, duration: 0.8 }, "-=0.6");
        },
        { scope: container }
    );

    return (
        <main
            ref={container}
            className="flex min-h-screen flex-col items-center justify-center gap-4 px-6"
        >
            <div className="mb-4 flex items-end gap-2">
                <div className="chaos-block h-10 w-6 rounded-sm bg-muted" style={{ transform: "rotate(-8deg) translateY(6px)" }} />
                <div className="chaos-block h-16 w-10 rounded-sm bg-muted" style={{ transform: "rotate(5deg) translateY(-4px)" }} />
                <div className="chaos-block h-8 w-14 rounded-sm bg-muted" style={{ transform: "rotate(-3deg) translateY(10px)" }} />
                <div className="chaos-block h-20 w-8 rounded-sm bg-muted" style={{ transform: "rotate(9deg) translateY(-8px)" }} />
                <div className="chaos-block h-12 w-12 rounded-sm bg-muted" style={{ transform: "rotate(-6deg) translateY(4px)" }} />
                <div className="chaos-block h-14 w-6 rounded-sm bg-muted" style={{ transform: "rotate(4deg) translateY(-6px)" }} />
            </div>

            <h1 className="hero-heading text-center font-display text-6xl text-ink">
                Giselle
            </h1>
            <p className="hero-sub max-w-md text-center font-sans text-muted">
                Software engineer &amp; creative problem solver — I build the exact
                tool a problem needs, instead of installing a generic one.
            </p>
        </main>
    );
}