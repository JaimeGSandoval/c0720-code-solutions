select "actors"."firstName" as "firstName",
       "actors"."lastName" as "lastName"
  from "actors"
  join "castMembers" using ("actorId")
  join "films" using ("filmId")
  where "title" = 'Jersey Sassy';
