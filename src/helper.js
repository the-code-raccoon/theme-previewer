const colours =
  "slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose".split(
    "|"
  );

let result = "";

for (const colour of colours) {
  result += `bg-${colour}-50 `;
  for (let i = 100; i < 900; i += 100) {
    result += `bg-${colour}-${i} `;
  }
}

console.log(result);
