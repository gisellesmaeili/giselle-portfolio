import Link from "next/link";

const caseStudies = [
    {
        slug: "project-one",
        title: "Placeholder project one",
        summary: "A short description of the problem and what was built.",
        tag: "Client work, recreated",
    },
    {
        slug: "project-two",
        title: "Placeholder project two",
        summary: "A short description of the problem and what was built.",
        tag: "Personal project",
    },
];

export default function WorkPage() {
    return (
        <main className="px-6 py-16 md:px-12">
            <h1 className="mb-12 font-display text-4xl text-ink">Work</h1>
            <div className="flex flex-col gap-6">
                {caseStudies.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/work/${project.slug}`}
                        className="group rounded-lg border border-muted/30 p-6 transition-colors hover:border-accent"
                    >
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              {project.tag}
            </span>
                        <h2 className="mt-2 font-display text-2xl text-ink group-hover:text-accent">
                            {project.title}
                        </h2>
                        <p className="mt-2 font-sans text-muted">{project.summary}</p>
                    </Link>
                ))}
            </div>
        </main>
    );
}