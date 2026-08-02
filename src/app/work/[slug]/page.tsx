export default async function CaseStudyPage({
                                                params,
                                            }: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
        <main className="px-6 py-16 md:px-12">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Case study
            </p>
            <h1 className="mt-2 font-display text-4xl text-ink">{slug}</h1>
            <p className="mt-6 max-w-xl font-sans text-muted">
                This is a placeholder. The real problem, decisions, and outcome for
                this project go here once we write it.
            </p>
        </main>
    );
}