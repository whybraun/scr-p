export type Car = {
  id: string;
  name: string;
  type: "Sedan" | "SUV" | "Sport" | "RV";
  seats: number | null;
  transmission: "Automatic" | "Manual";
  bags: number | null;
  fuel: "Gas" | "Hybrid" | "Electric" | "Diesel";
  pricePerDay: number | null;
  image: string | null;
};

export const cars: Car[] = [
  {
    id: "mustang-2026",
    name: "2026 Ford Mustang",
    type: "Sport",
    seats: null,
    transmission: "Automatic",
    bags: null,
    fuel: "Gas",
    pricePerDay: null,
    image: null,
  },
  {
    id: "sedan-1",
    name: "[Year Make Model]",
    type: "Sedan",
    seats: null,
    transmission: "Automatic",
    bags: null,
    fuel: "Hybrid",
    pricePerDay: null,
    image: null,
  },
  {
    id: "suv-1",
    name: "[Year Make Model]",
    type: "SUV",
    seats: null,
    transmission: "Automatic",
    bags: null,
    fuel: "Gas",
    pricePerDay: null,
    image: null,
  },
  {
    id: "rv-1",
    name: "[Year Make Model]",
    type: "RV",
    seats: null,
    transmission: "Automatic",
    bags: null,
    fuel: "Gas",
    pricePerDay: null,
    image: null,
  },
];