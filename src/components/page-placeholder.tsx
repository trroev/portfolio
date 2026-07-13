type PagePlaceholderProps = {
  title: string;
  description: string;
};

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <p className="font-medium text-signature text-sm uppercase tracking-[0.2em]">
        Coming soon
      </p>
      <h1 className="text-balance font-display font-semibold text-4xl sm:text-5xl">
        {title}
      </h1>
      <p className="max-w-xl text-balance text-lg text-muted">{description}</p>
    </section>
  );
}
