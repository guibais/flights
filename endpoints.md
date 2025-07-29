curl --request GET
--url 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/getNearByAirports?lat=19.242218017578125&lng=72.85846156046128&locale=en-US'
--header 'x-rapidapi-host: sky-scrapper.p.rapidapi.com'
--header 'x-rapidapi-key: f197b6d294mshcf64ed89b1ef4a5p1ba9bajsn890a70a56fe9'
response:
{
"status": true,
"timestamp": 1691008887676,
"data": {
"current": {
"presentation": {
"title": "Mumbai",
"suggestionTitle": "Mumbai (BOM)",
"subtitle": "India"
},
"navigation": {
"entityId": "95673320",
"entityType": "AIRPORT",
"localizedName": "Mumbai",
"relevantFlightParams": {
"skyId": "BOM",
"entityId": "95673320",
"flightPlaceType": "AIRPORT",
"localizedName": "Mumbai"
},
"relevantHotelParams": {
"entityId": "27539520",
"entityType": "CITY",
"localizedName": "Mumbai"
}
}
},
"nearby": [],
"recent": []
}
}
curl --request GET
--url 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=new&locale=en-US'
--header 'x-rapidapi-host: sky-scrapper.p.rapidapi.com'
--header 'x-rapidapi-key: f197b6d294mshcf64ed89b1ef4a5p1ba9bajsn890a70a56fe9'
response:
{
"status": true,
"timestamp": 1691008938320,
"data": [
{
"presentation": {
"title": "New York",
"suggestionTitle": "New York (Any)",
"subtitle": "United States"
},
"navigation": {
"entityId": "27537542",
"entityType": "CITY",
"localizedName": "New York",
"relevantFlightParams": {
"skyId": "NYCA",
"entityId": "27537542",
"flightPlaceType": "CITY",
"localizedName": "New York"
},
"relevantHotelParams": {
"entityId": "27537542",
"entityType": "CITY",
"localizedName": "New York"
}
}
},
{
"presentation": {
"title": "New York Newark",
"suggestionTitle": "New York Newark (EWR)",
"subtitle": "United States"
},
"navigation": {
"entityId": "95565059",
"entityType": "AIRPORT",
"localizedName": "New York Newark",
"relevantFlightParams": {
"skyId": "EWR",
"entityId": "95565059",
"flightPlaceType": "AIRPORT",
"localizedName": "New York Newark"
},
"relevantHotelParams": {
"entityId": "27537542",
"entityType": "CITY",
"localizedName": "New York"
}
}
},
{
"presentation": {
"title": "New York John F. Kennedy",
"suggestionTitle": "New York John F. Kennedy (JFK)",
"subtitle": "United States"
},
"navigation": {
"entityId": "95565058",
"entityType": "AIRPORT",
"localizedName": "New York John F. Kennedy",
"relevantFlightParams": {
"skyId": "JFK",
"entityId": "95565058",
"flightPlaceType": "AIRPORT",
"localizedName": "New York John F. Kennedy"
},
"relevantHotelParams": {
"entityId": "27537542",
"entityType": "CITY",
"localizedName": "New York"
}
}
},
{
"presentation": {
"title": "New York LaGuardia",
"suggestionTitle": "New York LaGuardia (LGA)",
"subtitle": "United States"
},
"navigation": {
"entityId": "95565057",
"entityType": "AIRPORT",
"localizedName": "New York LaGuardia",
"relevantFlightParams": {
"skyId": "LGA",
"entityId": "95565057",
"flightPlaceType": "AIRPORT",
"localizedName": "New York LaGuardia"
},
"relevantHotelParams": {
"entityId": "27537542",
"entityType": "CITY",
"localizedName": "New York"
}
}
},
{
"presentation": {
"title": "Stewart International",
"suggestionTitle": "Stewart International (SWF)",
"subtitle": "United States"
},
"navigation": {
"entityId": "95566280",
"entityType": "AIRPORT",
"localizedName": "Stewart International",
"relevantFlightParams": {
"skyId": "SWF",
"entityId": "95566280",
"flightPlaceType": "AIRPORT",
"localizedName": "Stewart International"
},
"relevantHotelParams": {
"entityId": "27537542",
"entityType": "CITY",
"localizedName": "New York"
}
}
}
]
}
curl --request GET
--url 'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights?originSkyId=LOND&destinationSkyId=NYCA&originEntityId=27544008&destinationEntityId=27537542&cabinClass=economy&adults=1&sortBy=best&currency=USD&market=en-US&countryCode=US'
--header 'x-rapidapi-host: sky-scrapper.p.rapidapi.com'
--header 'x-rapidapi-key: f197b6d294mshcf64ed89b1ef4a5p1ba9bajsn890a70a56fe9'

curl --request GET
--url 'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsComplete?originSkyId=LOND&destinationSkyId=NYCA&originEntityId=27544008&destinationEntityId=27537542&cabinClass=economy&adults=1&sortBy=best&currency=USD&market=en-US&countryCode=US'
--header 'x-rapidapi-host: sky-scrapper.p.rapidapi.com'
--header 'x-rapidapi-key: f197b6d294mshcf64ed89b1ef4a5p1ba9bajsn890a70a56fe9'
curl --request GET
--url 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/getFlightDetails?legs=%5B%7B%22destination%22%3A%22LOND%22%2C%22origin%22%3A%22LAXA%22%2C%22date%22%3A%222024-04-11%22%7D%5D&adults=1&currency=USD&locale=en-US&market=en-US&cabinClass=economy&countryCode=US'
--header 'x-rapidapi-host: sky-scrapper.p.rapidapi.com'
--header 'x-rapidapi-key: f197b6d294mshcf64ed89b1ef4a5p1ba9bajsn890a70a56fe9'
response:
{
"status": true,
"timestamp": 1691009267165,
"data": {
"itinerary": {
"legs": [
{
"id": "13542-2402201235--30598-0-12712-2402201550",
"origin": {
"id": "13542",
"name": "London Gatwick",
"displayCode": "LGW",
"city": "London"
},
"destination": {
"id": "12712",
"name": "New York John F. Kennedy",
"displayCode": "JFK",
"city": "New York"
},
"segments": [
{
"id": "13542-12712-2402201235-2402201550--30598",
"origin": {
"id": "13542",
"name": "London Gatwick",
"displayCode": "LGW",
"city": "London"
},
"destination": {
"id": "12712",
"name": "New York John F. Kennedy",
"displayCode": "JFK",
"city": "New York"
},
"duration": 495,
"dayChange": 0,
"flightNumber": "Z0701",
"departure": "2024-02-20T12:35:00",
"arrival": "2024-02-20T15:50:00",
"marketingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
},
"operatingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
}
}
],
"duration": 495,
"stopCount": 0,
"departure": "2024-02-20T12:35:00",
"arrival": "2024-02-20T15:50:00",
"dayChange": 0
}
],
"pricingOptions": [
{
"agents": [
{
"id": "arus",
"name": "Mytrip",
"isCarrier": false,
"bookingProposition": "PBOOK",
"url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/arus/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|-|-|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=270.99&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mJJLCotFmLmuKUixczRo6vQcP38OjYjJgVGAC7vlo8cAAAA|8736221224533380069|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:04&pqid=true",
"price": 270.99,
"rating": {
"value": 3.01,
"count": 9532
},
"updateStatus": "CURRENT",
"segments": [
{
"id": "13542-12712-2402201235-2402201550--30598",
"origin": {
"id": "13542",
"name": "London Gatwick",
"displayCode": "LGW",
"city": "London"
},
"destination": {
"id": "12712",
"name": "New York John F. Kennedy",
"displayCode": "JFK",
"city": "New York"
},
"duration": 495,
"dayChange": 0,
"flightNumber": "Z0701",
"departure": "2024-02-20T12:35:00",
"arrival": "2024-02-20T15:50:00",
"marketingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
},
"operatingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
}
}
],
"isDirectDBookUrl": false,
"quoteAge": 3
}
],
"totalPrice": 270.99
},
{
"agents": [
{
"id": "edus",
"name": "eDreams",
"isCarrier": false,
"bookingProposition": "PBOOK",
"url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/edus/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|-|-|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=272.81&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mJJTSktFmLmuKUixczRo6vQcP38OjYjJgVGAEeFKAocAAAA|589607429926384355|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:08&pqid=true",
"price": 272.81,
"rating": {
"value": 2.63,
"count": 10415
},
"updateStatus": "CURRENT",
"segments": [
{
"id": "13542-12712-2402201235-2402201550--30598",
"origin": {
"id": "13542",
"name": "London Gatwick",
"displayCode": "LGW",
"city": "London"
},
"destination": {
"id": "12712",
"name": "New York John F. Kennedy",
"displayCode": "JFK",
"city": "New York"
},
"duration": 495,
"dayChange": 0,
"flightNumber": "Z0701",
"departure": "2024-02-20T12:35:00",
"arrival": "2024-02-20T15:50:00",
"marketingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
},
"operatingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
}
}
],
"isDirectDBookUrl": false,
"quoteAge": 3
}
],
"totalPrice": 272.81
},
{
"agents": [
{
"id": "xpus",
"name": "Expedia",
"isCarrier": false,
"bookingProposition": "PBOOK",
"url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/xpus/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|QEL|Q|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=277.98&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mKpKCgtFmLmuKUixczRo6vQcP38OjYjJgVGAGMaQ04cAAAA|-2471706304482540542|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:15&pqid=true",
"price": 277.98,
"rating": {
"value": 3.96,
"count": 12563
},
"updateStatus": "CURRENT",
"segments": [
{
"id": "13542-12712-2402201235-2402201550--30598",
"origin": {
"id": "13542",
"name": "London Gatwick",
"displayCode": "LGW",
"city": "London"
},
"destination": {
"id": "12712",
"name": "New York John F. Kennedy",
"displayCode": "JFK",
"city": "New York"
},
"duration": 495,
"dayChange": 0,
"flightNumber": "Z0701",
"departure": "2024-02-20T12:35:00",
"arrival": "2024-02-20T15:50:00",
"marketingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
},
"operatingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
}
}
],
"isDirectDBookUrl": false,
"quoteAge": 3
}
],
"totalPrice": 277.98
},
{
"agents": [
{
"id": "noaa",
"name": "Norse Atlantic Airways",
"isCarrier": true,
"bookingProposition": "PBOOK",
"url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/noaa/1/13542.12712.2024-02-20/air/airli/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|-|-|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=277.98&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mLJy09MFGLmeJYpxcyxIlmh4fr5dWxGTAqMAAEFxrgcAAAA|-2328735851777417191|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:01&pqid=false",
"price": 277.98,
"rating": {
"value": 3.61,
"count": 689
},
"updateStatus": "CURRENT",
"segments": [
{
"id": "13542-12712-2402201235-2402201550--30598",
"origin": {
"id": "13542",
"name": "London Gatwick",
"displayCode": "LGW",
"city": "London"
},
"destination": {
"id": "12712",
"name": "New York John F. Kennedy",
"displayCode": "JFK",
"city": "New York"
},
"duration": 495,
"dayChange": 0,
"flightNumber": "Z0701",
"departure": "2024-02-20T12:35:00",
"arrival": "2024-02-20T15:50:00",
"marketingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
},
"operatingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
}
}
],
"isDirectDBookUrl": false,
"quoteAge": 3
}
],
"totalPrice": 277.98
},
{
"agents": [
{
"id": "orbz",
"name": "Orbitz",
"isCarrier": false,
"bookingProposition": "PBOOK",
"url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/orbz/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|QEL|Q|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=277.98&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mLJL0qqEmLmuKUixczRo6vQcP38OjYjJgVGACl_oJscAAAA|-2471706304482540542|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:15&pqid=true",
"price": 277.98,
"rating": {
"value": 1.89,
"count": 1882
},
"updateStatus": "CURRENT",
"segments": [
{
"id": "13542-12712-2402201235-2402201550--30598",
"origin": {
"id": "13542",
"name": "London Gatwick",
"displayCode": "LGW",
"city": "London"
},
"destination": {
"id": "12712",
"name": "New York John F. Kennedy",
"displayCode": "JFK",
"city": "New York"
},
"duration": 495,
"dayChange": 0,
"flightNumber": "Z0701",
"departure": "2024-02-20T12:35:00",
"arrival": "2024-02-20T15:50:00",
"marketingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
},
"operatingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
}
}
],
"isDirectDBookUrl": false,
"quoteAge": 3
}
],
"totalPrice": 277.98
},
{
"agents": [
{
"id": "tlcy",
"name": "Travelocity",
"isCarrier": false,
"bookingProposition": "PBOOK",
"url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/tlcy/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|QEL|Q|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=277.98&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mIpyUmuFGLmuKUixczRo6vQcP38OjYjJgVGALHE7-4cAAAA|-2471706304482540542|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:17&pqid=true",
"price": 277.98,
"rating": {
"value": 1.67,
"count": 467
},
"updateStatus": "CURRENT",
"segments": [
{
"id": "13542-12712-2402201235-2402201550--30598",
"origin": {
"id": "13542",
"name": "London Gatwick",
"displayCode": "LGW",
"city": "London"
},
"destination": {
"id": "12712",
"name": "New York John F. Kennedy",
"displayCode": "JFK",
"city": "New York"
},
"duration": 495,
"dayChange": 0,
"flightNumber": "Z0701",
"departure": "2024-02-20T12:35:00",
"arrival": "2024-02-20T15:50:00",
"marketingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
},
"operatingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
}
}
],
"isDirectDBookUrl": false,
"quoteAge": 3
}
],
"totalPrice": 277.98
},
{
"agents": [
{
"id": "skyp",
"name": "Kiwi.com",
"isCarrier": false,
"bookingProposition": "PBOOK",
"url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/skyp/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|-|-|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=280.00&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mIpzq4sEGLmuKUixczRo6vQcP38OjYjJgVGAEFEgi0cAAAA|-2328735851777417191|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:09&pqid=true",
"price": 280,
"rating": {
"value": 2.92,
"count": 12352
},
"updateStatus": "CURRENT",
"segments": [
{
"id": "13542-12712-2402201235-2402201550--30598",
"origin": {
"id": "13542",
"name": "London Gatwick",
"displayCode": "LGW",
"city": "London"
},
"destination": {
"id": "12712",
"name": "New York John F. Kennedy",
"displayCode": "JFK",
"city": "New York"
},
"duration": 495,
"dayChange": 0,
"flightNumber": "Z0701",
"departure": "2024-02-20T12:35:00",
"arrival": "2024-02-20T15:50:00",
"marketingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
},
"operatingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
}
}
],
"isDirectDBookUrl": false,
"quoteAge": 3
}
],
"totalPrice": 280
},
{
"agents": [
{
"id": "pcln",
"name": "Priceline",
"isCarrier": false,
"bookingProposition": "PBOOK",
"url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/pcln/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|QEL|Q|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=279.08&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mIpSM7JE2LmuKUixczRo6vQcP38OjYjJgVGAJINcA8cAAAA|836989890372451239|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:04&pqid=false",
"price": 279.08,
"rating": {
"value": 1.87,
"count": 2029
},
"updateStatus": "CURRENT",
"segments": [
{
"id": "13542-12712-2402201235-2402201550--30598",
"origin": {
"id": "13542",
"name": "London Gatwick",
"displayCode": "LGW",
"city": "London"
},
"destination": {
"id": "12712",
"name": "New York John F. Kennedy",
"displayCode": "JFK",
"city": "New York"
},
"duration": 495,
"dayChange": 0,
"flightNumber": "Z0701",
"departure": "2024-02-20T12:35:00",
"arrival": "2024-02-20T15:50:00",
"marketingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
},
"operatingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
}
}
],
"isDirectDBookUrl": false,
"quoteAge": 3
}
],
"totalPrice": 279.08
},
{
"agents": [
{
"id": "cust",
"name": "Trip.com",
"isCarrier": false,
"bookingProposition": "PBOOK",
"url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/cust/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|-|-|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=282.00&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mJJLi0uEWLmuKUixczRo6vQcP38OjYjJgVGAFdnAjscAAAA|-1392380853158557016|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:08&pqid=true",
"price": 282,
"rating": {
"value": 3.67,
"count": 30283
},
"updateStatus": "CURRENT",
"segments": [
{
"id": "13542-12712-2402201235-2402201550--30598",
"origin": {
"id": "13542",
"name": "London Gatwick",
"displayCode": "LGW",
"city": "London"
},
"destination": {
"id": "12712",
"name": "New York John F. Kennedy",
"displayCode": "JFK",
"city": "New York"
},
"duration": 495,
"dayChange": 0,
"flightNumber": "Z0701",
"departure": "2024-02-20T12:35:00",
"arrival": "2024-02-20T15:50:00",
"marketingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
},
"operatingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
}
}
],
"isDirectDBookUrl": false,
"quoteAge": 3
}
],
"totalPrice": 282
},
{
"agents": [
{
"id": "jfus",
"name": "JustFly",
"isCarrier": false,
"bookingProposition": "PBOOK",
"url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/jfus/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|QEL|Q|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=282.98&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mLJSistFmLmuKUixczRo6vQcP38OjYjJgVGAGddqwQcAAAA|836989890372451239|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:06&pqid=false",
"price": 282.98,
"rating": {
"value": 3.38,
"count": 6951
},
"updateStatus": "CURRENT",
"segments": [
{
"id": "13542-12712-2402201235-2402201550--30598",
"origin": {
"id": "13542",
"name": "London Gatwick",
"displayCode": "LGW",
"city": "London"
},
"destination": {
"id": "12712",
"name": "New York John F. Kennedy",
"displayCode": "JFK",
"city": "New York"
},
"duration": 495,
"dayChange": 0,
"flightNumber": "Z0701",
"departure": "2024-02-20T12:35:00",
"arrival": "2024-02-20T15:50:00",
"marketingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
},
"operatingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
}
}
],
"isDirectDBookUrl": false,
"quoteAge": 3
}
],
"totalPrice": 282.98
},
{
"agents": [
{
"id": "chpo",
"name": "CheapOair",
"isCarrier": false,
"bookingProposition": "PBOOK",
"url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/chpo/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|-|-|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=283.98&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mJJzijIF2LmuKUixczRo6vQcP38OjYjJgVGAEPdlo0cAAAA|-2328735851777417191|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:11&pqid=false",
"price": 283.98,
"rating": {
"value": 2.57,
"count": 3276
},
"updateStatus": "CURRENT",
"segments": [
{
"id": "13542-12712-2402201235-2402201550--30598",
"origin": {
"id": "13542",
"name": "London Gatwick",
"displayCode": "LGW",
"city": "London"
},
"destination": {
"id": "12712",
"name": "New York John F. Kennedy",
"displayCode": "JFK",
"city": "New York"
},
"duration": 495,
"dayChange": 0,
"flightNumber": "Z0701",
"departure": "2024-02-20T12:35:00",
"arrival": "2024-02-20T15:50:00",
"marketingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
},
"operatingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
}
}
],
"isDirectDBookUrl": false,
"quoteAge": 3
}
],
"totalPrice": 283.98
},
{
"agents": [
{
"id": "bcom",
"name": "Booking.com",
"isCarrier": false,
"bookingProposition": "PBOOK",
"url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/bcom/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|-|-|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=285.99&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mJJSs7PFWLmuKUixczRo6vQcP38OjYjJgVGAAORRuscAAAA|3610398678000586459|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:04&pqid=true",
"price": 285.99,
"rating": {
"value": 3.63,
"count": 7583
},
"updateStatus": "CURRENT",
"segments": [
{
"id": "13542-12712-2402201235-2402201550--30598",
"origin": {
"id": "13542",
"name": "London Gatwick",
"displayCode": "LGW",
"city": "London"
},
"destination": {
"id": "12712",
"name": "New York John F. Kennedy",
"displayCode": "JFK",
"city": "New York"
},
"duration": 495,
"dayChange": 0,
"flightNumber": "Z0701",
"departure": "2024-02-20T12:35:00",
"arrival": "2024-02-20T15:50:00",
"marketingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
},
"operatingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
}
}
],
"isDirectDBookUrl": false,
"quoteAge": 3
}
],
"totalPrice": 285.99
},
{
"agents": [
{
"id": "vaya",
"name": "BudgetAir",
"isCarrier": false,
"bookingProposition": "PBOOK",
"url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/vaya/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|-|-|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=286.00&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mIpS6xMFGLmuKUixczRo6vQcP38OjYjJgVGAIS-sPwcAAAA|589607429926384355|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:16&pqid=true",
"price": 286,
"rating": {
"value": 2.85,
"count": 5155
},
"updateStatus": "CURRENT",
"segments": [
{
"id": "13542-12712-2402201235-2402201550--30598",
"origin": {
"id": "13542",
"name": "London Gatwick",
"displayCode": "LGW",
"city": "London"
},
"destination": {
"id": "12712",
"name": "New York John F. Kennedy",
"displayCode": "JFK",
"city": "New York"
},
"duration": 495,
"dayChange": 0,
"flightNumber": "Z0701",
"departure": "2024-02-20T12:35:00",
"arrival": "2024-02-20T15:50:00",
"marketingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
},
"operatingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
}
}
],
"isDirectDBookUrl": false,
"quoteAge": 3
}
],
"totalPrice": 286
},
{
"agents": [
{
"id": "bfus",
"name": "Bravofly",
"isCarrier": false,
"bookingProposition": "PBOOK",
"url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/bfus/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|-|Q|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=287.37&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mJJSistFmLmuKUixczRo6vQcP38OjYjJgVGANlhptYcAAAA|-6737075005787650101|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:02&pqid=true",
"price": 287.37,
"rating": {
"value": 2.69,
"count": 2763
},
"updateStatus": "CURRENT",
"segments": [
{
"id": "13542-12712-2402201235-2402201550--30598",
"origin": {
"id": "13542",
"name": "London Gatwick",
"displayCode": "LGW",
"city": "London"
},
"destination": {
"id": "12712",
"name": "New York John F. Kennedy",
"displayCode": "JFK",
"city": "New York"
},
"duration": 495,
"dayChange": 0,
"flightNumber": "Z0701",
"departure": "2024-02-20T12:35:00",
"arrival": "2024-02-20T15:50:00",
"marketingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
},
"operatingCarrier": {
"id": "-30598",
"name": "Norse Atlantic Airways (UK)",
"displayCode": "Z0",
"displayCodeType": "IATA",
"logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
"altId": "I)"
}
}
],
"isDirectDBookUrl": false,
"quoteAge": 3
}
],
"totalPrice": 287.37
}
],
"isTransferRequired": false,
"destinationImage": "https://content.skyscnr.com/b62fd4346123d1eb9f7525c8f72f2a8a/stock-photo-new-york-city-at-twilight-128894587.jpg",
"operatingCarrierSafetyAttributes": [
{
"carrierID": "-30598",
"carrierName": "Norse Atlantic Airways (UK)",
"faceMasksCompulsory": null,
"aircraftDeepCleanedDaily": null,
"attendantsWearPPE": null,
"cleaningPacksProvided": null,
"foodServiceChanges": null,
"safetyUrl": null
}
],
"flexibleTicketPolicies": []
},
"pollingCompleted": true
}
}
curl --request GET
--url 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/getPriceCalendar?originSkyId=BOM&destinationSkyId=JFK&fromDate=2024-02-20&currency=USD'
--header 'x-rapidapi-host: sky-scrapper.p.rapidapi.com'
--header 'x-rapidapi-key: f197b6d294mshcf64ed89b1ef4a5p1ba9bajsn890a70a56fe9'
response:
{
"status": true,
"timestamp": 1691009466416,
"data": {
"flights": {
"noPriceLabel": "No price information",
"groups": [
{
"id": "low",
"label": "$"
},
{
"id": "medium",
"label": "$$"
},
{
"id": "high",
"label": "$$$"
}
],
"days": [
{
"day": "2023-08-03",
"group": "high",
"price": 1146.99
},
{
"day": "2023-08-04",
"group": "high",
"price": 1205.14
},
{
"day": "2023-08-05",
"group": "high",
"price": 1043.07
},
{
"day": "2023-08-06",
"group": "high",
"price": 1246.98
},
{
"day": "2023-08-07",
"group": "high",
"price": 1027.98
},
{
"day": "2023-08-08",
"group": "high",
"price": 1274.29
},
{
"day": "2023-08-09",
"group": "high",
"price": 1191.99
},
{
"day": "2023-08-10",
"group": "high",
"price": 1012.99
},
{
"day": "2023-08-11",
"group": "high",
"price": 1142.49
},
{
"day": "2023-08-12",
"group": "high",
"price": 1125.07
},
{
"day": "2023-08-13",
"group": "high",
"price": 1132.64
},
{
"day": "2023-08-14",
"group": "high",
"price": 1217.79
},
{
"day": "2023-08-15",
"group": "high",
"price": 1169.27
},
{
"day": "2023-08-16",
"group": "high",
"price": 1158.29
},
{
"day": "2023-08-17",
"group": "high",
"price": 1323.69
},
{
"day": "2023-08-18",
"group": "high",
"price": 1242.99
},
{
"day": "2023-08-19",
"group": "high",
"price": 1247.98
},
{
"day": "2023-08-20",
"group": "high",
"price": 965.98
},
{
"day": "2023-08-21",
"group": "high",
"price": 1216.98
},
{
"day": "2023-08-22",
"group": "high",
"price": 985.89
},
{
"day": "2023-08-23",
"group": "high",
"price": 1104.59
},
{
"day": "2023-08-24",
"group": "high",
"price": 1057.39
},
{
"day": "2023-08-25",
"group": "high",
"price": 958.84
},
{
"day": "2023-08-26",
"group": "high",
"price": 1471.78
},
{
"day": "2023-08-27",
"group": "high",
"price": 977.99
},
{
"day": "2023-08-28",
"group": "high",
"price": 1125.07
},
{
"day": "2023-08-29",
"group": "high",
"price": 811.99
},
{
"day": "2023-08-30",
"group": "high",
"price": 860.29
},
{
"day": "2023-08-31",
"group": "high",
"price": 799.89
},
{
"day": "2023-09-01",
"group": "high",
"price": 829.09
},
{
"day": "2023-09-02",
"group": "high",
"price": 1312.5
},
{
"day": "2023-09-03",
"group": "high",
"price": 1132.64
},
{
"day": "2023-09-04",
"group": "high",
"price": 787.94
},
{
"day": "2023-09-05",
"group": "medium",
"price": 731.79
},
{
"day": "2023-09-06",
"group": "medium",
"price": 691.99
},
{
"day": "2023-09-07",
"group": "medium",
"price": 650.39
},
{
"day": "2023-09-08",
"group": "medium",
"price": 682.99
},
{
"day": "2023-09-09",
"group": "medium",
"price": 690.61
},
{
"day": "2023-09-10",
"group": "low",
"price": 552.39
},
{
"day": "2023-09-11",
"group": "medium",
"price": 680.63
},
{
"day": "2023-09-12",
"group": "low",
"price": 549.4
},
{
"day": "2023-09-13",
"group": "low",
"price": 548.99
},
{
"day": "2023-09-14",
"group": "low",
"price": 506.46
},
{
"day": "2023-09-15",
"group": "low",
"price": 560.34
},
{
"day": "2023-09-16",
"group": "medium",
"price": 610.46
},
{
"day": "2023-09-17",
"group": "medium",
"price": 610.01
},
{
"day": "2023-09-18",
"group": "medium",
"price": 571.15
},
{
"day": "2023-09-19",
"group": "low",
"price": 564.23
},
{
"day": "2023-09-20",
"group": "low",
"price": 525.23
},
{
"day": "2023-09-21",
"group": "medium",
"price": 612.66
},
{
"day": "2023-09-22",
"group": "low",
"price": 507.09
},
{
"day": "2023-09-23",
"group": "medium",
"price": 589.21
},
{
"day": "2023-09-24",
"group": "low",
"price": 475.21
},
{
"day": "2023-09-25",
"group": "low",
"price": 541.66
},
{
"day": "2023-09-26",
"group": "low",
"price": 549.4
},
{
"day": "2023-09-27",
"group": "low",
"price": 562.7
},
{
"day": "2023-09-28",
"group": "low",
"price": 507.09
},
{
"day": "2023-09-29",
"group": "low",
"price": 565.23
},
{
"day": "2023-09-30",
"group": "medium",
"price": 610.46
},
{
"day": "2023-10-01",
"group": "medium",
"price": 593.33
},
{
"day": "2023-10-02",
"group": "low",
"price": 525.73
},
{
"day": "2023-10-03",
"group": "low",
"price": 549.4
},
{
"day": "2023-10-04",
"group": "low",
"price": 534.46
},
{
"day": "2023-10-05",
"group": "low",
"price": 563.34
},
{
"day": "2023-10-06",
"group": "low",
"price": 537.07
},
{
"day": "2023-10-07",
"group": "medium",
"price": 594.12
},
{
"day": "2023-10-08",
"group": "medium",
"price": 576.52
},
{
"day": "2023-10-09",
"group": "low",
"price": 509.88
},
{
"day": "2023-10-10",
"group": "medium",
"price": 576.95
},
{
"day": "2023-10-11",
"group": "medium",
"price": 571.03
},
{
"day": "2023-10-12",
"group": "low",
"price": 424.87
},
{
"day": "2023-10-13",
"group": "medium",
"price": 572.26
},
{
"day": "2023-10-14",
"group": "medium",
"price": 575.21
},
{
"day": "2023-10-15",
"group": "medium",
"price": 581.29
},
{
"day": "2023-10-16",
"group": "medium",
"price": 571.65
},
{
"day": "2023-10-17",
"group": "low",
"price": 543.14
},
{
"day": "2023-10-18",
"group": "low",
"price": 545.73
},
{
"day": "2023-10-19",
"group": "medium",
"price": 569.97
},
{
"day": "2023-10-20",
"group": "medium",
"price": 610.46
},
{
"day": "2023-10-21",
"group": "medium",
"price": 608.16
},
{
"day": "2023-10-22",
"group": "medium",
"price": 610.46
},
{
"day": "2023-10-23",
"group": "medium",
"price": 571.65
},
{
"day": "2023-10-24",
"group": "low",
"price": 561.62
},
{
"day": "2023-10-25",
"group": "low",
"price": 561.62
},
{
"day": "2023-10-26",
"group": "medium",
"price": 571.65
},
{
"day": "2023-10-27",
"group": "medium",
"price": 610.46
},
{
"day": "2023-10-28",
"group": "medium",
"price": 610.46
},
{
"day": "2023-10-29",
"group": "medium",
"price": 617.78
},
{
"day": "2023-10-30",
"group": "medium",
"price": 571.65
},
{
"day": "2023-10-31",
"group": "low",
"price": 562.19
},
{
"day": "2023-11-01",
"group": "low",
"price": 562.76
},
{
"day": "2023-11-02",
"group": "low",
"price": 548.99
},
{
"day": "2023-11-03",
"group": "medium",
"price": 591.64
},
{
"day": "2023-11-04",
"group": "medium",
"price": 610.46
},
{
"day": "2023-11-05",
"group": "medium",
"price": 593.35
},
{
"day": "2023-11-06",
"group": "low",
"price": 542.66
},
{
"day": "2023-11-07",
"group": "low",
"price": 541.61
},
{
"day": "2023-11-08",
"group": "low",
"price": 531.74
},
{
"day": "2023-11-09",
"group": "medium",
"price": 717.54
},
{
"day": "2023-11-10",
"group": "medium",
"price": 610.2
},
{
"day": "2023-11-11",
"group": "medium",
"price": 610.01
},
{
"day": "2023-11-13",
"group": "low",
"price": 569.56
},
{
"day": "2023-11-14",
"group": "medium",
"price": 569.97
},
{
"day": "2023-11-15",
"group": "low",
"price": 562.19
},
{
"day": "2023-11-16",
"group": "medium",
"price": 571.22
},
{
"day": "2023-11-17",
"group": "medium",
"price": 590.03
},
{
"day": "2023-11-18",
"group": "medium",
"price": 599.27
},
{
"day": "2023-11-19",
"group": "medium",
"price": 611.46
},
{
"day": "2023-11-21",
"group": "medium",
"price": 569.97
},
{
"day": "2023-11-22",
"group": "medium",
"price": 569.97
},
{
"day": "2023-11-23",
"group": "low",
"price": 547.48
},
{
"day": "2023-11-24",
"group": "medium",
"price": 578.22
},
{
"day": "2023-11-25",
"group": "medium",
"price": 610.46
},
{
"day": "2023-11-26",
"group": "medium",
"price": 623.95
},
{
"day": "2023-11-27",
"group": "medium",
"price": 606.66
},
{
"day": "2023-11-28",
"group": "medium",
"price": 606.66
},
{
"day": "2023-11-29",
"group": "low",
"price": 563.34
},
{
"day": "2023-11-30",
"group": "low",
"price": 560.92
},
{
"day": "2023-12-01",
"group": "medium",
"price": 624.04
},
{
"day": "2023-12-02",
"group": "medium",
"price": 715.29
},
{
"day": "2023-12-03",
"group": "medium",
"price": 611.51
},
{
"day": "2023-12-04",
"group": "medium",
"price": 580.74
},
{
"day": "2023-12-05",
"group": "medium",
"price": 579.74
},
{
"day": "2023-12-07",
"group": "low",
"price": 563.34
},
{
"day": "2023-12-08",
"group": "medium",
"price": 621.35
},
{
"day": "2023-12-09",
"group": "medium",
"price": 617.32
},
{
"day": "2023-12-10",
"group": "medium",
"price": 620.89
},
{
"day": "2023-12-11",
"group": "low",
"price": 569.44
},
{
"day": "2023-12-12",
"group": "medium",
"price": 575.1
},
{
"day": "2023-12-13",
"group": "medium",
"price": 572.8
},
{
"day": "2023-12-14",
"group": "low",
"price": 563.34
},
{
"day": "2023-12-15",
"group": "medium",
"price": 597.89
},
{
"day": "2023-12-16",
"group": "high",
"price": 777.69
},
{
"day": "2023-12-17",
"group": "medium",
"price": 578.22
},
{
"day": "2023-12-18",
"group": "medium",
"price": 571.65
},
{
"day": "2023-12-20",
"group": "high",
"price": 745.82
},
{
"day": "2023-12-22",
"group": "medium",
"price": 620.89
},
{
"day": "2023-12-24",
"group": "medium",
"price": 621.35
},
{
"day": "2023-12-25",
"group": "medium",
"price": 582.72
},
{
"day": "2023-12-26",
"group": "medium",
"price": 683.57
},
{
"day": "2023-12-27",
"group": "medium",
"price": 681.73
},
{
"day": "2023-12-28",
"group": "medium",
"price": 745.81
},
{
"day": "2023-12-29",
"group": "high",
"price": 828.96
},
{
"day": "2023-12-30",
"group": "high",
"price": 780.3
},
{
"day": "2023-12-31",
"group": "high",
"price": 868.42
},
{
"day": "2024-01-01",
"group": "high",
"price": 995.29
},
{
"day": "2024-01-02",
"group": "high",
"price": 867.32
},
{
"day": "2024-01-03",
"group": "high",
"price": 795.58
},
{
"day": "2024-01-04",
"group": "high",
"price": 758.17
},
{
"day": "2024-01-05",
"group": "high",
"price": 796.41
},
{
"day": "2024-01-06",
"group": "high",
"price": 859.39
},
{
"day": "2024-01-07",
"group": "high",
"price": 797.91
},
{
"day": "2024-01-08",
"group": "high",
"price": 849.98
},
{
"day": "2024-01-09",
"group": "medium",
"price": 665.46
},
{
"day": "2024-01-10",
"group": "medium",
"price": 699.22
},
{
"day": "2024-01-11",
"group": "high",
"price": 754.77
},
{
"day": "2024-01-12",
"group": "medium",
"price": 690.73
},
{
"day": "2024-01-13",
"group": "medium",
"price": 744.19
},
{
"day": "2024-01-14",
"group": "medium",
"price": 732.05
},
{
"day": "2024-01-15",
"group": "medium",
"price": 647.99
},
{
"day": "2024-01-16",
"group": "medium",
"price": 614.44
},
{
"day": "2024-01-17",
"group": "medium",
"price": 678.84
},
{
"day": "2024-01-18",
"group": "medium",
"price": 707.2
},
{
"day": "2024-01-19",
"group": "medium",
"price": 717.79
},
{
"day": "2024-01-20",
"group": "medium",
"price": 718.11
},
{
"day": "2024-01-21",
"group": "medium",
"price": 619.51
},
{
"day": "2024-01-22",
"group": "medium",
"price": 575.54
},
{
"day": "2024-01-24",
"group": "medium",
"price": 575.22
},
{
"day": "2024-01-26",
"group": "medium",
"price": 615.94
},
{
"day": "2024-01-27",
"group": "high",
"price": 2386.23
},
{
"day": "2024-01-28",
"group": "high",
"price": 1506.57
},
{
"day": "2024-01-30",
"group": "low",
"price": 538.71
},
{
"day": "2024-01-31",
"group": "medium",
"price": 575.22
},
{
"day": "2024-02-01",
"group": "medium",
"price": 571.65
},
{
"day": "2024-02-02",
"group": "medium",
"price": 598.52
},
{
"day": "2024-02-03",
"group": "medium",
"price": 598.52
},
{
"day": "2024-02-04",
"group": "low",
"price": 538.71
},
{
"day": "2024-02-05",
"group": "low",
"price": 569.44
},
{
"day": "2024-02-06",
"group": "low",
"price": 536.65
},
{
"day": "2024-02-07",
"group": "medium",
"price": 606.66
},
{
"day": "2024-02-10",
"group": "medium",
"price": 631.48
},
{
"day": "2024-02-13",
"group": "low",
"price": 536.65
},
{
"day": "2024-02-16",
"group": "medium",
"price": 617.78
},
{
"day": "2024-02-18",
"group": "low",
"price": 526.8
},
{
"day": "2024-02-21",
"group": "medium",
"price": 569.97
},
{
"day": "2024-02-22",
"group": "medium",
"price": 571.65
},
{
"day": "2024-02-25",
"group": "low",
"price": 544.66
},
{
"day": "2024-02-26",
"group": "low",
"price": 569.44
},
{
"day": "2024-02-27",
"group": "low",
"price": 526.67
},
{
"day": "2024-02-28",
"group": "high",
"price": 2343.32
},
{
"day": "2024-02-29",
"group": "low",
"price": 566.86
},
{
"day": "2024-03-01",
"group": "medium",
"price": 615.94
},
{
"day": "2024-03-02",
"group": "medium",
"price": 615.5
},
{
"day": "2024-03-04",
"group": "medium",
"price": 584.08
},
{
"day": "2024-03-06",
"group": "low",
"price": 569.38
},
{
"day": "2024-03-07",
"group": "high",
"price": 1084.26
},
{
"day": "2024-03-09",
"group": "medium",
"price": 615.5
},
{
"day": "2024-03-10",
"group": "low",
"price": 536.65
},
{
"day": "2024-03-15",
"group": "medium",
"price": 615.5
},
{
"day": "2024-03-18",
"group": "low",
"price": 569.38
},
{
"day": "2024-03-21",
"group": "low",
"price": 569.45
},
{
"day": "2024-03-25",
"group": "medium",
"price": 571.65
},
{
"day": "2024-03-26",
"group": "medium",
"price": 571.95
},
{
"day": "2024-04-02",
"group": "medium",
"price": 569.97
},
{
"day": "2024-04-04",
"group": "medium",
"price": 571.22
},
{
"day": "2024-04-07",
"group": "medium",
"price": 647.69
},
{
"day": "2024-04-11",
"group": "low",
"price": 569.45
},
{
"day": "2024-04-12",
"group": "medium",
"price": 617.32
},
{
"day": "2024-04-15",
"group": "high",
"price": 1085.78
},
{
"day": "2024-04-17",
"group": "high",
"price": 754.74
},
{
"day": "2024-04-21",
"group": "medium",
"price": 597.89
},
{
"day": "2024-04-23",
"group": "medium",
"price": 569.97
},
{
"day": "2024-04-24",
"group": "medium",
"price": 716.21
},
{
"day": "2024-04-29",
"group": "low",
"price": 569.45
},
{
"day": "2024-05-01",
"group": "medium",
"price": 654.72
},
{
"day": "2024-05-04",
"group": "medium",
"price": 655.62
},
{
"day": "2024-05-06",
"group": "medium",
"price": 652.34
},
{
"day": "2024-05-08",
"group": "medium",
"price": 610.57
},
{
"day": "2024-05-10",
"group": "medium",
"price": 617.32
},
{
"day": "2024-05-15",
"group": "medium",
"price": 716.12
},
{
"day": "2024-05-19",
"group": "medium",
"price": 615.5
},
{
"day": "2024-05-21",
"group": "medium",
"price": 571.65
},
{
"day": "2024-05-22",
"group": "medium",
"price": 571.65
},
{
"day": "2024-05-28",
"group": "low",
"price": 569.45
},
{
"day": "2024-05-30",
"group": "low",
"price": 566.47
},
{
"day": "2024-05-31",
"group": "medium",
"price": 617.78
},
{
"day": "2024-06-01",
"group": "medium",
"price": 621.35
},
{
"day": "2024-06-02",
"group": "medium",
"price": 603.36
},
{
"day": "2024-06-08",
"group": "medium",
"price": 716.21
},
{
"day": "2024-06-10",
"group": "medium",
"price": 571.65
},
{
"day": "2024-06-12",
"group": "medium",
"price": 569.97
},
{
"day": "2024-06-16",
"group": "medium",
"price": 603.98
},
{
"day": "2024-06-19",
"group": "high",
"price": 757.99
},
{
"day": "2024-06-25",
"group": "low",
"price": 569.38
},
{
"day": "2024-06-26",
"group": "medium",
"price": 571.53
},
{
"day": "2024-06-28",
"group": "high",
"price": 1066.76
},
{
"day": "2024-06-30",
"group": "medium",
"price": 619.08
},
{
"day": "2024-07-01",
"group": "medium",
"price": 707.4
},
{
"day": "2024-07-12",
"group": "high",
"price": 756.06
},
{
"day": "2024-07-17",
"group": "high",
"price": 1044.98
},
{
"day": "2024-07-18",
"group": "high",
"price": 756.34
},
{
"day": "2024-07-21",
"group": "high",
"price": 756.06
},
{
"day": "2024-07-25",
"group": "high",
"price": 767.8
},
{
"day": "2024-07-26",
"group": "high",
"price": 1482.57
}
],
"currency": "USD"
}
}
}
curl --request GET
--url 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlightsMultiStops?legs=%5B%7B%22origin%22%3A%22AMD%22%2C%22originEntityId%22%3A%2295673366%22%2C%22destination%22%3A%22STV%22%2C%22destinationEntityId%22%3A%22128667060%22%2C%22date%22%3A%222025-02-07%22%7D%2C%7B%22originEntityId%22%3A%22128667060%22%2C%22destination%22%3A%22BOM%22%2C%22destinationEntityId%22%3A%2295673320%22%2C%22origin%22%3A%22STV%22%2C%22date%22%3A%222025-02-12%22%7D%5D&cabinClass=economy&adults=1&sortBy=best&currency=USD&countryCode=US&market=en-US'
--header 'x-rapidapi-host: sky-scrapper.p.rapidapi.com'
--header 'x-rapidapi-key: f197b6d294mshcf64ed89b1ef4a5p1ba9bajsn890a70a56fe9'
response:
{
"status": true,
"message": "Success",
"timestamp": 1691009739429,
"sessionId": "ce050f44-fca4-4609-81d2-5e07c4f97d8c",
"data": {
"context": {
"status": "incomplete",
"totalResults": 10
},
"itineraries": [
{
"id": "9436-2402071535--31435,-31475-1-16581-2402072100|16581-2402122130--31475-1-10075-2402130400",
"price": {
"raw": 309,
"formatted": "$309"
},
"legs": [
{
"id": "9436-2402071535--31435,-31475-1-16581-2402072100",
"origin": {
"id": "AMD",
"name": "Ahmedabad",
"displayCode": "AMD",
"city": "Ahmedabad",
"isHighlighted": false
},
"destination": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"durationInMinutes": 325,
"stopCount": 1,
"isSmallestStops": false,
"departure": "2024-02-07T15:35:00",
"arrival": "2024-02-07T21:00:00",
"timeDeltaInDays": 0,
"carriers": {
"marketing": [
{
"id": -31435,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/IK.png",
"name": "Vistara"
},
{
"id": -31475,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/04.png",
"name": "AirAsia India"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "9436-10957-2402071535-2402071710--31435",
"origin": {
"flightPlaceId": "AMD",
"displayCode": "AMD",
"parent": {
"flightPlaceId": "IAMD",
"displayCode": "AMD",
"name": "Ahmedabad",
"type": "City"
},
"name": "Ahmedabad",
"type": "Airport"
},
"destination": {
"flightPlaceId": "DEL",
"displayCode": "DEL",
"parent": {
"flightPlaceId": "IDEL",
"displayCode": "DEL",
"name": "New Delhi",
"type": "City"
},
"name": "Indira Gandhi International ",
"type": "Airport"
},
"departure": "2024-02-07T15:35:00",
"arrival": "2024-02-07T17:10:00",
"durationInMinutes": 95,
"flightNumber": "976",
"marketingCarrier": {
"id": -31435,
"name": "Vistara",
"alternateId": "IK",
"allianceId": 0
},
"operatingCarrier": {
"id": -31435,
"name": "Vistara",
"alternateId": "IK",
"allianceId": 0
}
},
{
"id": "10957-16581-2402071925-2402072100--31475",
"origin": {
"flightPlaceId": "DEL",
"displayCode": "DEL",
"parent": {
"flightPlaceId": "IDEL",
"displayCode": "DEL",
"name": "New Delhi",
"type": "City"
},
"name": "Indira Gandhi International ",
"type": "Airport"
},
"destination": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"departure": "2024-02-07T19:25:00",
"arrival": "2024-02-07T21:00:00",
"durationInMinutes": 95,
"flightNumber": "1569",
"marketingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
},
"operatingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
}
}
]
},
{
"id": "16581-2402122130--31475-1-10075-2402130400",
"origin": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"destination": {
"id": "BOM",
"name": "Mumbai",
"displayCode": "BOM",
"city": "Mumbai",
"isHighlighted": false
},
"durationInMinutes": 390,
"stopCount": 1,
"isSmallestStops": false,
"departure": "2024-02-12T21:30:00",
"arrival": "2024-02-13T04:00:00",
"timeDeltaInDays": 1,
"carriers": {
"marketing": [
{
"id": -31475,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/04.png",
"name": "AirAsia India"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "16581-10002-2402122130-2402122335--31475",
"origin": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"destination": {
"flightPlaceId": "BLR",
"displayCode": "BLR",
"parent": {
"flightPlaceId": "IBLR",
"displayCode": "BLR",
"name": "Bengaluru",
"type": "City"
},
"name": "Bengaluru",
"type": "Airport"
},
"departure": "2024-02-12T21:30:00",
"arrival": "2024-02-12T23:35:00",
"durationInMinutes": 125,
"flightNumber": "1569",
"marketingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
},
"operatingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
}
},
{
"id": "10002-10075-2402130200-2402130400--31475",
"origin": {
"flightPlaceId": "BLR",
"displayCode": "BLR",
"parent": {
"flightPlaceId": "IBLR",
"displayCode": "BLR",
"name": "Bengaluru",
"type": "City"
},
"name": "Bengaluru",
"type": "Airport"
},
"destination": {
"flightPlaceId": "BOM",
"displayCode": "BOM",
"parent": {
"flightPlaceId": "IBOM",
"displayCode": "BOM",
"name": "Mumbai",
"type": "City"
},
"name": "Mumbai",
"type": "Airport"
},
"departure": "2024-02-13T02:00:00",
"arrival": "2024-02-13T04:00:00",
"durationInMinutes": 120,
"flightNumber": "472",
"marketingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
},
"operatingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
}
}
]
}
],
"isSelfTransfer": false,
"isProtectedSelfTransfer": true,
"farePolicy": {
"isChangeAllowed": false,
"isPartiallyChangeable": false,
"isCancellationAllowed": false,
"isPartiallyRefundable": false
},
"tags": [
"third_cheapest",
"third_shortest"
],
"isMashUp": false,
"hasFlexibleOptions": false,
"score": 0.771111
},
{
"id": "9436-2402071535--31435,-31475-1-16581-2402072100|16581-2402121700--31475,-31435-1-10075-2402122300",
"price": {
"raw": 336,
"formatted": "$336"
},
"legs": [
{
"id": "9436-2402071535--31435,-31475-1-16581-2402072100",
"origin": {
"id": "AMD",
"name": "Ahmedabad",
"displayCode": "AMD",
"city": "Ahmedabad",
"isHighlighted": false
},
"destination": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"durationInMinutes": 325,
"stopCount": 1,
"isSmallestStops": false,
"departure": "2024-02-07T15:35:00",
"arrival": "2024-02-07T21:00:00",
"timeDeltaInDays": 0,
"carriers": {
"marketing": [
{
"id": -31435,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/IK.png",
"name": "Vistara"
},
{
"id": -31475,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/04.png",
"name": "AirAsia India"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "9436-10957-2402071535-2402071710--31435",
"origin": {
"flightPlaceId": "AMD",
"displayCode": "AMD",
"parent": {
"flightPlaceId": "IAMD",
"displayCode": "AMD",
"name": "Ahmedabad",
"type": "City"
},
"name": "Ahmedabad",
"type": "Airport"
},
"destination": {
"flightPlaceId": "DEL",
"displayCode": "DEL",
"parent": {
"flightPlaceId": "IDEL",
"displayCode": "DEL",
"name": "New Delhi",
"type": "City"
},
"name": "Indira Gandhi International ",
"type": "Airport"
},
"departure": "2024-02-07T15:35:00",
"arrival": "2024-02-07T17:10:00",
"durationInMinutes": 95,
"flightNumber": "976",
"marketingCarrier": {
"id": -31435,
"name": "Vistara",
"alternateId": "IK",
"allianceId": 0
},
"operatingCarrier": {
"id": -31435,
"name": "Vistara",
"alternateId": "IK",
"allianceId": 0
}
},
{
"id": "10957-16581-2402071925-2402072100--31475",
"origin": {
"flightPlaceId": "DEL",
"displayCode": "DEL",
"parent": {
"flightPlaceId": "IDEL",
"displayCode": "DEL",
"name": "New Delhi",
"type": "City"
},
"name": "Indira Gandhi International ",
"type": "Airport"
},
"destination": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"departure": "2024-02-07T19:25:00",
"arrival": "2024-02-07T21:00:00",
"durationInMinutes": 95,
"flightNumber": "1569",
"marketingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
},
"operatingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
}
}
]
},
{
"id": "16581-2402121700--31475,-31435-1-10075-2402122300",
"origin": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"destination": {
"id": "BOM",
"name": "Mumbai",
"displayCode": "BOM",
"city": "Mumbai",
"isHighlighted": false
},
"durationInMinutes": 360,
"stopCount": 1,
"isSmallestStops": false,
"departure": "2024-02-12T17:00:00",
"arrival": "2024-02-12T23:00:00",
"timeDeltaInDays": 0,
"carriers": {
"marketing": [
{
"id": -31475,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/04.png",
"name": "AirAsia India"
},
{
"id": -31435,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/IK.png",
"name": "Vistara"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "16581-10957-2402121700-2402121850--31475",
"origin": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"destination": {
"flightPlaceId": "DEL",
"displayCode": "DEL",
"parent": {
"flightPlaceId": "IDEL",
"displayCode": "DEL",
"name": "New Delhi",
"type": "City"
},
"name": "Indira Gandhi International ",
"type": "Airport"
},
"departure": "2024-02-12T17:00:00",
"arrival": "2024-02-12T18:50:00",
"durationInMinutes": 110,
"flightNumber": "613",
"marketingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
},
"operatingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
}
},
{
"id": "10957-10075-2402122050-2402122300--31435",
"origin": {
"flightPlaceId": "DEL",
"displayCode": "DEL",
"parent": {
"flightPlaceId": "IDEL",
"displayCode": "DEL",
"name": "New Delhi",
"type": "City"
},
"name": "Indira Gandhi International ",
"type": "Airport"
},
"destination": {
"flightPlaceId": "BOM",
"displayCode": "BOM",
"parent": {
"flightPlaceId": "IBOM",
"displayCode": "BOM",
"name": "Mumbai",
"type": "City"
},
"name": "Mumbai",
"type": "Airport"
},
"departure": "2024-02-12T20:50:00",
"arrival": "2024-02-12T23:00:00",
"durationInMinutes": 130,
"flightNumber": "957",
"marketingCarrier": {
"id": -31435,
"name": "Vistara",
"alternateId": "IK",
"allianceId": 0
},
"operatingCarrier": {
"id": -31435,
"name": "Vistara",
"alternateId": "IK",
"allianceId": 0
}
}
]
}
],
"isSelfTransfer": false,
"isProtectedSelfTransfer": true,
"farePolicy": {
"isChangeAllowed": false,
"isPartiallyChangeable": false,
"isCancellationAllowed": false,
"isPartiallyRefundable": false
},
"tags": [
"shortest"
],
"isMashUp": false,
"hasFlexibleOptions": false,
"score": 0.740205
},
{
"id": "9436-2402071535--31435,-31475-1-16581-2402072100|16581-2402121215--31826-1-10075-2402121820",
"price": {
"raw": 375,
"formatted": "$375"
},
"legs": [
{
"id": "9436-2402071535--31435,-31475-1-16581-2402072100",
"origin": {
"id": "AMD",
"name": "Ahmedabad",
"displayCode": "AMD",
"city": "Ahmedabad",
"isHighlighted": false
},
"destination": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"durationInMinutes": 325,
"stopCount": 1,
"isSmallestStops": false,
"departure": "2024-02-07T15:35:00",
"arrival": "2024-02-07T21:00:00",
"timeDeltaInDays": 0,
"carriers": {
"marketing": [
{
"id": -31435,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/IK.png",
"name": "Vistara"
},
{
"id": -31475,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/04.png",
"name": "AirAsia India"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "9436-10957-2402071535-2402071710--31435",
"origin": {
"flightPlaceId": "AMD",
"displayCode": "AMD",
"parent": {
"flightPlaceId": "IAMD",
"displayCode": "AMD",
"name": "Ahmedabad",
"type": "City"
},
"name": "Ahmedabad",
"type": "Airport"
},
"destination": {
"flightPlaceId": "DEL",
"displayCode": "DEL",
"parent": {
"flightPlaceId": "IDEL",
"displayCode": "DEL",
"name": "New Delhi",
"type": "City"
},
"name": "Indira Gandhi International ",
"type": "Airport"
},
"departure": "2024-02-07T15:35:00",
"arrival": "2024-02-07T17:10:00",
"durationInMinutes": 95,
"flightNumber": "976",
"marketingCarrier": {
"id": -31435,
"name": "Vistara",
"alternateId": "IK",
"allianceId": 0
},
"operatingCarrier": {
"id": -31435,
"name": "Vistara",
"alternateId": "IK",
"allianceId": 0
}
},
{
"id": "10957-16581-2402071925-2402072100--31475",
"origin": {
"flightPlaceId": "DEL",
"displayCode": "DEL",
"parent": {
"flightPlaceId": "IDEL",
"displayCode": "DEL",
"name": "New Delhi",
"type": "City"
},
"name": "Indira Gandhi International ",
"type": "Airport"
},
"destination": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"departure": "2024-02-07T19:25:00",
"arrival": "2024-02-07T21:00:00",
"durationInMinutes": 95,
"flightNumber": "1569",
"marketingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
},
"operatingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
}
}
]
},
{
"id": "16581-2402121215--31826-1-10075-2402121820",
"origin": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"destination": {
"id": "BOM",
"name": "Mumbai",
"displayCode": "BOM",
"city": "Mumbai",
"isHighlighted": false
},
"durationInMinutes": 365,
"stopCount": 1,
"isSmallestStops": false,
"departure": "2024-02-12T12:15:00",
"arrival": "2024-02-12T18:20:00",
"timeDeltaInDays": 0,
"carriers": {
"marketing": [
{
"id": -31826,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/0S.png",
"name": "SpiceJet"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "16581-11906-2402121215-2402121355--31826",
"origin": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"destination": {
"flightPlaceId": "GOI",
"displayCode": "GOI",
"parent": {
"flightPlaceId": "IGOI",
"displayCode": "GOI",
"name": "Marmagao",
"type": "City"
},
"name": "Goa",
"type": "Airport"
},
"departure": "2024-02-12T12:15:00",
"arrival": "2024-02-12T13:55:00",
"durationInMinutes": 100,
"flightNumber": "3419",
"marketingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
},
"operatingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
}
},
{
"id": "11906-10075-2402121705-2402121820--31826",
"origin": {
"flightPlaceId": "GOI",
"displayCode": "GOI",
"parent": {
"flightPlaceId": "IGOI",
"displayCode": "GOI",
"name": "Marmagao",
"type": "City"
},
"name": "Goa",
"type": "Airport"
},
"destination": {
"flightPlaceId": "BOM",
"displayCode": "BOM",
"parent": {
"flightPlaceId": "IBOM",
"displayCode": "BOM",
"name": "Mumbai",
"type": "City"
},
"name": "Mumbai",
"type": "Airport"
},
"departure": "2024-02-12T17:05:00",
"arrival": "2024-02-12T18:20:00",
"durationInMinutes": 75,
"flightNumber": "9135",
"marketingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
},
"operatingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
}
}
]
}
],
"isSelfTransfer": false,
"isProtectedSelfTransfer": true,
"farePolicy": {
"isChangeAllowed": false,
"isPartiallyChangeable": false,
"isCancellationAllowed": false,
"isPartiallyRefundable": false
},
"tags": [
"second_shortest"
],
"isMashUp": false,
"hasFlexibleOptions": false,
"score": 0.658417
},
{
"id": "9436-2402071535--31435,-31475-1-16581-2402072100|16581-2402121700--31475,-32672-1-10075-2402130045",
"price": {
"raw": 334,
"formatted": "$334"
},
"legs": [
{
"id": "9436-2402071535--31435,-31475-1-16581-2402072100",
"origin": {
"id": "AMD",
"name": "Ahmedabad",
"displayCode": "AMD",
"city": "Ahmedabad",
"isHighlighted": false
},
"destination": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"durationInMinutes": 325,
"stopCount": 1,
"isSmallestStops": false,
"departure": "2024-02-07T15:35:00",
"arrival": "2024-02-07T21:00:00",
"timeDeltaInDays": 0,
"carriers": {
"marketing": [
{
"id": -31435,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/IK.png",
"name": "Vistara"
},
{
"id": -31475,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/04.png",
"name": "AirAsia India"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "9436-10957-2402071535-2402071710--31435",
"origin": {
"flightPlaceId": "AMD",
"displayCode": "AMD",
"parent": {
"flightPlaceId": "IAMD",
"displayCode": "AMD",
"name": "Ahmedabad",
"type": "City"
},
"name": "Ahmedabad",
"type": "Airport"
},
"destination": {
"flightPlaceId": "DEL",
"displayCode": "DEL",
"parent": {
"flightPlaceId": "IDEL",
"displayCode": "DEL",
"name": "New Delhi",
"type": "City"
},
"name": "Indira Gandhi International ",
"type": "Airport"
},
"departure": "2024-02-07T15:35:00",
"arrival": "2024-02-07T17:10:00",
"durationInMinutes": 95,
"flightNumber": "976",
"marketingCarrier": {
"id": -31435,
"name": "Vistara",
"alternateId": "IK",
"allianceId": 0
},
"operatingCarrier": {
"id": -31435,
"name": "Vistara",
"alternateId": "IK",
"allianceId": 0
}
},
{
"id": "10957-16581-2402071925-2402072100--31475",
"origin": {
"flightPlaceId": "DEL",
"displayCode": "DEL",
"parent": {
"flightPlaceId": "IDEL",
"displayCode": "DEL",
"name": "New Delhi",
"type": "City"
},
"name": "Indira Gandhi International ",
"type": "Airport"
},
"destination": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"departure": "2024-02-07T19:25:00",
"arrival": "2024-02-07T21:00:00",
"durationInMinutes": 95,
"flightNumber": "1569",
"marketingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
},
"operatingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
}
}
]
},
{
"id": "16581-2402121700--31475,-32672-1-10075-2402130045",
"origin": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"destination": {
"id": "BOM",
"name": "Mumbai",
"displayCode": "BOM",
"city": "Mumbai",
"isHighlighted": false
},
"durationInMinutes": 465,
"stopCount": 1,
"isSmallestStops": false,
"departure": "2024-02-12T17:00:00",
"arrival": "2024-02-13T00:45:00",
"timeDeltaInDays": 1,
"carriers": {
"marketing": [
{
"id": -31475,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/04.png",
"name": "AirAsia India"
},
{
"id": -32672,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AI.png",
"name": "Air India"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "16581-10957-2402121700-2402121850--31475",
"origin": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"destination": {
"flightPlaceId": "DEL",
"displayCode": "DEL",
"parent": {
"flightPlaceId": "IDEL",
"displayCode": "DEL",
"name": "New Delhi",
"type": "City"
},
"name": "Indira Gandhi International ",
"type": "Airport"
},
"departure": "2024-02-12T17:00:00",
"arrival": "2024-02-12T18:50:00",
"durationInMinutes": 110,
"flightNumber": "613",
"marketingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
},
"operatingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
}
},
{
"id": "10957-10075-2402122230-2402130045--32672",
"origin": {
"flightPlaceId": "DEL",
"displayCode": "DEL",
"parent": {
"flightPlaceId": "IDEL",
"displayCode": "DEL",
"name": "New Delhi",
"type": "City"
},
"name": "Indira Gandhi International ",
"type": "Airport"
},
"destination": {
"flightPlaceId": "BOM",
"displayCode": "BOM",
"parent": {
"flightPlaceId": "IBOM",
"displayCode": "BOM",
"name": "Mumbai",
"type": "City"
},
"name": "Mumbai",
"type": "Airport"
},
"departure": "2024-02-12T22:30:00",
"arrival": "2024-02-13T00:45:00",
"durationInMinutes": 135,
"flightNumber": "814",
"marketingCarrier": {
"id": -32672,
"name": "Air India",
"alternateId": "AI",
"allianceId": 0
},
"operatingCarrier": {
"id": -32672,
"name": "Air India",
"alternateId": "AI",
"allianceId": 0
}
}
]
}
],
"isSelfTransfer": false,
"isProtectedSelfTransfer": true,
"farePolicy": {
"isChangeAllowed": false,
"isPartiallyChangeable": false,
"isCancellationAllowed": false,
"isPartiallyRefundable": false
},
"isMashUp": false,
"hasFlexibleOptions": false,
"score": 0.645666
},
{
"id": "9436-2402071535--31435,-31475-1-16581-2402072100|16581-2402122130--31475,-32672-1-10075-2402130835",
"price": {
"raw": 305,
"formatted": "$305"
},
"legs": [
{
"id": "9436-2402071535--31435,-31475-1-16581-2402072100",
"origin": {
"id": "AMD",
"name": "Ahmedabad",
"displayCode": "AMD",
"city": "Ahmedabad",
"isHighlighted": false
},
"destination": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"durationInMinutes": 325,
"stopCount": 1,
"isSmallestStops": false,
"departure": "2024-02-07T15:35:00",
"arrival": "2024-02-07T21:00:00",
"timeDeltaInDays": 0,
"carriers": {
"marketing": [
{
"id": -31435,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/IK.png",
"name": "Vistara"
},
{
"id": -31475,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/04.png",
"name": "AirAsia India"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "9436-10957-2402071535-2402071710--31435",
"origin": {
"flightPlaceId": "AMD",
"displayCode": "AMD",
"parent": {
"flightPlaceId": "IAMD",
"displayCode": "AMD",
"name": "Ahmedabad",
"type": "City"
},
"name": "Ahmedabad",
"type": "Airport"
},
"destination": {
"flightPlaceId": "DEL",
"displayCode": "DEL",
"parent": {
"flightPlaceId": "IDEL",
"displayCode": "DEL",
"name": "New Delhi",
"type": "City"
},
"name": "Indira Gandhi International ",
"type": "Airport"
},
"departure": "2024-02-07T15:35:00",
"arrival": "2024-02-07T17:10:00",
"durationInMinutes": 95,
"flightNumber": "976",
"marketingCarrier": {
"id": -31435,
"name": "Vistara",
"alternateId": "IK",
"allianceId": 0
},
"operatingCarrier": {
"id": -31435,
"name": "Vistara",
"alternateId": "IK",
"allianceId": 0
}
},
{
"id": "10957-16581-2402071925-2402072100--31475",
"origin": {
"flightPlaceId": "DEL",
"displayCode": "DEL",
"parent": {
"flightPlaceId": "IDEL",
"displayCode": "DEL",
"name": "New Delhi",
"type": "City"
},
"name": "Indira Gandhi International ",
"type": "Airport"
},
"destination": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"departure": "2024-02-07T19:25:00",
"arrival": "2024-02-07T21:00:00",
"durationInMinutes": 95,
"flightNumber": "1569",
"marketingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
},
"operatingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
}
}
]
},
{
"id": "16581-2402122130--31475,-32672-1-10075-2402130835",
"origin": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"destination": {
"id": "BOM",
"name": "Mumbai",
"displayCode": "BOM",
"city": "Mumbai",
"isHighlighted": false
},
"durationInMinutes": 665,
"stopCount": 1,
"isSmallestStops": false,
"departure": "2024-02-12T21:30:00",
"arrival": "2024-02-13T08:35:00",
"timeDeltaInDays": 1,
"carriers": {
"marketing": [
{
"id": -31475,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/04.png",
"name": "AirAsia India"
},
{
"id": -32672,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AI.png",
"name": "Air India"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "16581-10002-2402122130-2402122335--31475",
"origin": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"destination": {
"flightPlaceId": "BLR",
"displayCode": "BLR",
"parent": {
"flightPlaceId": "IBLR",
"displayCode": "BLR",
"name": "Bengaluru",
"type": "City"
},
"name": "Bengaluru",
"type": "Airport"
},
"departure": "2024-02-12T21:30:00",
"arrival": "2024-02-12T23:35:00",
"durationInMinutes": 125,
"flightNumber": "1569",
"marketingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
},
"operatingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
}
},
{
"id": "10002-10075-2402130640-2402130835--32672",
"origin": {
"flightPlaceId": "BLR",
"displayCode": "BLR",
"parent": {
"flightPlaceId": "IBLR",
"displayCode": "BLR",
"name": "Bengaluru",
"type": "City"
},
"name": "Bengaluru",
"type": "Airport"
},
"destination": {
"flightPlaceId": "BOM",
"displayCode": "BOM",
"parent": {
"flightPlaceId": "IBOM",
"displayCode": "BOM",
"name": "Mumbai",
"type": "City"
},
"name": "Mumbai",
"type": "Airport"
},
"departure": "2024-02-13T06:40:00",
"arrival": "2024-02-13T08:35:00",
"durationInMinutes": 115,
"flightNumber": "640",
"marketingCarrier": {
"id": -32672,
"name": "Air India",
"alternateId": "AI",
"allianceId": 0
},
"operatingCarrier": {
"id": -32672,
"name": "Air India",
"alternateId": "AI",
"allianceId": 0
}
}
]
}
],
"isSelfTransfer": false,
"isProtectedSelfTransfer": true,
"farePolicy": {
"isChangeAllowed": false,
"isPartiallyChangeable": false,
"isCancellationAllowed": false,
"isPartiallyRefundable": false
},
"tags": [
"second_cheapest"
],
"isMashUp": false,
"hasFlexibleOptions": false,
"score": 0.564218
},
{
"id": "9436-2402070505--31435,-31475-3-16581-2402071615|16581-2402122130--31475-1-10075-2402130400",
"price": {
"raw": 323,
"formatted": "$323"
},
"legs": [
{
"id": "9436-2402070505--31435,-31475-3-16581-2402071615",
"origin": {
"id": "AMD",
"name": "Ahmedabad",
"displayCode": "AMD",
"city": "Ahmedabad",
"isHighlighted": false
},
"destination": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"durationInMinutes": 670,
"stopCount": 3,
"isSmallestStops": false,
"departure": "2024-02-07T05:05:00",
"arrival": "2024-02-07T16:15:00",
"timeDeltaInDays": 0,
"carriers": {
"marketing": [
{
"id": -31435,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/IK.png",
"name": "Vistara"
},
{
"id": -31475,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/04.png",
"name": "AirAsia India"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "9436-10075-2402070505-2402070620--31435",
"origin": {
"flightPlaceId": "AMD",
"displayCode": "AMD",
"parent": {
"flightPlaceId": "IAMD",
"displayCode": "AMD",
"name": "Ahmedabad",
"type": "City"
},
"name": "Ahmedabad",
"type": "Airport"
},
"destination": {
"flightPlaceId": "BOM",
"displayCode": "BOM",
"parent": {
"flightPlaceId": "IBOM",
"displayCode": "BOM",
"name": "Mumbai",
"type": "City"
},
"name": "Mumbai",
"type": "Airport"
},
"departure": "2024-02-07T05:05:00",
"arrival": "2024-02-07T06:20:00",
"durationInMinutes": 75,
"flightNumber": "918",
"marketingCarrier": {
"id": -31435,
"name": "Vistara",
"alternateId": "IK",
"allianceId": 0
},
"operatingCarrier": {
"id": -31435,
"name": "Vistara",
"alternateId": "IK",
"allianceId": 0
}
},
{
"id": "10075-13867-2402070945-2402071150--31435",
"origin": {
"flightPlaceId": "BOM",
"displayCode": "BOM",
"parent": {
"flightPlaceId": "IBOM",
"displayCode": "BOM",
"name": "Mumbai",
"type": "City"
},
"name": "Mumbai",
"type": "Airport"
},
"destination": {
"flightPlaceId": "MAA",
"displayCode": "MAA",
"parent": {
"flightPlaceId": "IMAA",
"displayCode": "MAA",
"name": "Chennai",
"type": "City"
},
"name": "Chennai",
"type": "Airport"
},
"departure": "2024-02-07T09:45:00",
"arrival": "2024-02-07T11:50:00",
"durationInMinutes": 125,
"flightNumber": "825",
"marketingCarrier": {
"id": -31435,
"name": "Vistara",
"alternateId": "IK",
"allianceId": 0
},
"operatingCarrier": {
"id": -31435,
"name": "Vistara",
"alternateId": "IK",
"allianceId": 0
}
},
{
"id": "13867-10002-2402071300-2402071350--31475",
"origin": {
"flightPlaceId": "MAA",
"displayCode": "MAA",
"parent": {
"flightPlaceId": "IMAA",
"displayCode": "MAA",
"name": "Chennai",
"type": "City"
},
"name": "Chennai",
"type": "Airport"
},
"destination": {
"flightPlaceId": "BLR",
"displayCode": "BLR",
"parent": {
"flightPlaceId": "IBLR",
"displayCode": "BLR",
"name": "Bengaluru",
"type": "City"
},
"name": "Bengaluru",
"type": "Airport"
},
"departure": "2024-02-07T13:00:00",
"arrival": "2024-02-07T13:50:00",
"durationInMinutes": 50,
"flightNumber": "613",
"marketingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
},
"operatingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
}
},
{
"id": "10002-16581-2402071425-2402071615--31475",
"origin": {
"flightPlaceId": "BLR",
"displayCode": "BLR",
"parent": {
"flightPlaceId": "IBLR",
"displayCode": "BLR",
"name": "Bengaluru",
"type": "City"
},
"name": "Bengaluru",
"type": "Airport"
},
"destination": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"departure": "2024-02-07T14:25:00",
"arrival": "2024-02-07T16:15:00",
"durationInMinutes": 110,
"flightNumber": "613",
"marketingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
},
"operatingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
}
}
]
},
{
"id": "16581-2402122130--31475-1-10075-2402130400",
"origin": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"destination": {
"id": "BOM",
"name": "Mumbai",
"displayCode": "BOM",
"city": "Mumbai",
"isHighlighted": false
},
"durationInMinutes": 390,
"stopCount": 1,
"isSmallestStops": false,
"departure": "2024-02-12T21:30:00",
"arrival": "2024-02-13T04:00:00",
"timeDeltaInDays": 1,
"carriers": {
"marketing": [
{
"id": -31475,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/04.png",
"name": "AirAsia India"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "16581-10002-2402122130-2402122335--31475",
"origin": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"destination": {
"flightPlaceId": "BLR",
"displayCode": "BLR",
"parent": {
"flightPlaceId": "IBLR",
"displayCode": "BLR",
"name": "Bengaluru",
"type": "City"
},
"name": "Bengaluru",
"type": "Airport"
},
"departure": "2024-02-12T21:30:00",
"arrival": "2024-02-12T23:35:00",
"durationInMinutes": 125,
"flightNumber": "1569",
"marketingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
},
"operatingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
}
},
{
"id": "10002-10075-2402130200-2402130400--31475",
"origin": {
"flightPlaceId": "BLR",
"displayCode": "BLR",
"parent": {
"flightPlaceId": "IBLR",
"displayCode": "BLR",
"name": "Bengaluru",
"type": "City"
},
"name": "Bengaluru",
"type": "Airport"
},
"destination": {
"flightPlaceId": "BOM",
"displayCode": "BOM",
"parent": {
"flightPlaceId": "IBOM",
"displayCode": "BOM",
"name": "Mumbai",
"type": "City"
},
"name": "Mumbai",
"type": "Airport"
},
"departure": "2024-02-13T02:00:00",
"arrival": "2024-02-13T04:00:00",
"durationInMinutes": 120,
"flightNumber": "472",
"marketingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
},
"operatingCarrier": {
"id": -31475,
"name": "AirAsia India",
"alternateId": "04",
"allianceId": 0
}
}
]
}
],
"isSelfTransfer": false,
"isProtectedSelfTransfer": true,
"farePolicy": {
"isChangeAllowed": false,
"isPartiallyChangeable": false,
"isCancellationAllowed": false,
"isPartiallyRefundable": false
},
"isMashUp": false,
"hasFlexibleOptions": false,
"score": 0.497592
},
{
"id": "9436-2402070505--31435,-32213-2-16581-2402081835|16581-2402121520--32213-1-10075-2402121955",
"price": {
"raw": 273.99,
"formatted": "$274"
},
"legs": [
{
"id": "9436-2402070505--31435,-32213-2-16581-2402081835",
"origin": {
"id": "AMD",
"name": "Ahmedabad",
"displayCode": "AMD",
"city": "Ahmedabad",
"isHighlighted": false
},
"destination": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"durationInMinutes": 2250,
"stopCount": 2,
"isSmallestStops": false,
"departure": "2024-02-07T05:05:00",
"arrival": "2024-02-08T18:35:00",
"timeDeltaInDays": 1,
"carriers": {
"marketing": [
{
"id": -31435,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/IK.png",
"name": "Vistara"
},
{
"id": -32213,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/49.png",
"name": "IndiGo"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "9436-10075-2402070505-2402070620--31435",
"origin": {
"flightPlaceId": "AMD",
"displayCode": "AMD",
"parent": {
"flightPlaceId": "IAMD",
"displayCode": "AMD",
"name": "Ahmedabad",
"type": "City"
},
"name": "Ahmedabad",
"type": "Airport"
},
"destination": {
"flightPlaceId": "BOM",
"displayCode": "BOM",
"parent": {
"flightPlaceId": "IBOM",
"displayCode": "BOM",
"name": "Mumbai",
"type": "City"
},
"name": "Mumbai",
"type": "Airport"
},
"departure": "2024-02-07T05:05:00",
"arrival": "2024-02-07T06:20:00",
"durationInMinutes": 75,
"flightNumber": "918",
"marketingCarrier": {
"id": -31435,
"name": "Vistara",
"alternateId": "IK",
"allianceId": 0
},
"operatingCarrier": {
"id": -31435,
"name": "Vistara",
"alternateId": "IK",
"allianceId": 0
}
},
{
"id": "10075-11906-2402080450-2402080610--32213",
"origin": {
"flightPlaceId": "BOM",
"displayCode": "BOM",
"parent": {
"flightPlaceId": "IBOM",
"displayCode": "BOM",
"name": "Mumbai",
"type": "City"
},
"name": "Mumbai",
"type": "Airport"
},
"destination": {
"flightPlaceId": "GOI",
"displayCode": "GOI",
"parent": {
"flightPlaceId": "IGOI",
"displayCode": "GOI",
"name": "Marmagao",
"type": "City"
},
"name": "Goa",
"type": "Airport"
},
"departure": "2024-02-08T04:50:00",
"arrival": "2024-02-08T06:10:00",
"durationInMinutes": 80,
"flightNumber": "5202",
"marketingCarrier": {
"id": -32213,
"name": "IndiGo",
"alternateId": "49",
"allianceId": 0
},
"operatingCarrier": {
"id": -32213,
"name": "IndiGo",
"alternateId": "49",
"allianceId": 0
}
},
{
"id": "11906-16581-2402081710-2402081835--32213",
"origin": {
"flightPlaceId": "GOI",
"displayCode": "GOI",
"parent": {
"flightPlaceId": "IGOI",
"displayCode": "GOI",
"name": "Marmagao",
"type": "City"
},
"name": "Goa",
"type": "Airport"
},
"destination": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"departure": "2024-02-08T17:10:00",
"arrival": "2024-02-08T18:35:00",
"durationInMinutes": 85,
"flightNumber": "418",
"marketingCarrier": {
"id": -32213,
"name": "IndiGo",
"alternateId": "49",
"allianceId": 0
},
"operatingCarrier": {
"id": -32213,
"name": "IndiGo",
"alternateId": "49",
"allianceId": 0
}
}
]
},
{
"id": "16581-2402121520--32213-1-10075-2402121955",
"origin": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"destination": {
"id": "BOM",
"name": "Mumbai",
"displayCode": "BOM",
"city": "Mumbai",
"isHighlighted": false
},
"durationInMinutes": 275,
"stopCount": 1,
"isSmallestStops": false,
"departure": "2024-02-12T15:20:00",
"arrival": "2024-02-12T19:55:00",
"timeDeltaInDays": 0,
"carriers": {
"marketing": [
{
"id": -32213,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/49.png",
"name": "IndiGo"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "16581-11906-2402121520-2402121640--32213",
"origin": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"destination": {
"flightPlaceId": "GOI",
"displayCode": "GOI",
"parent": {
"flightPlaceId": "IGOI",
"displayCode": "GOI",
"name": "Marmagao",
"type": "City"
},
"name": "Goa",
"type": "Airport"
},
"departure": "2024-02-12T15:20:00",
"arrival": "2024-02-12T16:40:00",
"durationInMinutes": 80,
"flightNumber": "419",
"marketingCarrier": {
"id": -32213,
"name": "IndiGo",
"alternateId": "49",
"allianceId": 0
},
"operatingCarrier": {
"id": -32213,
"name": "IndiGo",
"alternateId": "49",
"allianceId": 0
}
},
{
"id": "11906-10075-2402121845-2402121955--32213",
"origin": {
"flightPlaceId": "GOI",
"displayCode": "GOI",
"parent": {
"flightPlaceId": "IGOI",
"displayCode": "GOI",
"name": "Marmagao",
"type": "City"
},
"name": "Goa",
"type": "Airport"
},
"destination": {
"flightPlaceId": "BOM",
"displayCode": "BOM",
"parent": {
"flightPlaceId": "IBOM",
"displayCode": "BOM",
"name": "Mumbai",
"type": "City"
},
"name": "Mumbai",
"type": "Airport"
},
"departure": "2024-02-12T18:45:00",
"arrival": "2024-02-12T19:55:00",
"durationInMinutes": 70,
"flightNumber": "6808",
"marketingCarrier": {
"id": -32213,
"name": "IndiGo",
"alternateId": "49",
"allianceId": 0
},
"operatingCarrier": {
"id": -32213,
"name": "IndiGo",
"alternateId": "49",
"allianceId": 0
}
}
]
}
],
"isSelfTransfer": false,
"isProtectedSelfTransfer": true,
"farePolicy": {
"isChangeAllowed": false,
"isPartiallyChangeable": false,
"isCancellationAllowed": false,
"isPartiallyRefundable": false
},
"eco": {
"ecoContenderDelta": 29.540276
},
"tags": [
"cheapest"
],
"isMashUp": false,
"hasFlexibleOptions": false,
"score": 0.246255
},
{
"id": "9436-2402071615--31826-1-16581-2402081155|16581-2402121215--31826-1-10075-2402121820",
"price": {
"raw": 814.1,
"formatted": "$815"
},
"legs": [
{
"id": "9436-2402071615--31826-1-16581-2402081155",
"origin": {
"id": "AMD",
"name": "Ahmedabad",
"displayCode": "AMD",
"city": "Ahmedabad",
"isHighlighted": false
},
"destination": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"durationInMinutes": 1180,
"stopCount": 1,
"isSmallestStops": false,
"departure": "2024-02-07T16:15:00",
"arrival": "2024-02-08T11:55:00",
"timeDeltaInDays": 1,
"carriers": {
"marketing": [
{
"id": -31826,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/0S.png",
"name": "SpiceJet"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "9436-12651-2402071615-2402071730--31826",
"origin": {
"flightPlaceId": "AMD",
"displayCode": "AMD",
"parent": {
"flightPlaceId": "IAMD",
"displayCode": "AMD",
"name": "Ahmedabad",
"type": "City"
},
"name": "Ahmedabad",
"type": "Airport"
},
"destination": {
"flightPlaceId": "JAI",
"displayCode": "JAI",
"parent": {
"flightPlaceId": "IJAI",
"displayCode": "JAI",
"name": "Jaipur",
"type": "City"
},
"name": "Jaipur",
"type": "Airport"
},
"departure": "2024-02-07T16:15:00",
"arrival": "2024-02-07T17:30:00",
"durationInMinutes": 75,
"flightNumber": "9465",
"marketingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
},
"operatingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
}
},
{
"id": "12651-16581-2402081025-2402081155--31826",
"origin": {
"flightPlaceId": "JAI",
"displayCode": "JAI",
"parent": {
"flightPlaceId": "IJAI",
"displayCode": "JAI",
"name": "Jaipur",
"type": "City"
},
"name": "Jaipur",
"type": "Airport"
},
"destination": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"departure": "2024-02-08T10:25:00",
"arrival": "2024-02-08T11:55:00",
"durationInMinutes": 90,
"flightNumber": "2085",
"marketingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
},
"operatingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
}
}
]
},
{
"id": "16581-2402121215--31826-1-10075-2402121820",
"origin": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"destination": {
"id": "BOM",
"name": "Mumbai",
"displayCode": "BOM",
"city": "Mumbai",
"isHighlighted": false
},
"durationInMinutes": 365,
"stopCount": 1,
"isSmallestStops": false,
"departure": "2024-02-12T12:15:00",
"arrival": "2024-02-12T18:20:00",
"timeDeltaInDays": 0,
"carriers": {
"marketing": [
{
"id": -31826,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/0S.png",
"name": "SpiceJet"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "16581-11906-2402121215-2402121355--31826",
"origin": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"destination": {
"flightPlaceId": "GOI",
"displayCode": "GOI",
"parent": {
"flightPlaceId": "IGOI",
"displayCode": "GOI",
"name": "Marmagao",
"type": "City"
},
"name": "Goa",
"type": "Airport"
},
"departure": "2024-02-12T12:15:00",
"arrival": "2024-02-12T13:55:00",
"durationInMinutes": 100,
"flightNumber": "3419",
"marketingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
},
"operatingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
}
},
{
"id": "11906-10075-2402121705-2402121820--31826",
"origin": {
"flightPlaceId": "GOI",
"displayCode": "GOI",
"parent": {
"flightPlaceId": "IGOI",
"displayCode": "GOI",
"name": "Marmagao",
"type": "City"
},
"name": "Goa",
"type": "Airport"
},
"destination": {
"flightPlaceId": "BOM",
"displayCode": "BOM",
"parent": {
"flightPlaceId": "IBOM",
"displayCode": "BOM",
"name": "Mumbai",
"type": "City"
},
"name": "Mumbai",
"type": "Airport"
},
"departure": "2024-02-12T17:05:00",
"arrival": "2024-02-12T18:20:00",
"durationInMinutes": 75,
"flightNumber": "9135",
"marketingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
},
"operatingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
}
}
]
}
],
"isSelfTransfer": false,
"isProtectedSelfTransfer": false,
"farePolicy": {
"isChangeAllowed": false,
"isPartiallyChangeable": false,
"isCancellationAllowed": false,
"isPartiallyRefundable": false
},
"isMashUp": false,
"hasFlexibleOptions": false,
"score": 0.148994
},
{
"id": "9436-2402070610--31826-2-16581-2402072050|16581-2402121215--31826-1-10075-2402121820",
"price": {
"raw": 1037.1,
"formatted": "$1,038"
},
"legs": [
{
"id": "9436-2402070610--31826-2-16581-2402072050",
"origin": {
"id": "AMD",
"name": "Ahmedabad",
"displayCode": "AMD",
"city": "Ahmedabad",
"isHighlighted": false
},
"destination": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"durationInMinutes": 880,
"stopCount": 2,
"isSmallestStops": false,
"departure": "2024-02-07T06:10:00",
"arrival": "2024-02-07T20:50:00",
"timeDeltaInDays": 0,
"carriers": {
"marketing": [
{
"id": -31826,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/0S.png",
"name": "SpiceJet"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "9436-10957-2402070610-2402070750--31826",
"origin": {
"flightPlaceId": "AMD",
"displayCode": "AMD",
"parent": {
"flightPlaceId": "IAMD",
"displayCode": "AMD",
"name": "Ahmedabad",
"type": "City"
},
"name": "Ahmedabad",
"type": "Airport"
},
"destination": {
"flightPlaceId": "DEL",
"displayCode": "DEL",
"parent": {
"flightPlaceId": "IDEL",
"displayCode": "DEL",
"name": "New Delhi",
"type": "City"
},
"name": "Indira Gandhi International ",
"type": "Airport"
},
"departure": "2024-02-07T06:10:00",
"arrival": "2024-02-07T07:50:00",
"durationInMinutes": 100,
"flightNumber": "8194",
"marketingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
},
"operatingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
}
},
{
"id": "10957-11906-2402071215-2402071450--31826",
"origin": {
"flightPlaceId": "DEL",
"displayCode": "DEL",
"parent": {
"flightPlaceId": "IDEL",
"displayCode": "DEL",
"name": "New Delhi",
"type": "City"
},
"name": "Indira Gandhi International ",
"type": "Airport"
},
"destination": {
"flightPlaceId": "GOI",
"displayCode": "GOI",
"parent": {
"flightPlaceId": "IGOI",
"displayCode": "GOI",
"name": "Marmagao",
"type": "City"
},
"name": "Goa",
"type": "Airport"
},
"departure": "2024-02-07T12:15:00",
"arrival": "2024-02-07T14:50:00",
"durationInMinutes": 155,
"flightNumber": "8722",
"marketingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
},
"operatingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
}
},
{
"id": "11906-16581-2402071910-2402072050--31826",
"origin": {
"flightPlaceId": "GOI",
"displayCode": "GOI",
"parent": {
"flightPlaceId": "IGOI",
"displayCode": "GOI",
"name": "Marmagao",
"type": "City"
},
"name": "Goa",
"type": "Airport"
},
"destination": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"departure": "2024-02-07T19:10:00",
"arrival": "2024-02-07T20:50:00",
"durationInMinutes": 100,
"flightNumber": "3426",
"marketingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
},
"operatingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
}
}
]
},
{
"id": "16581-2402121215--31826-1-10075-2402121820",
"origin": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"destination": {
"id": "BOM",
"name": "Mumbai",
"displayCode": "BOM",
"city": "Mumbai",
"isHighlighted": false
},
"durationInMinutes": 365,
"stopCount": 1,
"isSmallestStops": false,
"departure": "2024-02-12T12:15:00",
"arrival": "2024-02-12T18:20:00",
"timeDeltaInDays": 0,
"carriers": {
"marketing": [
{
"id": -31826,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/0S.png",
"name": "SpiceJet"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "16581-11906-2402121215-2402121355--31826",
"origin": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"destination": {
"flightPlaceId": "GOI",
"displayCode": "GOI",
"parent": {
"flightPlaceId": "IGOI",
"displayCode": "GOI",
"name": "Marmagao",
"type": "City"
},
"name": "Goa",
"type": "Airport"
},
"departure": "2024-02-12T12:15:00",
"arrival": "2024-02-12T13:55:00",
"durationInMinutes": 100,
"flightNumber": "3419",
"marketingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
},
"operatingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
}
},
{
"id": "11906-10075-2402121705-2402121820--31826",
"origin": {
"flightPlaceId": "GOI",
"displayCode": "GOI",
"parent": {
"flightPlaceId": "IGOI",
"displayCode": "GOI",
"name": "Marmagao",
"type": "City"
},
"name": "Goa",
"type": "Airport"
},
"destination": {
"flightPlaceId": "BOM",
"displayCode": "BOM",
"parent": {
"flightPlaceId": "IBOM",
"displayCode": "BOM",
"name": "Mumbai",
"type": "City"
},
"name": "Mumbai",
"type": "Airport"
},
"departure": "2024-02-12T17:05:00",
"arrival": "2024-02-12T18:20:00",
"durationInMinutes": 75,
"flightNumber": "9135",
"marketingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
},
"operatingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
}
}
]
}
],
"isSelfTransfer": false,
"isProtectedSelfTransfer": false,
"farePolicy": {
"isChangeAllowed": false,
"isPartiallyChangeable": false,
"isCancellationAllowed": false,
"isPartiallyRefundable": false
},
"isMashUp": false,
"hasFlexibleOptions": false,
"score": 0.145139
},
{
"id": "9436-2402070600--31826-2-16581-2402072050|16581-2402121215--31826-1-10075-2402121820",
"price": {
"raw": 1115.9,
"formatted": "$1,116"
},
"legs": [
{
"id": "9436-2402070600--31826-2-16581-2402072050",
"origin": {
"id": "AMD",
"name": "Ahmedabad",
"displayCode": "AMD",
"city": "Ahmedabad",
"isHighlighted": false
},
"destination": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"durationInMinutes": 890,
"stopCount": 2,
"isSmallestStops": false,
"departure": "2024-02-07T06:00:00",
"arrival": "2024-02-07T20:50:00",
"timeDeltaInDays": 0,
"carriers": {
"marketing": [
{
"id": -31826,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/0S.png",
"name": "SpiceJet"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "9436-15466-2402070600-2402070725--31826",
"origin": {
"flightPlaceId": "AMD",
"displayCode": "AMD",
"parent": {
"flightPlaceId": "IAMD",
"displayCode": "AMD",
"name": "Ahmedabad",
"type": "City"
},
"name": "Ahmedabad",
"type": "Airport"
},
"destination": {
"flightPlaceId": "PNQ",
"displayCode": "PNQ",
"parent": {
"flightPlaceId": "IPNQ",
"displayCode": "PNQ",
"name": "Pune",
"type": "City"
},
"name": "Pune",
"type": "Airport"
},
"departure": "2024-02-07T06:00:00",
"arrival": "2024-02-07T07:25:00",
"durationInMinutes": 85,
"flightNumber": "2000",
"marketingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
},
"operatingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
}
},
{
"id": "15466-11906-2402071220-2402071325--31826",
"origin": {
"flightPlaceId": "PNQ",
"displayCode": "PNQ",
"parent": {
"flightPlaceId": "IPNQ",
"displayCode": "PNQ",
"name": "Pune",
"type": "City"
},
"name": "Pune",
"type": "Airport"
},
"destination": {
"flightPlaceId": "GOI",
"displayCode": "GOI",
"parent": {
"flightPlaceId": "IGOI",
"displayCode": "GOI",
"name": "Marmagao",
"type": "City"
},
"name": "Goa",
"type": "Airport"
},
"departure": "2024-02-07T12:20:00",
"arrival": "2024-02-07T13:25:00",
"durationInMinutes": 65,
"flightNumber": "1837",
"marketingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
},
"operatingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
}
},
{
"id": "11906-16581-2402071910-2402072050--31826",
"origin": {
"flightPlaceId": "GOI",
"displayCode": "GOI",
"parent": {
"flightPlaceId": "IGOI",
"displayCode": "GOI",
"name": "Marmagao",
"type": "City"
},
"name": "Goa",
"type": "Airport"
},
"destination": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"departure": "2024-02-07T19:10:00",
"arrival": "2024-02-07T20:50:00",
"durationInMinutes": 100,
"flightNumber": "3426",
"marketingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
},
"operatingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
}
}
]
},
{
"id": "16581-2402121215--31826-1-10075-2402121820",
"origin": {
"id": "STV",
"name": "Surat",
"displayCode": "STV",
"city": "Surat",
"isHighlighted": false
},
"destination": {
"id": "BOM",
"name": "Mumbai",
"displayCode": "BOM",
"city": "Mumbai",
"isHighlighted": false
},
"durationInMinutes": 365,
"stopCount": 1,
"isSmallestStops": false,
"departure": "2024-02-12T12:15:00",
"arrival": "2024-02-12T18:20:00",
"timeDeltaInDays": 0,
"carriers": {
"marketing": [
{
"id": -31826,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/0S.png",
"name": "SpiceJet"
}
],
"operationType": "fully_operated"
},
"segments": [
{
"id": "16581-11906-2402121215-2402121355--31826",
"origin": {
"flightPlaceId": "STV",
"displayCode": "STV",
"parent": {
"flightPlaceId": "ISTV",
"displayCode": "STV",
"name": "Surat",
"type": "City"
},
"name": "Surat",
"type": "Airport"
},
"destination": {
"flightPlaceId": "GOI",
"displayCode": "GOI",
"parent": {
"flightPlaceId": "IGOI",
"displayCode": "GOI",
"name": "Marmagao",
"type": "City"
},
"name": "Goa",
"type": "Airport"
},
"departure": "2024-02-12T12:15:00",
"arrival": "2024-02-12T13:55:00",
"durationInMinutes": 100,
"flightNumber": "3419",
"marketingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
},
"operatingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
}
},
{
"id": "11906-10075-2402121705-2402121820--31826",
"origin": {
"flightPlaceId": "GOI",
"displayCode": "GOI",
"parent": {
"flightPlaceId": "IGOI",
"displayCode": "GOI",
"name": "Marmagao",
"type": "City"
},
"name": "Goa",
"type": "Airport"
},
"destination": {
"flightPlaceId": "BOM",
"displayCode": "BOM",
"parent": {
"flightPlaceId": "IBOM",
"displayCode": "BOM",
"name": "Mumbai",
"type": "City"
},
"name": "Mumbai",
"type": "Airport"
},
"departure": "2024-02-12T17:05:00",
"arrival": "2024-02-12T18:20:00",
"durationInMinutes": 75,
"flightNumber": "9135",
"marketingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
},
"operatingCarrier": {
"id": -31826,
"name": "SpiceJet",
"alternateId": "0S",
"allianceId": 0
}
}
]
}
],
"isSelfTransfer": false,
"isProtectedSelfTransfer": false,
"farePolicy": {
"isChangeAllowed": false,
"isPartiallyChangeable": false,
"isCancellationAllowed": false,
"isPartiallyRefundable": false
},
"isMashUp": false,
"hasFlexibleOptions": false,
"score": 0.133815
}
],
"messages": [],
"filterStats": {
"duration": {
"min": 360,
"max": 2250
},
"airports": [
{
"city": "Surat",
"airports": [
{
"id": "STV",
"name": "Surat"
}
]
},
{
"city": "Mumbai",
"airports": [
{
"id": "BOM",
"name": "Mumbai"
}
]
},
{
"city": "Ahmedabad",
"airports": [
{
"id": "AMD",
"name": "Ahmedabad"
}
]
}
],
"carriers": [
{
"id": -32672,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AI.png",
"name": "Air India"
},
{
"id": -31475,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/04.png",
"name": "AirAsia India"
},
{
"id": -32213,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/49.png",
"name": "IndiGo"
},
{
"id": -31826,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/0S.png",
"name": "SpiceJet"
},
{
"id": -31435,
"logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/IK.png",
"name": "Vistara"
}
],
"stopPrices": {
"direct": {
"isPresent": false
},
"one": {
"isPresent": true,
"formattedPrice": "$305"
},
"twoOrMore": {
"isPresent": true,
"formattedPrice": "$274"
}
}
}
}
}
curl --request GET
--url 'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightEverywhere?originEntityId=95673320&cabinClass=economy&journeyType=one_way&currency=USD'
--header 'x-rapidapi-host: sky-scrapper.p.rapidapi.com'
--header 'x-rapidapi-key: f197b6d294mshcf64ed89b1ef4a5p1ba9bajsn890a70a56fe9'
curl --request GET
--url 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlightEverywhereDetails?oneWay=false&currency=USD'
--header 'x-rapidapi-host: sky-scrapper.p.rapidapi.com'
--header 'x-rapidapi-key: f197b6d294mshcf64ed89b1ef4a5p1ba9bajsn890a70a56fe9'
response:

    {

"status": true,
"timestamp": 1691009846253,
"data": [
{
"Quote": {
"OriginPlaceId": "BOM",
"DestinationPlaceId": "KTMA",
"OutboundDepartureDate": "2023-09-02",
"Direct": false,
"CurrencyId": "USD",
"Price": 96.51,
"OriginPlaceType": "Airport"
},
"ImageUrl": "https://content.skyscnr.com/c8cecb6d5971d7ca1feb542c276a6618/GettyImages-462451385.jpg?crop=400px:400px&quality=75",
"NextScreen": "topdeals+",
"Height": 175,
"Subtitle": null,
"Title": "Kathmandu",
"FullSpan": false,
"Meta": {
"Generic": {
"ImageType": "photo",
"PricedResultsInFeed": 1,
"ResultsInFeed": 1,
"Price": 96.51,
"CellIndex": 1
}
}
}
]
}
curl --request GET
--url 'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsWebComplete?originSkyId=JFK&destinationSkyId=MIA&originEntityId=95565058&destinationEntityId=95673821&cabinClass=economy&adults=1&sortBy=best&currency=USD&market=en-US&countryCode=US'
--header 'x-rapidapi-host: sky-scrapper.p.rapidapi.com'
--header 'x-rapidapi-key: f197b6d294mshcf64ed89b1ef4a5p1ba9bajsn890a70a56fe9'
