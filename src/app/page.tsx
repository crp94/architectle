import { theme } from "@/lib/theme";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 bg-paper p-8">
      <div
        className="border-ink bg-accent px-8 py-6"
        style={{
          borderWidth: theme.rule.thick,
          borderStyle: "solid",
          boxShadow: theme.shadow.hard,
          fontFamily: theme.type.display,
        }}
      >
        <h1 className="text-4xl uppercase tracking-tight text-ink">Architectle</h1>
      </div>
      <p className="text-ink" style={{ fontFamily: theme.type.body }}>
        The board arrives soon.
      </p>
    </main>
  );
}
