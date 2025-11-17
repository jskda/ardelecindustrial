export default function TextSection({ title, children }) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6 text-center">{title}</h2>
      <div className="prose max-w-none">{children}</div>
    </section>
  );
}