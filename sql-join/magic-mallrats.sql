select "customers"."firstName" as "firstName",
       "customers"."lastName" as "lastName"
  from "customers"
  join "payments" using ("customerId")
  join "rentals" using ("rentalId")
  where "rentalId" = 547;
