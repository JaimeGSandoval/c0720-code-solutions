  select "customers"."firstName" as "firstName",
         "customers". "lastName" as "lastName",
         "payments"."amount" as "payment"
    from "customers"
    join "payments" using ("customerId")
    order by "payment" desc
    limit 10;
