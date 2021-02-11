const { html } = require('cheerio');
const cheerio = require('cheerio')
const fetch = require('node-fetch')
//! ----- const PORT = process.env.PORT || 8000;

const $ = cheerio.load('<h2 class="title">Hello world</h2>');

/*
$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

let classTitle =$('.title')
console.log(classTitle.text())

const html = $.html()
console.log(html)
*/

fetch('https://espn.com')
    .then(response => {
        return response.text();//? this is saying, change this to html
    })
    .then(html => {
        //console.log(html); //? this is printing the html
        //* the next step is to pass the html into the cheerio.load($)
        const $ = cheerio.load(html) //? html goes here
        const moduleHeader = $('module__header')//? pass in the class
        console.log(moduleHeader.text()) //? if more than 1, element has more than one element with that class
    })


    //TODO --- to work on
    //TODO --- find some websites that you want to get data from
    //cnn.com
    //npr.com
    //nyt.com

    //TODO --- find a class inside of Chrome Dev Tools
    //TODO --- Try to print that class back
