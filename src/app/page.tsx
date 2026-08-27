import { theme } from "@/lib/theme";
import { t } from "@/lib/i18n";
import { GameBoard } from "@/components/game/GameBoard";

const LOCALE = "en" as const;

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-paper">
      <div
        className="flex flex-col items-center gap-2 border-ink bg-accent px-8 py-6"
        style={{
          borderBottomWidth: theme.rule.thick,
          borderStyle: "solid",
          fontFamily: theme.type.display,
        }}
      >
        <h1 className="text-4xl uppercase tracking-tight text-ink">
          {t(LOCALE, "appTitle")}
        </h1>
        <p
          className="text-sm normal-case tracking-normal text-ink"
          style={{ fontFamily: theme.type.body }}
        >
          {t(LOCALE, "appTagline")}
        </p>
      </div>
      <GameBoard mode="daily" locale={LOCALE} />
    </main>
  );
}
