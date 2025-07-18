"use client";

import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservationAction } from "../_lib/actions";

function ReservationList({ bookings }) {
  // useOptimistic() is a React Hook used in the Next.js App Router to implement optimistic UI updates—where you immediately update the UI before waiting for the server action to complete.
  // actualState: the real source of truth (e.g., array of items).
  // the value that return at the beginning and also while there is no asynchronous action running,
  // updaterFn: a function to update the optimistic state with new data.

  const [optimisticBookings, setOptimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  async function handleDelete(bookingId) {
    setOptimisticDelete(bookingId);

    await deleteReservationAction(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
