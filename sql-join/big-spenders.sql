  select "customers" as "customer",
         "payments" as "payment"
         from "customers"
         join "payments" using ("customerId");
