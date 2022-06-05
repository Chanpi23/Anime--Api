const express = require ('express')
const app = express ()
const PORT= 8000

const sailor= {
   'sailor mars' : {
    'age':  15,
    'birthName':  'Rei Hino',
    'birthLocation': 'Minato-ku, Tokyo, Japan',
    'likes' : 'Zazen (meditating), ancient writing, rubies, Thai food, fugu, white Casablancas, pandas, small lizards, divination, the colors red and black, plum juice',
    'dislikes': 'Canned asparagus, television, men, modern society '
   },
   'sailor chibi moon' : {
       'age': 7,
       'birthName': 'Chibiusa',
       'birthLocation':  'Crystal Tokyo, Azabu Juuban, Tokyo',
       'likes': 'The colors pink and red, pudding, pancakes, rabbits, drawing, gardening, Helios',
       'dislikes':  'Language classes, carrots, housekeeping, thunder and lightning, ghosts, vampires, dentists, needles'
   },
   'sailor venus' : {
    'age': 15,
    'birthName': 'Aino Minako',
    'birthLocation':  'Shiba Koen, Minato ward; Tokyo, Japan',
    'likes': 'Playing pranks, chasing after idols, curry, video games, jokes, physical education, the colors yellow and red',
    'dislikes' : 'Her mother, police officers, math, English class, shiitake, nerds (in Codename: Sailor V)'
},
'sailor mercury' : {
    'age': 15,
    'birthName': 'Mizuno Ami',
    'birthLocation':  'Azabu-Juban, Minato ward; Tokyo, Japan',
    'likes': 'Reading, chess, swimming, sandwiches, the color blue, mathematics, computers, technology',
    'dislikes': 'Failing, Love Letters'
},
'sailor jupiter' : {
    'age': 16,
    'birthName': 'Kino Makoto',
    'birthLocation':  'Azabu-Juban, Minato ward; Tokyo, Japan',
    'likes': 'Baking (especially cherry pies), cooking, gardening, flower arranging, romance novels, bargain hunting, martial arts, video games, shopping, the color pink, home economics',
    'dislikes' : 'Cheaters, airplanes, biology'
},
'sailor saturn' : {
    'age': 13,
    'birthName': 'Tomoe Hotaru',
    'birthLocation':  'Moon Kingdom and Crystal Tokyo',
    'likes' : 'Japanese buckwheat noodles, the color purple, collecting lamps, world history, poetry',
    'dislikes' : 'Milk, marathons, sports, Kaolinite'
},
'sailor pluto' : {
    'age': 20,
    'birthName': 'Meiou Setsuna',
    'birthLocation':  'Space-Time Door; Tokyo, Japan',
    'likes' : 'Physics, green tea, shopping, sewing, fashion',
    'dislikes': 'Cockroaches, eggplant, the study of music'
},
'sailor uranus' : {
    'age': 16,
    'birthName': 'Tenou Haruka',
    'birthLocation':  'Tokyo, Japan',
    'likes': 'Race car driving, running, salad, physical education, flirting',
    'dislikes': 'Natto, modern Japanese'
},
'sailor neptune' : {
    'age': 16,
    'birthName': 'Kaiō Michiru',
    'birthLocation':  'Tokyo, Japan',
    'likes':  'Collecting cosmetics, playing the violin, swimming, painting, music, sashimi, aquariums; the colors turquoise, teal, and aquamarine',
    'dislikes': ' Sea cucumbers, kikurage, physical education'
},
'sailor moon' : {
    'age':  15,
    'birthName' : 'Tsukino Usagi',
    'birthLocation' : 'Azabu-Juban, Minato ward; Tokyo, Japan',
    'likes':  'Sweets, Video Games, Comics/Manga, Boys, Napping',
    'dislikes': 'Math, English class, dentists, thunder, lightning, carrots'
},
'sailor star healer' :{
    'age': 16,
    'birthName' : ' Yaten Kou ',
    'birthLocation': 'Kinmoku Tokyo, Japan (briefly)'
},
'sailor star fighter' :{
    'age': 16,
    'birthName' : ' Kou Seiya',
    'birthLocation': 'Kinmoku Tokyo, Japan (briefly)',
    'likes': 'The color red, ruby, hamburger, physical education, American football, Usagi Tsukino',
    'dislikes': 'Literature'
},
'sailor star maker' :{
    'age': 16,
    'birthName' : 'Kou Taiki',
    'birthLocation': 'Kinmoku; Tokyo (briefly)',
    'likes': 'The color Blue, Emerald, Sushi, literature'
},
'unknown' :{
    'age': 0,
    'birthName' : ' unknown',
    'birthLocation': 'unknown'
}


}


app.get ('/' , (request, response) => {
    response.sendFile (__dirname +'/index.html')
})
 app.get('/api/:name', (request,response) => {
     const  sailorName= request.params.name.toLowerCase()

     if (sailor[sailorName]) {
         response.json(sailor[sailorName])
     }else {
         response.json(sailor['unknown'])
     
     }
 })

app.listen (PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta GO Catch It`)
})