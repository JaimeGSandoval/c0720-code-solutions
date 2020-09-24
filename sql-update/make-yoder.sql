update "actors"
set    "firstName" = 'baby',
        "lastName" = 'yoda'
where "actorId" = 15
returning *;
