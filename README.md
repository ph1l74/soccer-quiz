This project is just a **React** practice demonstartion.

## What is it?

Just a simple quiz. 

## Necessaries?

Yeah, you have to install:
1. NodeJS.

## How can I build it?

First of all you need to build a frontend application:<br />
1. Change directory in terminal to **src-frontend**
2. Run `npm install`*.
3. Run `npm run build`.
4. A `build` folder should appear.

*Look at Necessaries, 1. </br>

## How can I run it?
1. Just open the **index.html**.

## I need to inser some Custom Code. What should I do?
1. Change directory in terminal to **src-frontend**
2. If you need to insert JS-code (like GoogleAnalyticsAPI):
   1. Open **public** directory.
   2. Edit **index.html** file.
   3. Save it.
   4. Go to the **Step 4**.
3. If you need to edit some HTML-code:
   1. Open **src/Components** directory.
   2. Edit **MainContainer** file. All the markdown is there (yeah, it's not good).
   3. Save it.
   4. Go to the **Step 4**.
4. Run `npm install` in terminal in **src-frontend** directory*.
5. Run `npm run build` in terminal in **src-frontend** directory.
6. A **build** folder should appear.
7. Upload this folder to any resource you want.

## I need to change some questions. What to do!?
1. Just edit the **src-frontend/public/data/data.json** file.

## WTF is data.json?
This is the main file in this project. All data about the quiz, questions, answers is there. File contains array of quiz-objects. Quiz object has keys of path (the url-path where your quiz will be available), questions (an array of qusetion-objects what contains question text, coefficient and array on answers) and buttonText(the text of the button in the end of quiz), buttonURL(redirect link of the "final" button), footerText (text of the "final" quiz stage).

## I want to deploy my quiz.
1. Go to **src-frontend**.
2. Edit **package.json**
3. Change **homepage** parameter to adress you want to deploy your quiz.
4. Run `npm run build` in terminal in **src-frontend** directory.
5. A **build** folder should appear.
6. Upload **build** folder to any resource you want.