### Character builder

##This project allows you to input your information and it will generate a person based on your data!

#Instructions for use:

1. Open the application: https://character-builder.vercel.app/
2. Input the requested data within the form.
3. Click Submit! (This will show you your character that it has created).

#Instruction for download:

1. Download the files from github
2. Place the files within your react files
3. Install node modules in the terminal:
   a. npm install moment --save
   b. npm install --save styled-components
4. run your app! (make sure you are in the folder the application is in then use npm start!)

#In-Depth Description:

This app calculates different pieces of your data:

-> The head calculates your age with the date of birth that you input as well as the gender option. If you are over 50 the app will display an older head on your character!

-> The Torso calculates your occupation that you have selected then generates the torso based on what you chose!

-> The legs will be your favourite colour that you selected!

#Reasons for using different react libraries.

1. styled.components: I used styled components, because it is simple and allows me to style each of my components from within my component file without making it look messy. It also allows for traditional css within react which is a bonus because i am strongly familiar with css.

2. moment.js: I used moment.js to allow me to format the date input as well as capture todays date so that I can compare each variable and allow me to find the age of the person. Moment.js allowed me to simply find the difference as well as obtain todays date.

#Other Side notes:

-> In all of my apps, I usually refrain from using comments as comments can make code unreadable and look messy and I am a person who likes clean things.
