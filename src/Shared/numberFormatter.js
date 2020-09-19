export default function numberFormater(value, type) {
  const amount = new Intl.NumberFormat("pt-BR", {
    style: `${type}`,
    currency: "BRL",
    minimumFractionDigits: 3,
  }).format(value);
  return `${amount}`;
}
