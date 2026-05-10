import { useState } from "react";

const H = "H", S = "S", D = "D", P = "P", R = "R";

const dealerCols = ["2","3","4","5","6","7","8","9","10","A"];

const hardRows = [
  { hand: "8",  vals: [H,H,H,H,H,H,H,H,H,H] },
  { hand: "9",  vals: [H,D,D,D,D,H,H,H,H,H] },
  { hand: "10", vals: [D,D,D,D,D,D,D,D,H,H] },
  { hand: "11", vals: [D,D,D,D,D,D,D,D,D,H] },
  { hand: "12", vals: [H,H,S,S,S,H,H,H,H,H] },
  { hand: "13", vals: [S,S,S,S,S,H,H,H,H,H] },
  { hand: "14", vals: [S,S,S,S,S,H,H,H,H,H] },
  { hand: "15", vals: [S,S,S,S,S,H,H,H,R,H] },
  { hand: "16", vals: [S,S,S,S,S,H,H,R,R,R] },
  { hand: "17+",vals: [S,S,S,S,S,S,S,S,S,S] },
];

const softRows = [
  { hand: "A,2", vals: [H,H,H,D,D,H,H,H,H,H] },
  { hand: "A,3", vals: [H,H,H,D,D,H,H,H,H,H] },
  { hand: "A,4", vals: [H,H,D,D,D,H,H,H,H,H] },
  { hand: "A,5", vals: [H,H,D,D,D,H,H,H,H,H] },
  { hand: "A,6", vals: [H,D,D,D,D,H,H,H,H,H] },
  { hand: "A,7", vals: [S,D,D,D,D,S,S,H,H,H] },
  { hand: "A,8+",vals: [S,S,S,S,S,S,S,S,S,S] },
];

const pairRows = [
  { hand: "2,2",  vals: [P,P,P,P,P,P,H,H,H,H] },
  { hand: "3,3",  vals: [P,P,P,P,P,P,H,H,H,H] },
  { hand: "4,4",  vals: [H,H,H,P,P,H,H,H,H,H] },
  { hand: "5,5",  vals: [D,D,D,D,D,D,D,D,H,H] },
  { hand: "6,6",  vals: [P,P,P,P,P,H,H,H,H,H] },
  { hand: "7,7",  vals: [P,P,P,P,P,P,H,H,H,H] },
  { hand: "8,8",  vals: [P,P,P,P,P,P,P,P,P,P] },
  { hand: "9,9",  vals: [P,P,P,P,P,S,P,P,S,S] },
  { hand: "10,10",vals: [S,S,S,S,S,S,S,S,S,S] },
  { hand: "A,A",  vals: [P,P,P,P,P,P,P,P,P,P] },
];

const colors = {
  H: { bg: "#1a3a5c", text: "#7ec8f8", label: "Hit" },
  S: { bg: "#1a3d2b", text: "#6ee09a", label: "Stand" },
  D: { bg: "#3d2a00", text: "#f5c842", label: "Double" },
  P: { bg: "#2d1a4a", text: "#c084fc", label: "Split" },
  R: { bg: "#3d1a1a", text: "#f87171", label: "Surrender" },
};

function Cell({ val }) {
  const c = colors[val];
  return (
    <td style={{
      background: c.bg,
      color: c.text,
      fontFamily: "'Courier New', monospace",
      fontWeight: "700",
      fontSize: "0.75rem",
      textAlign: "center",
      padding: "6px 4px",
      border: "1px solid #1e293b",
      letterSpacing: "0.05em",
    }}>{val}</td>
  );
}

function Table({ title, rows }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <div style={{
        fontFamily: "'Georgia', serif",
        fontSize: "0.65rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#64748b",
        marginBottom: "0.5rem",
      }}>{title}</div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.6rem",
                color: "#475569",
                textAlign: "left",
                padding: "4px 8px 4px 4px",
                border: "1px solid #1e293b",
                background: "#0f172a",
                letterSpacing: "0.1em",
              }}>vs →</th>
              {dealerCols.map(c => (
                <th key={c} style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: "0.7rem",
                  color: "#94a3b8",
                  textAlign: "center",
                  padding: "4px",
                  border: "1px solid #1e293b",
                  background: "#0f172a",
                  fontWeight: "600",
                }}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.hand}>
                <td style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: "0.7rem",
                  color: "#cbd5e1",
                  padding: "4px 8px 4px 4px",
                  border: "1px solid #1e293b",
                  background: "#0f172a",
                  fontWeight: "700",
                  whiteSpace: "nowrap",
                }}>{row.hand}</td>
                {row.vals.map((v, i) => <Cell key={i} val={v} />)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("hard");

  const tabs = [
    { id: "hard", label: "Hard Totals" },
    { id: "soft", label: "Soft Totals" },
    { id: "pairs", label: "Pairs" },
  ];

  const tableData = {
    hard: { title: "Hard Totals — Your Hand vs Dealer Upcard", rows: hardRows },
    soft: { title: "Soft Totals (Ace) — Your Hand vs Dealer Upcard", rows: softRows },
    pairs: { title: "Pairs — Your Hand vs Dealer Upcard", rows: pairRows },
  };

  return (
    <div style={{
      background: "#020b18",
      minHeight: "100vh",
      padding: "2rem 1.5rem",
      fontFamily: "'Georgia', serif",
    }}>
      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <div style={{
          fontSize: "0.6rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#475569",
          marginBottom: "0.4rem",
        }}>6-Deck · Dealer Stands Soft 17</div>
        <h1 style={{
          margin: 0,
          fontSize: "1.6rem",
          fontWeight: "400",
          color: "#e2e8f0",
          letterSpacing: "0.05em",
        }}>Basic Strategy</h1>
        <div style={{
          width: "40px",
          height: "2px",
          background: "#f5c842",
          marginTop: "0.5rem",
        }} />
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            style={{
              background: active === t.id ? "#f5c842" : "#0f172a",
              color: active === t.id ? "#020b18" : "#64748b",
              border: `1px solid ${active === t.id ? "#f5c842" : "#1e293b"}`,
              padding: "0.35rem 0.8rem",
              borderRadius: "2px",
              fontFamily: "'Courier New', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              fontWeight: "700",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >{t.label}</button>
        ))}
      </div>

      {/* Table */}
      <Table {...tableData[active]} />

      {/* Legend */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
        {Object.entries(colors).map(([k, c]) => (
          <div key={k} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <div style={{
              width: "24px", height: "20px",
              background: c.bg,
              border: `1px solid ${c.text}22`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Courier New', monospace",
              fontSize: "0.65rem",
              fontWeight: "700",
              color: c.text,
              borderRadius: "2px",
            }}>{k}</div>
            <span style={{ fontSize: "0.65rem", color: "#64748b", letterSpacing: "0.05em" }}>{c.label}</span>
          </div>
        ))}
      </div>

      {/* Golden rules */}
      <div style={{
        borderTop: "1px solid #1e293b",
        paddingTop: "1.25rem",
      }}>
        <div style={{
          fontSize: "0.6rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#475569",
          marginBottom: "0.75rem",
        }}>Golden Rules</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {[
            "Always split Aces and 8s",
            "Never split 10s or 5s",
            "Always double 11 vs dealer 2–9",
            "Never take insurance",
          ].map((rule, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div style={{
                width: "4px", height: "4px",
                background: "#f5c842",
                borderRadius: "50%",
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.7rem",
                color: "#94a3b8",
                letterSpacing: "0.05em",
              }}>{rule}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
