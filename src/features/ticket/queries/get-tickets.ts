import { initialTickets } from "@/data";

import { Ticket } from "../types";

export const getTickets = async (): Promise<Ticket[]> => {
  await new Promise((resolve) => setTimeout(resolve, 200));

  return new Promise((resolve) => {
    resolve(initialTickets);
  });
};