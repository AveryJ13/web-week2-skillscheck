//////////////////SETUP////////////////////
// Close all other index.html files and open the index.html file in javascript-4/index.html.

//////////////////Step 1////////////////////
// Create a new array called 'faveColors' and assign it a value of your three favorite colors as strings.

// CODE HERE
let faveColors = ['red', 'blue', 'black']
//////////////////Step 2////////////////////
// Create an object called 'me' that has these keys: firstname, superHeroName, homeTown, superPowers, superPowerXP, and profileImage. 

// The firstName key should have a value of your name as a string. 

// The superHeroName key should be your name if you were a super hero. Feel free to jazz it up and get silly with it, e.g. "Thunderous Gas Man". 

// The homeTown key value you should be your home town. 

// The superPowers key value should be an array with your three super powers as strings. e.g. ['Mega Blast', 'Thunder From Down Under', 'Calamitous Crop Duster']

//  The superPowerXP key value should be a method that returns a random number between 1-100. Use Math.floor(Math.random() * 100) + 1 

// The profileImage key value should be a method that returns this url `https://randomuser.me/api/portraits/med/lego/${Math.floor(Math.random() * 10) + 1 }.jpg`.

// CODE HERE
let me = {
    firstname: 'avery',
    superHeroName: 'santa',
    homeTown: 'ammon',
    superPowers: ['Naughty', 'Nice', 'Presents'],
    superPowerXP:  function(){return Math.floor(Math.random() * 100) + 1},
    profileImage: function(){
        return 'data:image/jpeg;base64,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'
    }
}
//////////////////Step 3////////////////////
// In this step, you will create three variables that will hold some data from your me object. The first variable you create should be 'regularName', and it should receive its value from the value of your firstName key on the me object above. The next variable is 'superName' which should have its value assigned as the value of the superHeroName property on the me object. The last variable you should create is 'homeTown' which will be the value of homeTown on the me object

// CODE HERE
let regularName = me.firstname
let superName = me.superHeroName
let homeTown = me.homeTown
//////////////////Step 4////////////////////
//Create a function called 'setColor' that takes in one parameter called 'arr' that is an array of colors. Make sure that we only ever have three colors by using splice to trim the array to just 3 colors. 

// Next, create a for loop to loop over the remaining three colors. If any of the colors is 'blue', change it's value to '#4D4DFF' (which is just a more appealing shade of blue). Outside of the for loop but still inside of setColor, invoke the function called 'background' which will take in three arguments. These arguments should be the three items remaining in your colors array. 

// CODE HERE
function setColor(arr){
    arr.splice(3)
    
    for(i = 0; i < arr.length; i++){
        if(arr[i] === 'blue'){
            arr[i] = '#4D4DFF'
            
        }
        
    }
    background(...arr)
    console.log()
}
//////////////////Step 5////////////////////
//Create a function called 'setPowers' that takes in 'arr' as a parameter. In your setPowers function, loop over the arr parameter and run a function we created called createLi(), which will take each item of the array as an argument. Remember, you did not create the createLi function. The createLi function is a function we created that determines how the content is displayed.

// CODE HERE
function setPowers(arr){
    for(i = 0; i < arr.length; i++){
        createLi(arr[i])
    }
}

//////////////////Step 6////////////////////
//Lastly, create a function called 'redactInfo' that will take in an object called 'obj' as a parameter. Now, imagine your super hero needs to go undercover, and you need to remove all info about them. That is what this function will do. In your function, loop over the obj parameter passed in, and change each keys value to 'redacted'. Outside of the loop but still in the redactInfo function, run the function redacted() which is a function we created that will update the text on the screen.

// CODE HERE
function redactInfo(obj){
    for(key in obj){
        key = 'radacted'
    }
    redacted()
}