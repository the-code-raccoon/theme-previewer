// const colours =
//   "slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose".split(
//     "|"
//   );

// let result = "";

// for (const colour of colours) {
//   result += `text-${colour}-50 `;
//   for (let i = 100; i <= 900; i += 100) {
//     result += `text-${colour}-${i} `;
//   }
// }

// console.log(result);

export const darker = (colour: string) => {
  const [base, shade] = colour.split("-");
  if (shade === "50") return `${base}-100`;
  if (shade === "900") return `${base}-900`
  return `${base}-${parseInt(shade) + 100}`;
};

export const lighter = (colour: string) => {
  const [base, shade] = colour.split("-");
  if (shade === "50" || shade === "100") return `${base}-50`;
  return `${base}-${parseInt(shade) - 100}`;
};
