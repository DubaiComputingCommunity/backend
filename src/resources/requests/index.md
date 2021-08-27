-- Debug --
/debug/ping
Pings the server, ensuring uptime

-- Gauntlets --
(POST) /gauntlets/post
Makes a new Gauntlet with the given data (data format specified in expectedPostStructures.txt)

(GET) /gauntlets/getPrevious
Gets the previous Gauntlets, can set the limit of gauntlets using the "amnt" query parameter (url?amnt=5)

(GET) /gauntlets/getGauntletByID
Gets the Gauntlet with the given ID using the "id" query parameter (url?id=1)

(DELETE) /gauntlets/delete
Deletes the Gauntlet with the given ID using the "id" query parameter (url?id=1)
