export function OgCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f4f7f5",
        color: "#121614",
        padding: "72px",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, letterSpacing: "0.08em", color: "#1b4332" }}>
        HOUSE OF AMATHONGO
      </div>
      <div style={{ display: "flex", fontSize: 62, lineHeight: 1.05, maxWidth: 920 }}>
        Traditional African healer in Uganda
      </div>
      <div style={{ display: "flex", fontSize: 26, color: "#24302b" }}>
        Political power, court cases, cleansing, and ancestral healing.
      </div>
    </div>
  );
}
