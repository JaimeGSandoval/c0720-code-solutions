select "line1",
       "cities"."name" as "city",
       "district"
  from "cities"
  join "addresses" using ("cityId");
