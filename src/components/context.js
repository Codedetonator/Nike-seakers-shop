import React,{Component, } from 'react'

export const DataContext = React.createContext();
export class DataProvider extends Component{

    state={
        products:[
            {
                "id": "c46b2fd1-d7ec-43d8-a715-c0c4a6dbdfde",
                "brand": "Nike",
                "colorway": "Black/University Red/White",
                "gender": "child",
                "name": "Black Red ",
                "releaseDate": "2021-07-16",
                "retailPrice": 65,
                "shoe": "Court Borough Low 2",
                "styleId": "BQ5448-007",
                "title": "Court Borough Low 2 Black University Red (GS)",
                "year": 2021,
                "count": 1,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Court-Borough-Low-2-Black-University-Red-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614886339",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Court-Borough-Low-2-Black-University-Red-GS.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614886339",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Court-Borough-Low-2-Black-University-Red-GS.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614886339"
                }
              },
              {
                "id": "333ea741-ee8b-4d4c-b278-48b673d747e8",
                "brand": "Nike",
                "colorway": "White/Game Royal",
                "gender": "men",
                "name": "Game Royal",
                "releaseDate": "2021-06-11",
                "retailPrice": 120,
                "shoe": "Nike Dunk High",
                "styleId": "DD1399-102",
                "title": "Nike Dunk High Game Royal",
                "year": 2021,
                "count": 1,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Dunk-High-Game-Royal.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613038501",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Dunk-High-Game-Royal.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613038501",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Dunk-High-Game-Royal.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613038501"
                }
              },
              {
                "id": "627ebbc3-db95-4c9a-bb0b-b88d74cdd3a3",
                "brand": "Nike",
                "colorway": "Black/Black-White",
                "gender": "men",
                "name": "Jackie Robinson",
                "releaseDate": "2021-04-15",
                "retailPrice": 100,
                "shoe": "Nike Air Griffey Max 1",
                "styleId": "DM0044-001",
                "title": "Nike Air Griffey Max 1 Jackie Robinson",
                "year": 2021,
                "count": 1,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Griffey-Max-1-Jackie-Robinson.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1617174225",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Griffey-Max-1-Jackie-Robinson.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1617174225",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Griffey-Max-1-Jackie-Robinson.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1617174225"
                }
              },
              {
                "id": "aa91d97a-b1ee-475b-aac2-3ea7ec884212",
                "brand": "Nike",
                "colorway": "Summit White/Black/Green Glow/Sunset",
                "gender": "women",
                "name": "Crater ",
                "releaseDate": "2021-04-08",
                "retailPrice": 110,
                "shoe": "Nike Crater Impact",
                "styleId": "CW2386-101",
                "title": "Nike Crater Impact Summit White Green Glow (W)",
                "year": 2021,
                "count": 1,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Crater-Impact-Summit-White-Green-Glow-W.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616862465",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Crater-Impact-Summit-White-Green-Glow-W.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616862465",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Crater-Impact-Summit-White-Green-Glow-W.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616862465"
                }
              },
              {
                "id": "e87539ea-6dbd-490d-bba8-b4afb4752477",
                "brand": "Nike",
                "colorway": "Light Bone/Black/Stone/Bright Crimson/Chambray Blue",
                "gender": "men",
                "name": "Light Bone ",
                "releaseDate": "2021-04-08",
                "retailPrice": 110,
                "shoe": "Nike Crater Impact",
                "styleId": "DB2477-010",
                "title": "Nike Crater Impact Light Bone Crimson",
                "year": 2021,
                "count": 1,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Crater-Impact-Light-Bone-Crimson.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616862396",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Crater-Impact-Light-Bone-Crimson.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616862396",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Crater-Impact-Light-Bone-Crimson.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616862396"
                }
              },
              {
                "id": "03e93eb9-8aca-47a8-bd6a-d3af5e7c177a",
                "brand": "Nike",
                "colorway": "Black/Black/Red",
                "gender": "men",
                "name": "Wasted Youth",
                "releaseDate": "2021-04-06",
                "retailPrice": 110,
                "shoe": "Nike SB Dunk Low",
                "styleId": "",
                "title": "Nike SB Dunk Low Wasted Youth",
                "year": 2021,
                "count": 1,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-SB-Dunk-Low-Wasted-Youth-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616521006",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-SB-Dunk-Low-Wasted-Youth-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616521006",
                  "thumbUrl": "https://images.stockx.com/images/Nike-SB-Dunk-Low-Wasted-Youth-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616521006"
                }
              },
              {
                "id": "69e0f279-13dc-48c6-93a2-6c6886a21e38",
                "brand": "Nike",
                "colorway": "Black/White-Amarillo-Court Purple",
                "gender": "men",
                "name": "LeBron Lakers",
                "releaseDate": "2021-04-06",
                "retailPrice": 200,
                "shoe": "Nike Air Max 95 NRG",
                "styleId": "CZ3624-001",
                "count": 1,
                "title": "Nike Air Max 95 NRG LeBron Lakers",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Max-95-NRG-LeBron-Lakers.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616536034",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Max-95-NRG-LeBron-Lakers.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616536034",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Max-95-NRG-LeBron-Lakers.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616536034"
                }
              },
              {
                "id": "4ce799f8-7199-4a5e-a888-274acd95971e",
                "brand": "Nike",
                "colorway": "Dark Charcoal/Celery-Saturn Red",
                "gender": "men",
                "name": "Celery",
                "releaseDate": "2021-04-03",
                "retailPrice": 170,
                "shoe": "Nike Air Tuned Max",
                "styleId": "CV6984-001",
                "title": "Nike Air Tuned Max Celery",
                "year": 2021,
                "count": 1,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Tuned-Max-Celery.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611746350",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Tuned-Max-Celery.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611746350",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Tuned-Max-Celery.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611746350"
                }
              },
              {
                "id": "2e28ad7a-56a5-4491-81cc-2dd907794c43",
                "brand": "Nike",
                "colorway": "White/Royal-Red",
                "gender": "men",
                "name": "Los Angeles",
                "releaseDate": "2021-04-01",
                "retailPrice": 90,
                "shoe": "Nike Cortez",
                "styleId": "DA4402-100",
                "title": "Nike Cortez Los Angeles",
                "year": 2021,
                "count": 1,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Cortez-Los-Angeles.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1617174238",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Cortez-Los-Angeles.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1617174238",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Cortez-Los-Angeles.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1617174238"
                }
              },
              {
                "id": "53de8e76-0163-44a5-8969-bd45b2cc7fac",
                "brand": "Nike",
                "colorway": "Neutral Grey/Summit White",
                "gender": "men",
                "name": "Neutral Grey ",
                "releaseDate": "2021-04-01",
                "retailPrice": 140,
                "shoe": "Nike Free Run Trail",
                "styleId": "CW5814-002",
                "title": "Nike Free Run Trail Neutral Grey ",
                "year": 2021,
                "count": 1,
                "media": {
            
                  "imageUrl": "https://images.stockx.com/images/Nike-Free-Run-Trail-Neutral-Grey-Summit-Whiite.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1617122024",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Free-Run-Trail-Neutral-Grey-Summit-Whiite.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1617122024",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Free-Run-Trail-Neutral-Grey-Summit-Whiite.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1617122024"
                }
              },
              {
                "id": "581bf849-fe85-417c-bdee-c5236c7e11c1",
                "brand": "Nike",
                "colorway": "White/Neo Teal",
                "gender": "men",
                "name": "White Neo Teal",
                "releaseDate": "2021-03-30",
                "retailPrice": 120,
                "shoe": "Nike Air Structure OG",
                "styleId": "CV3492-100",
                "title": "Nike Air Structure OG White Neo Teal",
                "year": 2021,
                "count": 1,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Structure-OG-White-Neo-Teal.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615399927",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Structure-OG-White-Neo-Teal.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615399927",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Structure-OG-White-Neo-Teal.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615399927"
                }
              },
              {
                "id": "30c36baf-de09-46d9-adc7-7dd6373323e3",
                "brand": "Nike",
                "colorway": "White/University Gold/Wolf Grey/White",
                "gender": "men",
                "name": "NBA White Gold",
                "releaseDate": "2021-03-29",
                "retailPrice": 110,
                "shoe": "Nike Air Force 1 High",
                "styleId": "CT2306-101",
                "title": "Nike Air Force 1 High NBA White  Gold",
                "year": 2021,
                "count": 1,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Force-1-High-NBA-White-University-Gold.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1617122045",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Force-1-High-NBA-White-University-Gold.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1617122045",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Force-1-High-NBA-White-University-Gold.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1617122045"
                }
              },
              {
                "id": "bc36ccd9-de6c-494b-adf9-56e2f5e872e5",
                "brand": "Nike",
                "colorway": "College Navy/Grey",
                "gender": "women",
                "name": " Navy Grey",
                "releaseDate": "2021-03-29",
                "retailPrice": 100,
                "shoe": "Nike Dunk Low",
                "styleId": "DD1768-400",
                "title": "Nike Dunk Low College Navy Grey (W)",
                "year": 2021,
                "count": 1,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Dunk-Low-College-Navy-Grey-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615920429",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Dunk-Low-College-Navy-Grey-W-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615920429",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Dunk-Low-College-Navy-Grey-W-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615920429"
                }
              },
              {
                "id": "e55a750d-344b-4522-a76f-8bb5972a19cf",
                "brand": "Nike",
                "colorway": "Sail/Medium Curry-Fossil",
                "gender": "men",
                "name": "Medium Curry",
                "releaseDate": "2021-03-29",
                "retailPrice": 110,
                "shoe": "Nike Dunk Low",
                "styleId": "DD1390-100",
                "title": "Nike Dunk Low Medium Curry",
                "year": 2021,
                "count": 1,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Dunk-Low-Medium-Curry-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612991778",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Dunk-Low-Medium-Curry-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612991778",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Dunk-Low-Medium-Curry-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612991778"
                }
              },
              {
                "id": "8099cbdb-85c8-42f3-a482-7659acdc9fb6",
                "brand": "Nike",
                "colorway": "Medium Brown/Transparent/Red",
                "gender": "men",
                "name": "Kiss of Death",
                "releaseDate": "2021-03-27",
                "retailPrice": 140,
                "shoe": "Nike Air Max 1",
                "styleId": "DD1870-200",
                "title": "Nike Air Max 1 Kiss of Death ",
                "year": 2021,
                "count": 1,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Max-1-clot-Kiss-of-Death-CHA-2.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616446709",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Max-1-clot-Kiss-of-Death-CHA-2.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616446709",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Max-1-clot-Kiss-of-Death-CHA-2.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616446709"
                }
              },
              {
                "id": "a252fed1-10e4-4cae-a75c-f4d2e1a2108b",
                "brand": "Nike",
                "colorway": "Net/Deep Red",
                "gender": "men",
                "name": "Kiss of Death",
                "releaseDate": "2021-03-27",
                "retailPrice": 150,
                "shoe": "Nike Air Max 1",
                "styleId": "DD1870-100",
                "title": "Nike Air Max 1 Clot Kiss of Death (2021)",
                "year": 2021,
                "count": 1,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Max-1-Clot-Kiss-of-Death-2021.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613436790",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Max-1-Clot-Kiss-of-Death-2021.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613436790",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Max-1-Clot-Kiss-of-Death-2021.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613436790"
                }
              },
              {
                "id": "0360c190-3691-4b4e-8aca-d66570105ef7",
                "brand": "Nike",
                "colorway": "Black/Chrome-Bright Blue",
                "gender": "men",
                "name": "Skepta",
                "releaseDate": "2021-03-26",
                "retailPrice": 180,
                "shoe": "Nike Air Max Tailwind V",
                "styleId": "CQ8714-001",
                "title": "Nike Air Max Tailwind V Skepta",
                "year": 2021,
                "count": 1,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Max-Tailwind-V-Skepta.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616687822",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Max-Tailwind-V-Skepta.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616687822",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Max-Tailwind-V-Skepta.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616687822"
                }
              },
              {
                "id": "3bbf5c83-6391-49c6-83fe-54e670122dad",
                "brand": "Nike",
                "colorway": "White/Teal-Silver-Black",
                "gender": "men",
                "name": "Evolution",
                "releaseDate": "2021-03-26",
                "retailPrice": 140,
                "shoe": "Nike Air Max 1",
                "styleId": "CW6541-100",
                "title": "Nike Air Max 1 Evolution Of Icons",
                "year": 2021,
                "count": 1,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Max-1-Evolution-Of-Icons-Thumb.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616782518",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Max-1-Evolution-Of-Icons-Thumb.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616782518",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Max-1-Evolution-Of-Icons-Thumb.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616782518"
                }
              },
              {
                "id": "b2330041-6173-41e6-a681-a72a8ac674e4",
                "brand": "Nike",
                "colorway": "Sail-Sheen-Straw-Medium Brown",
                "gender": "men",
                "name": "Bacon (2021)",
                "releaseDate": "2021-03-26",
                "retailPrice": 140,
                "shoe": "Nike Air Max 90 NRG",
                "styleId": "CU1816-100",
                "title": "Nike Air Max 90 NRG Bacon (2021)",
                "year": 2021,
                "count": 1,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Max-90-NRG-Bacon-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616604639",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Max-90-NRG-Bacon-2021-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616604639",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Max-90-NRG-Bacon-2021-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616604639"
                }
              },
              {
                "id": "d445fa4b-95ae-437f-b96c-6e36dcb69f2d",
                "brand": "Nike",
                "colorway": "Light Liquid Lime/Black-Pistachio Frost",
                "gender": "men",
                "name": "Light Liquid Lime",
                "releaseDate": "2021-03-26",
                "retailPrice": 130,
                "shoe": "Nike Air Max Pre-Day",
                "styleId": "DD0338-300",
                "title": "Nike Air Max Pre-Day Light Liquid Lime",
                "year": 2021,
                "count": 1,

                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Max-Pre-Day-Light-Liquid-Lime.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616006530",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Max-Pre-Day-Light-Liquid-Lime.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616006530",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Max-Pre-Day-Light-Liquid-Lime.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616006530"
                }
              },
              {
                "id": "b5591027-aef2-4379-b165-91abc90e31ed",
                "brand": "Nike",
                "colorway": "Metallic Silver/Metallic Silver-Polar Blue",
                "gender": "women",
                "name": "Polar Blue (W)",
                "releaseDate": "2021-03-25",
                "retailPrice": 400,
                "count": 1,
                "shoe": "Nike Air Max 97 Swarovski",
                "styleId": "DH2504-001",
                "title": "Nike Air Max 97 Swarovski Polar Blue (W)",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Max-97-Swarovski-Polar-Blue-W.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616237751",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Max-97-Swarovski-Polar-Blue-W.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616237751",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Max-97-Swarovski-Polar-Blue-W.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616237751"
                }
              },
              {
                "id": "e3aeceb4-4a63-4e9b-b967-730dbe55ae2e",
                "brand": "Nike",
                "colorway": "Light Smoke Grey/White/Black/White",
                "gender": "men",
                "name": "Light Smoke Grey",
                "releaseDate": "2021-03-23",
                "retailPrice": 100,
                "shoe": "Nike Blazer Mid 77",
                "styleId": "CI1172-004",
                "title": "Nike Blazer Mid 77 Light Smoke Grey",
                "year": 2021,
                "count": 1,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Blazer-Mid-77-Light-Smoke-Grey.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616690208",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Blazer-Mid-77-Light-Smoke-Grey.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616690208",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Blazer-Mid-77-Light-Smoke-Grey.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616690208"
                }
              },
              {
                "id": "eac9b7b3-59c9-4b35-b99c-cbdbb9648ea0",
                "brand": "Nike",
                "colorway": "Team Red/White/Black/White",
                "gender": "men",
                "name": "Team Red",
                "count": 1,
                "releaseDate": "2021-03-23",
                "retailPrice": 100,
                "shoe": "Nike Blazer Mid 77",
                "styleId": "CI1172-601",
                "title": "Nike Blazer Mid 77 Team Red",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Blazer-Mid-77-Team-Red.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616690216",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Blazer-Mid-77-Team-Red.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616690216",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Blazer-Mid-77-Team-Red.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616690216"
                }
              },
              {
                "id": "3e38ebd2-be8c-4ad1-8f6e-7eca3bedad6f",
                "brand": "Nike",
                "colorway": "Light Violet/White/White/Light Violet",
                "gender": "child",
                "count": 1,
                "name": "Light Violet (GS)",
                "releaseDate": "2021-03-22",
                "retailPrice": 85,
                "shoe": "Nike Blazer Mid 77",
                "styleId": "DC8248-500",
                "title": "Nike Blazer Mid 77 Light Violet (GS)",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Blazer-Mid-77-Light-Violet-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616690213",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Blazer-Mid-77-Light-Violet-GS.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616690213",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Blazer-Mid-77-Light-Violet-GS.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616690213"
                }
              },
              {
                "id": "b72a79fa-d4c7-4d92-bf9a-aaf19d5ae209",
                "brand": "Nike",
                "colorway": "University Gold/Hyper Crimson/Siren Red",
                "gender": "men",
                "name": "Sunrise Sunset",
                "releaseDate": "2021-03-20",
                "retailPrice": 130,
                "count": 1,
                "shoe": "Nike Air Presto",
                "styleId": "CJ1229-700",
                "title": "Nike Air Presto Sunrise Sunset",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Presto-Sunrise-Sunset.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615846760",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Presto-Sunrise-Sunset.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615846760",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Presto-Sunrise-Sunset.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615846760"
                }
              },
              {
                "id": "5d271e81-a6f4-4ba2-ad36-d3fe39d4b8f2",
                "brand": "Nike",
                "colorway": "Black/Light Blue-White",
                "gender": "men",
                "name": "Rice Ball",
                "releaseDate": "2021-03-19",
                "retailPrice": 140,
                "shoe": "Nike Air Max 90",
                "styleId": "DD5483-010",
                "title": "Nike Air Max 90 Rice Ball",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Max-90-Rice-Ball.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614290863",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Max-90-Rice-Ball.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614290863",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Max-90-Rice-Ball.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614290863"
                }
              },
              {
                "id": "b8b3e81a-52db-4fd9-a9c1-594e0e789782",
                "brand": "Nike",
                "colorway": "Black/Total Orange",
                "gender": "men",
                "name": "Nike Air Max 95",
                "releaseDate": "2021-03-19",
                "retailPrice": 220,
                "shoe": "Nike Air Max 95",
                "styleId": "DD1871-001",
                "title": "Nike Air Max 95",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Max-95-Kim-Jones-Total-Orange.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615823116",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Max-95-Kim-Jones-Total-Orange.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615823116",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Max-95-Kim-Jones-Total-Orange.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615823116"
                }
              },
              {
                "id": "e8ddfdf2-7640-457b-903c-7781175684a4",
                "brand": "Nike",
                "colorway": "Black/Light Blue-White",
                "gender": "women",
                "name": "Rice Ball (W)",
                "releaseDate": "2021-03-19",
                "retailPrice": 140,
                "shoe": "Nike Air Max 90",
                "styleId": "DD5483-010",
                "title": "Nike Air Max 90 Rice Ball (W)",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Max-90-Rice-Ball.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616006494",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Max-90-Rice-Ball.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616006494",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Max-90-Rice-Ball.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616006494"
                }
              },
              {
                "id": "ef3ec874-9073-4a6e-84b1-ddca8be6fb31",
                "brand": "Nike",
                "colorway": "Speed Yellow/Shimmer-White-Siren Red-Black-Pure Platinum",
                "gender": "men",
                "name": "Fried Chicken",
                "releaseDate": "2021-03-19",
                "retailPrice": 140,
                "shoe": "Nike Air Max 90",
                "styleId": "DD5481-735",
                "title": "Nike Air Max 90 Fried Chicken",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Max-90-Fried-Chicken.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614290857",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Max-90-Fried-Chicken.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614290857",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Max-90-Fried-Chicken.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614290857"
                }
              },
              {
                "id": "fd6ebff8-844b-4249-af46-6f90523006f8",
                "brand": "Nike",
                "colorway": "Black/Volt",
                "gender": "men",
                "name": "Kim Jones Total Volt",
                "releaseDate": "2021-03-19",
                "retailPrice": 220,
                "shoe": "Nike Air Max 95",
                "styleId": "DD1871-002",
                "title": "Nike Air Max 95 Kim Jones Total Volt",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Max-95-Kim-Jones-Total-Volt.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615820004",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Max-95-Kim-Jones-Total-Volt.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615820004",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Max-95-Kim-Jones-Total-Volt.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615820004"
                }
              },
              {
                "id": "03527871-a4f4-4c27-8d6a-83cb2a9b41e9",
                "brand": "Nike",
                "colorway": "Multi-Color/Multi-Color",
                "gender": "women",
                "name": "Green Strike (W)",
                "releaseDate": "2021-03-15",
                "retailPrice": 100,
                "shoe": "Nike Dunk Low",
                "styleId": "DD1503-106",
                "title": "Nike Dunk Low Green Strike (W)",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Dunk-Low-White-Multicolor-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616520984",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Dunk-Low-White-Multicolor-W-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616520984",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Dunk-Low-White-Multicolor-W-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616520984"
                }
              },
              {
                "id": "2eb5ab03-ccca-4c72-9517-3a3174494a1c",
                "brand": "Nike",
                "colorway": "Orange Pearl/White",
                "gender": "women",
                "name": "Orange Pearl (W)",
                "releaseDate": "2021-03-15",
                "retailPrice": 100,
                "shoe": "Nike Dunk Low",
                "styleId": "DD1503-102",
                "title": "Nike Dunk Low Orange Pearl (W)",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Dunk-Low-Orange-Pearl-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613671259",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Dunk-Low-Orange-Pearl-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613671259",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Dunk-Low-Orange-Pearl-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613671259"
                }
              },
              {
                "id": "7c0884b3-0e60-46f0-9488-a5692f6dc645",
                "brand": "Nike",
                "colorway": "Blue/White-Gum",
                "gender": "men",
                "name": "Carpet Company",
                "releaseDate": "2021-03-12",
                "retailPrice": 120,
                "shoe": "Nike SB Dunk High",
                "styleId": "CV1677-100",
                "title": "Nike SB Dunk High Carpet Company",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-SB-Dunk-High-Carpet-Company-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615578910",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-SB-Dunk-High-Carpet-Company-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615578910",
                  "thumbUrl": "https://images.stockx.com/images/Nike-SB-Dunk-High-Carpet-Company-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615578910"
                }
              },
              {
                "id": "c0f3fc02-4632-4230-a944-124d12ca6fac",
                "brand": "Nike",
                "colorway": "Particle Grey/Chambray Blue",
                "gender": "men",
                "name": "Space Hippie",
                "releaseDate": "2021-03-12",
                "retailPrice": 150,
                "shoe": "Nike Cosmic Unity",
                "styleId": "DA6725-002/DD2737-002",
                "title": "Nike Cosmic Unity Space Hippie",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Cosmic-Unity-Space-Hippie.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613645235",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Cosmic-Unity-Space-Hippie.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613645235",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Cosmic-Unity-Space-Hippie.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613645235"
                }
              },
              {
                "id": "ef6d55ad-1f8b-4db6-ab51-269c68c9ea0e",
                "brand": "Nike",
                "colorway": "White/Green-Gold",
                "gender": "men",
                "name": "Patricks Day",
                "releaseDate": "2021-03-12",
                "retailPrice": 140,
                "shoe": "Nike Air Max 90",
                "styleId": "DD8555-300",
                "title": "Nike Air Max 90 Patricks Day",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Max-90-St-Patricks-Day-2021.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611008700",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Max-90-St-Patricks-Day-2021.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611008700",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Max-90-St-Patricks-Day-2021.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611008700"
                }
              },
              {
                "id": "0cb0e31f-a9bc-498f-8085-a2551d29cfaf",
                "brand": "Nike",
                "colorway": "Sail/Black-White",
                "gender": "men",
                "name": "Undercover Sail",
                "releaseDate": "2021-03-11",
                "retailPrice": 160,
                "shoe": "Nike Overbreak SP",
                "styleId": "DD1789-200",
                "title": "Nike Overbreak SP Undercover Sail",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Overbreak-SP-Undercover-Sail.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612514243",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Overbreak-SP-Undercover-Sail.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612514243",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Overbreak-SP-Undercover-Sail.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612514243"
                }
              },
              {
                "id": "5916eb9f-3c61-4fc2-aac5-84e924e9d581",
                "brand": "Nike",
                "colorway": "Black/White/Sail",
                "gender": "men",
                "name": "Undercover",
                "releaseDate": "2021-03-11",
                "retailPrice": 160,
                "shoe": "Nike Overbreak SP",
                "styleId": "DD1789-001",
                "title": "Nike Overbreak SP Undercover Black",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Overbreak-SP-Undercover-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612514213",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Overbreak-SP-Undercover-Black.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612514213",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Overbreak-SP-Undercover-Black.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612514213"
                }
              },
              {
                "id": "b3630ec2-b2c0-456e-84a0-edf9204a9383",
                "brand": "Nike",
                "colorway": "Black/Black-Varsity Red",
                "gender": "men",
                "name": "Black Red",
                "releaseDate": "2021-03-11",
                "retailPrice": 160,
                "shoe": "Nike Lebron 18 Low",
                "styleId": "CV7562-001",
                "title": "Nike Lebron 18 Low Black Red",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Lebron-18-Low-Black-Red.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614290887",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Lebron-18-Low-Black-Red.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614290887",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Lebron-18-Low-Black-Red.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614290887"
                }
              },
              {
                "id": "124cef0b-081a-44e5-aec4-bccc7036838b",
                "brand": "Nike",
                "colorway": "Wolf Grey/Lime",
                "gender": "men",
                "name": "Wolf Grey",
                "releaseDate": "2021-03-10",
                "retailPrice": 140,
                "shoe": "Nike Space Hippie 01",
                "styleId": "",
                "title": "Nike Space Hippie 01 Wolf Grey",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Space-Hippie-01-Wolf-Grey.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614793249",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Space-Hippie-01-Wolf-Grey.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614793249",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Space-Hippie-01-Wolf-Grey.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614793249"
                }
              },
              {
                "id": "206664d5-841d-4791-b415-8a66b83db48d",
                "brand": "Nike",
                "colorway": "White/Orange Blaze",
                "gender": "women",
                "name": "Syracus (2021)",
                "releaseDate": "2021-03-10",
                "retailPrice": 110,
                "shoe": "Nike Dunk High",
                "styleId": "DD1869-100",
                "title": "Nike Dunk High Syracuse (2021)",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Dunk-High-Syracuse-W-2021.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614461623",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Dunk-High-Syracuse-W-2021.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614461623",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Dunk-High-Syracuse-W-2021.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614461623"
                }
              },
              {
                "id": "e175c189-cf87-4007-bc94-e5b919c4c75c",
                "brand": "Nike",
                "colorway": "White/Black",
                "gender": "women",
                "name": "White Black",
                "releaseDate": "2021-03-10",
                "retailPrice": 100,
                "shoe": "Nike Dunk Low",
                "styleId": "DD1503-101",
                "title": "Nike Dunk Low White Black ",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Dunk-Low-White-Black-2021-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611766850",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Dunk-Low-White-Black-2021-W-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611766850",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Dunk-Low-White-Black-2021-W-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611766850"
                }
              },
              {
                "id": "dfb85e45-59b7-45ff-a8cd-a8ae81b3d537",
                "brand": "Nike",
                "colorway": "Barely Green/Black",
                "gender": "men",
                "name": "SE All-Star (2021)",
                "releaseDate": "2021-03-09",
                "retailPrice": 110,
                "shoe": "Nike Dunk High",
                "styleId": "DD1398-300/DD2313-300",
                "title": "Nike Dunk High SE All-Star (2021)",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Dunk-High-SE-All-Star-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615579078",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Dunk-High-SE-All-Star-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615579078",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Dunk-High-SE-All-Star-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615579078"
                }
              },
              {
                "id": "9010c398-1358-4ee0-9991-323a1fed47e3",
                "brand": "Nike",
                "colorway": "Blue/Teal/Light Blue",
                "gender": "men",
                "name": "Amalgam",
                "releaseDate": "2021-03-07",
                "retailPrice": 150,
                "shoe": "Nike Cosmic Unity",
                "styleId": "DA6725-500",
                "title": "Nike Cosmic Unity Amalgam",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Cosmic-Unity-Amalgam.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613645232",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Cosmic-Unity-Amalgam.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613645232",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Cosmic-Unity-Amalgam.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613645232"
                }
              },
              {
                "id": "ff319859-e012-47eb-b57c-5101c1c1db5b",
                "brand": "Nike",
                "colorway": "Black / Black / Platinum Tint / Glacier Ice",
                "gender": "child",
                "name": "Warped (GS)",
                "releaseDate": "2021-03-06",
                "retailPrice": 180,
                "shoe": "Nike Lil Posite One",
                "styleId": "CW1596-005",
                "title": "Nike Lil Posite One Warped (GS)",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Lil-Posite-One-Warped-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614964298",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Lil-Posite-One-Warped-GS.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614964298",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Lil-Posite-One-Warped-GS.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614964298"
                }
              },
              {
                "id": "043c64c9-4114-4923-8f84-9d58a878719c",
                "brand": "Nike",
                "colorway": "Galactic Jade/Midnight Navy",
                "gender": "men",
                "name": "Galactic Jade",
                "releaseDate": "2021-03-05",
                "retailPrice": 120,
                "shoe": "Nike Air Force 1 Low Craft",
                "styleId": "CV1755-300",
                "title": "Nike Air Force 1 Low Craft Galactic Jade",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Force-1-Low-Craft-Galactic-Jade.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1609455482",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Force-1-Low-Craft-Galactic-Jade.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1609455482",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Force-1-Low-Craft-Galactic-Jade.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1609455482"
                }
              },
              {
                "id": "4b747869-626f-4612-b5e5-0465635b3279",
                "brand": "Nike",
                "colorway": "Velvet Brown/Dark Russet-Dark Curry-Sail",
                "gender": "men",
                "name": "Dark Russet",
                "releaseDate": "2021-03-05",
                "retailPrice": 120,
                "shoe": "Nike Dunk High PRM",
                "styleId": "DD1401-200",
                "title": "Nike Dunk High PRM Dark Russet",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Dunk-High-PRM-Dark-Russet-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613573609",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Dunk-High-PRM-Dark-Russet-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613573609",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Dunk-High-PRM-Dark-Russet-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613573609"
                }
              },
              {
                "id": "105b3935-60d2-4535-9509-1df17e0fda0a",
                "brand": "Nike",
                "colorway": "Multi-Color/Multi-Color",
                "gender": "men",
                "name": "City Market",
                "releaseDate": "2021-03-04",
                "retailPrice": 110,
                "shoe": "Nike Dunk Low SP",
                "styleId": "DA6125-900",
                "title": "Nike Dunk Low SP City Market",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Dunk-Low-SP-Thank-You-For-Caring-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615920434",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Dunk-Low-SP-Thank-You-For-Caring-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615920434",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Dunk-Low-SP-Thank-You-For-Caring-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615920434"
                }
              },
              {
                "id": "5b99f618-110e-4229-8bec-5e494ce0aeee",
                "brand": "Nike",
                "colorway": "Black/Vast Grey/Volt/Total Orange",
                "gender": "men",
                "name": "READYMADE Black",
                "releaseDate": "2021-02-27",
                "retailPrice": 160,
                "shoe": "Nike Blazer Mid",
                "styleId": "CZ3589-001",
                "title": "Nike Blazer Mid READYMADE Black",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Blazer-Mid-READYMADE-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613413574",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Blazer-Mid-READYMADE-Black-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613413574",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Blazer-Mid-READYMADE-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613413574"
                }
              },
              {
                "id": "1be2567a-6322-434d-a1e3-64948d6295e2",
                "brand": "Nike",
                "colorway": "Mystic Green/Black-Metallic Silver-Metallic Gold",
                "gender": "men",
                "name": "City Special Atlanta",
                "releaseDate": "2021-02-26",
                "retailPrice": 210,
                "shoe": "Nike Air VaporMax Plus",
                "styleId": "DH0145-300",
                "title": "Nike Air VaporMax Plus City Special Atlanta",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-VaporMax-Plus-City-Special-Atlanta.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613645217",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-VaporMax-Plus-City-Special-Atlanta.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613645217",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-VaporMax-Plus-City-Special-Atlanta.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613645217"
                }
              },
              {
                "id": "4445d853-031d-4b33-8612-de1f4b05e469",
                "brand": "Nike",
                "colorway": "Teal/Teal/White",
                "gender": "women",
                "name": "City Special NYC (W)",
                "releaseDate": "2021-02-26",
                "retailPrice": 130,
                "shoe": "Nike Air Max Up",
                "styleId": "DH0154-300",
                "title": "Nike Air Max Up City Special NYC (W)",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Max-Up-City-Special-NYC-W.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613560439",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Max-Up-City-Special-NYC-W.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613560439",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Max-Up-City-Special-NYC-W.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613560439"
                }
              },
              {
                "id": "60f03fcc-da40-401b-99d2-5f4523ef613d",
                "brand": "Nike",
                "colorway": "Dyed Red/Grey/Natural",
                "gender": "men",
                "name": "The Whitaker Group",
                "releaseDate": "2021-02-26",
                "retailPrice": 120,
                "shoe": "Nike Waffle One SE",
                "styleId": "DC4247-001",
                "title": "Nike Waffle One SE The Whitaker Group",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Waffle-One-Social-Status.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614026095",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Waffle-One-Social-Status.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614026095",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Waffle-One-Social-Status.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614026095"
                }
              },
              {
                "id": "04e722ab-9596-47df-a8f5-ef7c17347665",
                "brand": "Nike",
                "colorway": "White/Vast Grey",
                "gender": "men",
                "name": "Retro White Grey ",
                "releaseDate": "2021-02-25",
                "retailPrice": 120,
                "shoe": "Nike Dunk High",
                "styleId": "DD1399-100",
                "title": "Nike Dunk High Retro White  Grey ",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Dunk-High-Retro-White-Vast-Grey-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611953522",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Dunk-High-Retro-White-Vast-Grey-2021-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611953522",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Dunk-High-Retro-White-Vast-Grey-2021-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611953522"
                }
              },
              {
                "id": "18f0dc26-a34d-43b8-8c1a-04b19604523c",
                "brand": "Nike",
                "colorway": "Pink Foam/White/University Red-Pine Green",
                "gender": "men",
                "name": "Rose Pink",
                "releaseDate": "2021-02-25",
                "retailPrice": 120,
                "shoe": "Nike Air Force 1 Low",
                "styleId": "CU6312-600",
                "title": "Nike Air Force 1 Low Rose Pink",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Force-1-Low-Rose-Pink-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615918211",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Force-1-Low-Rose-Pink-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615918211",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Force-1-Low-Rose-Pink-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615918211"
                }
              },
              {
                "id": "20a9eb4b-f1e3-4eef-9289-4e22f8592043",
                "brand": "Nike",
                "colorway": "Sail/Football Grey-Pale Ivory",
                "gender": "women",
                "name": "Football Grey ",
                "releaseDate": "2021-02-25",
                "retailPrice": 125,
                "shoe": "Nike Dunk High",
                "styleId": "DD1869-102",
                "title": "Nike Dunk High Sail Football Grey (W)",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Dunk-High-Sail-Football-Grey-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615920386",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Dunk-High-Sail-Football-Grey-W-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615920386",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Dunk-High-Sail-Football-Grey-W-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615920386"
                }
              },
              {
                "id": "6f092b13-127e-4d94-89be-8bc7ae5612f7",
                "brand": "Nike",
                "colorway": "White/White/University Red-Pine Green",
                "gender": "men",
                "name": "Rose White",
                "releaseDate": "2021-02-25",
                "retailPrice": 120,
                "shoe": "Nike Air Force 1 Low",
                "styleId": "CU6312-100",
                "title": "Nike Air Force 1 Low Rose White",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Force-1-Low-Rose-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615918299",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Force-1-Low-Rose-White-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615918299",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Force-1-Low-Rose-White-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615918299"
                }
              },
              {
                "id": "938a34a3-9427-4085-8e6d-abd11b1b38d3",
                "brand": "Nike",
                "colorway": "White/Black/Multicolor",
                "gender": "men",
                "name": "Air Max  ",
                "releaseDate": "2021-02-25",
                "retailPrice": 200,
                "shoe": "Nike Air Vapormax EVO NRG",
                "styleId": "DD3054-001",
                "title": "Nike Air Vapormax EVO NRG Air Max Day Mashup (2021)",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Vapormax-EVO-NRG-Air-Max-Day-Mashup-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615919927",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Vapormax-EVO-NRG-Air-Max-Day-Mashup-2021-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615919927",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Vapormax-EVO-NRG-Air-Max-Day-Mashup-2021-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615919927"
                }
              },
              {
                "id": "0d3ae595-10ab-4cb7-bab6-d57cf53f8ec8",
                "brand": "Nike",
                "colorway": "Fireberry/Black/Light Blue Fury",
                "gender": "men",
                "name": "Fireberry",
                "releaseDate": "2021-02-23",
                "retailPrice": 160,
                "shoe": "Nike Lebron 18 Low",
                "styleId": "CV7562-600",
                "title": "Nike Lebron 18 Low Fireberry",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Lebron-18-Low-Fireberry-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1617134972",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Lebron-18-Low-Fireberry-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1617134972",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Lebron-18-Low-Fireberry-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1617134972"
                }
              },
              {
                "id": "adbd992a-0c39-4a37-80e1-bdda5c8efcd9",
                "brand": "Nike",
                "colorway": "Green/White-Translucent",
                "gender": "men",
                "name": "Play for the Future",
                "releaseDate": "2021-02-23",
                "retailPrice": 110,
                "shoe": "Nike PG 5",
                "styleId": "CW3146-300",
                "title": "Nike PG 5 Play for the Future",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-PG-5-Play-for-the-Future.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613788072",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-PG-5-Play-for-the-Future.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613788072",
                  "thumbUrl": "https://images.stockx.com/images/Nike-PG-5-Play-for-the-Future.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613788072"
                }
              },
              {
                "id": "98e9621e-87d1-4777-81be-d53aa49b85cc",
                "brand": "Nike",
                "colorway": "Grey/Black-White",
                "gender": "men",
                "name": "VX1000",
                "releaseDate": "2021-02-20",
                "retailPrice": 110,
                "shoe": "Nike SB Dunk Low",
                "styleId": "CV1659-001",
                "title": "Nike SB Dunk Low VX1000",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-SB-Dunk-Low-VX1000-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615922545",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-SB-Dunk-Low-VX1000-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615922545",
                  "thumbUrl": "https://images.stockx.com/images/Nike-SB-Dunk-Low-VX1000-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615922545"
                }
              },
              {
                "id": "68121e71-3fd7-466f-b62d-3ac6c44d6656",
                "brand": "Nike",
                "colorway": "White/Scream Green-Royal Blue-Black",
                "gender": "men",
                "name": "Scream Green (2021)",
                "releaseDate": "2021-02-19",
                "retailPrice": 130,
                "shoe": "Nike Air Huarache",
                "styleId": "DD1068-100",
                "title": "Nike Air Huarache Scream Green (2021)",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Huarache-Scream-Green-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616604606",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Huarache-Scream-Green-2021-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616604606",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Huarache-Scream-Green-2021-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1616604606"
                }
              },
              {
                "id": "82329304-a370-480a-bd77-01d3fb2d0fdf",
                "brand": "Nike",
                "colorway": "Off-Noir/Dark Smoke Grey-White-Light Silver",
                "gender": "men",
                "name": "Dark Smoke",
                "releaseDate": "2021-02-19",
                "retailPrice": 90,
                "shoe": "Nike Challenger OG",
                "styleId": "CW7645-007",
                "title": "Nike Challenger OG Dark Smoke Grey",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Challenger-OG-Dark-Smoke-Grey.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614228263",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Challenger-OG-Dark-Smoke-Grey.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614228263",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Challenger-OG-Dark-Smoke-Grey.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614228263"
                }
              },
              {
                "id": "2af30ea6-fdf6-4d63-89cb-19be7654ae98",
                "brand": "Nike",
                "colorway": "Sail/Coast-University Gold",
                "gender": "women",
                "name": "Coast (W)",
                "releaseDate": "2021-02-18",
                "retailPrice": 100,
                "shoe": "Nike Dunk Low",
                "styleId": "DD1503-100",
                "title": "Nike Dunk Low Coast (W)",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Dunk-Low-Coast-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611766524",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Dunk-Low-Coast-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611766524",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Dunk-Low-Coast-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611766524"
                }
              },
              {
                "id": "96e3abdc-55dc-415e-90b7-b167682cbe5d",
                "brand": "Nike",
                "colorway": "Black/Black/Varsity Red",
                "gender": "men",
                "name": "Bred",
                "releaseDate": "2021-02-18",
                "retailPrice": 180,
                "shoe": "Nike Air Total Max Uptempo",
                "styleId": "CV0605-002",
                "title": "Nike Air Total Max Uptempo Bred",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Total-Max-Uptempo-Bred.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613248474",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Total-Max-Uptempo-Bred.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613248474",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Total-Max-Uptempo-Bred.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613248474"
                }
              },
              {
                "id": "1f717c85-f121-4703-bb8f-4df22d6fa28d",
                "brand": "Nike",
                "colorway": "Black/Anthracite/Racer Blue",
                "gender": "men",
                "name": "Black",
                "releaseDate": "2021-02-15",
                "retailPrice": 120,
                "shoe": "Nike Go FlyEase",
                "styleId": "CW5883-002",
                "title": "Nike Go FlyEase Black",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Go-FlyEase-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612350460",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Go-FlyEase-Black.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612350460",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Go-FlyEase-Black.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612350460"
                }
              },
              {
                "id": "65fcde74-4e2d-4e65-95d2-c6540239d1c3",
                "brand": "Nike",
                "colorway": "White/Celestine Blue/Volt",
                "gender": "men",
                "name": "Celestine Blue",
                "releaseDate": "2021-02-15",
                "retailPrice": 120,
                "shoe": "Nike Go FlyEase",
                "styleId": "CW5883-100",
                "title": "Nike Go FlyEase Celestine Blue",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Go-FlyEase-Celestine-Blue.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612350430",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Go-FlyEase-Celestine-Blue.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612350430",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Go-FlyEase-Celestine-Blue.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612350430"
                }
              },
              {
                "id": "6feea18e-19b4-4d0b-a514-f807a5724d8f",
                "brand": "Nike",
                "colorway": "Black/Black-Reflective",
                "gender": "men",
                "name": "Black Reflective",
                "releaseDate": "2021-02-15",
                "retailPrice": 200,
                "shoe": "Nike Air Max 95 NDSTRKT",
                "styleId": "CZ3591-001",
                "title": "Nike Air Max 95 NDSTRKT Black Reflective",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Max-95-NDSTRKT-Black-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612990336",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Max-95-NDSTRKT-Black-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612990336",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Max-95-NDSTRKT-Black-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612990336"
                }
              },
              {
                "id": "895dfade-0654-4d38-8b5a-f6a02e3ce6c0",
                "brand": "Nike",
                "colorway": "White/Black-Teal",
                "gender": "men",
                "name": " Freshwater",
                "releaseDate": "2021-02-15",
                "retailPrice": 170,
                "shoe": "Nike Air Griffey Max 1",
                "styleId": "DD8558-100",
                "title": "Nike Air Griffey Max 1 White Freshwater",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Griffey-Max-1-White-Freshwater-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611082351",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Griffey-Max-1-White-Freshwater-2021-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611082351",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Griffey-Max-1-White-Freshwater-2021-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611082351"
                }
              },
              {
                "id": "bcf4c578-98d4-4ed8-91fe-dcb1e1b9bf86",
                "brand": "Nike",
                "colorway": "Black/Dynamic Turquoise/Hyper Crimson",
                "gender": "men",
                "name": "Nike Dynamic ",
                "releaseDate": "2021-02-15",
                "retailPrice": 120,
                "shoe": "Nike Go FlyEase",
                "styleId": "CW5883-001",
                "title": "Nike Go FlyEase Dynamic Turquoise",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Go-FlyEase-Dynamic-Turquoise.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612350463",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Go-FlyEase-Dynamic-Turquoise.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612350463",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Go-FlyEase-Dynamic-Turquoise.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612350463"
                }
              },
              {
                "id": "e1dbc5f6-080d-46d6-9596-9805f82b0697",
                "brand": "Nike",
                "colorway": "Black/Neon Yellow-Medium Grey",
                "gender": "men",
                "name": "Neon",
                "releaseDate": "2021-02-15",
                "retailPrice": 200,
                "shoe": "Nike NDSTRKT Air Max 95",
                "styleId": "CZ3591-002",
                "title": "Nike NDSTRKT Air Max 95 Neon",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-NDSTRKT-Air-Max-95-Neon.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1606849772",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-NDSTRKT-Air-Max-95-Neon.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1606849772",
                  "thumbUrl": "https://images.stockx.com/images/Nike-NDSTRKT-Air-Max-95-Neon.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1606849772"
                }
              },
              {
                "id": "4f833e8a-d9d6-4837-8fdb-8df0054ecc21",
                "brand": "Nike",
                "colorway": "Dark Olive/White-Varsity Maize-Ivory",
                "gender": "toddler",
                "name": "Stussy Dark Olive",
                "releaseDate": "2021-02-12",
                "retailPrice": 130,
                "shoe": "Nike Air Huarache",
                "styleId": "",
                "title": "Nike Air Huarache Stussy Dark Olive (2021) (TD)",
                "year": 2021,
                "media": {
                  "imageUrl": "https://images.stockx.com/images/Nike-Air-Huarache-Stussy-Dark-Olive-2021-TD.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613176839",
                  "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Huarache-Stussy-Dark-Olive-2021-TD.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613176839",
                  "thumbUrl": "https://images.stockx.com/images/Nike-Air-Huarache-Stussy-Dark-Olive-2021-TD.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613176839"
                }
              },
             
        ],
        cart:[],
        total:0
      
    }
    addCart=(id) =>{
      const {products,cart} =this.state
      const check = cart.every(item =>{
        return item.id !== id
      })
      if(check){
        const data = products.filter(product =>{
          return product.id === id
        })
        this.setState({cart:[...cart,...data]})
      }
      else{
        alert("the product has been added to cart.")
      }
    }
    reduction=id=>{ 
        const {cart} =this.state
        cart.forEach(item => {
          if(item.id === id){
            item.count === 1 ? item.count = 1 : item.count -=1
          }
        });
        this.setState({cart: cart})
        this.getTotal()
    }
    increase =id=>{
      const {cart} =this.state
      cart.forEach(item => {
        if(item.id ===id){
          item.count +=1
        }
      });
      this.setState({cart:cart})
      this.getTotal()

    }
    removeProduct =id=>{
      if(window.confirm("Do you want to delete this product?")){
        const {cart} = this.state
      cart.forEach((item, index) =>{
        if(item.id ===id){
          cart.splice(index,1)
        }
      })
      this.setState({cart:cart})
      this.getTotal()
      }
    }
    getTotal=() =>{
      const{cart} =this.state
      const res = cart.reduce((prev,item)=>{
        return prev + (item.retailPrice * item.count)
      },0)
      this.setState({total:res})
    }
    componentDidUpdate(){
      localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
      localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
  };

  componentDidMount(){
      const dataCart = JSON.parse(localStorage.getItem('dataCart'));
      if(dataCart !== null){
          this.setState({cart: dataCart});
      }
      const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
      if(dataTotal !== null){
          this.setState({total: dataTotal});
      }
  }

    render(){
        const {products,cart,total} =this.state
        const {addCart,reduction,increase, removeProduct,getTotal } =this
         
        return (
            <DataContext.Provider value ={{products ,addCart,cart,reduction,total,increase, removeProduct,getTotal }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export default DataProvider