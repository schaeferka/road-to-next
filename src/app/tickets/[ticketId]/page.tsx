import {initialTickets} from "@/data";

type TicketPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

export default async function TicketPage({ params }: TicketPageProps) {
    const {ticketId} = await params;
    const ticket = initialTickets.find(ticket => ticket.id === ticketId);

    if (!ticket) {
    return (
          <div className="flex flex-col gap-[16px] items-center sm:items-start">
            <h2 className="text-4xl font-bold">Ticket Not Found</h2>
          </div>
    );
    }

    return (
      <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">{ticket.title}</h2>
        <p className="text-sm text-muted-foreground">
          {ticket.content}
        </p>
        <p className="text-sm text-muted-foreground">
          Ticket Id: {ticket.id}
        </p>
      </div>
    </div>
    );
  }