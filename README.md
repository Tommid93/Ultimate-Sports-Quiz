![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# The Ultimate Sports Quiz

## Introduction
Before I explain my project I wanted to point out that I had already completed 6 months of learning on Javascript before being this course. The interest I had in this is what inspired me to want to take this further. I bring this up as I feel that my coding for this project is a little bit more advanced than a beginner. I came into this project with some good knowledge compared to other types of coding such as Python to which I have no knowledge. 

I used one of the ideas in the assessment criteria for this project which was to design a quiz game. I felt that there were plenty of features that I could implement that would demonstrate my knowledge of javascript but that would still test me. I wanted the quiz game to be challenging but fun at the same time.

### Target Audience
As the name of my project suggests, my target audience for this project is passionate or knowledgable sports fans who wanted to test their knowledge. Originally I was going to complete a general knowledge test, however I decided I wanted to have a more defined target audience which would also help me to create a more specialised design for the project rather than being generic.

### Colour Scheme and Images
With this being a sports quiz, I wanted the colour scheme to reflect this. I decided I wanted a background image for my project and decided to search for this first as this would actually help decide on the colour scheme.
![Background Image](https://github.com/Tommid93/Ultimate-Sports-Quiz/blob/main/assets/images/sport-background.jpg)
I chose the above image and felt that a suitable colour scheme for this image would be black, grey and white. These colours would allow me to add contrast to certain areas but would also be visable to those with impaired vision. I also feel that the colour scheme does suit the theme of the project.

# Features
My project consists of sections. Each one is called upon using javascript at various stages. Originally I planned on using separate web pages and using links, however I felt that this was a better way to demonstrate my javascript knowledge and enhancing the users experience.

## Start Screen
On opening the web-page, the user will be greated with the start page. This will consist of the quiz title in the header, a brief introduction to the quiz and then a start button where the user can initiate the quiz. It will also show the users highest score on previous attempts of the quiz that is saved using local storage.
![Start Screen]()

## Quiz Rules
When the user presses the start quiz button, they will be greeted with some basic rules of the quiz. THe user will then have 2 buttons to either exit the quiz or to begin it.
![Quiz Rules]()

## Quiz Page
Upon selecting the start quiz button, the user will be directed to the actual quiz page and the quiz will begin immediately. The user will be given the question and then faced with 4 possible answers. They will only be able to select one answer and once they have selected, they cannot choose another answer.
![Quiz Page]()
## Quiz Page Features
There are several features to the quiz page that utilises javascript

### Timer
Firstly is the timer. As soon as the quiz starts, the user will have 10 seconds to answer each question. If the user does not answer in the time frame, the quiz will disable all answers and show the user the correct answer. It will also mark it in their score as an incorrect answer.
### Option buttons
The user will have 4 options to choose from. Using javascript, the option will appear green if they have selected the correct answer. If they have selected the incorrect answer it will show as read, however it will also load the correct answer in green to show the user the correct answer. Once the user has selected an option it will disable all answers meaning they will not be able to select another one.
### Question Counter
At the bottom left hand corner, there is a question counter. This will tell the user which question of thr 15 they are currently answering
### Next Button
Once the user has selected an answer or the timer runs out, a next question button will appear allowing them to click onto the next question. I decided to make this invisible until the question had been answered. This prevented the user from accidently skipping through questions as there is no ability to return.

## Results Page
The fourth and final section of this project is the results page. Once the user has completed the final question, the quiz will automatically tally up the correct answers and display the results to the user. The user will then be able to click the exit button where they can return to the main page and start the quiz again if they wish.
![Results Page]()

# Testing and Approach to Testing
When I first began the project, the original approach I was going to take was to complete the basic layout and styling of all the elements and then to write the javascript. However I felt that this made the page messy and more complex to work out as there were elements all over the place. Therefore I decided to change my approach. I knew I had 4 sections so I wrote out the basic html code and styled one section at a time and wrote the javascript along with it. To me this meant that I could break the project down into 4 tasks and could test each task before moving onto the next one. 

I tested all elements before moving onto the next section and all the features that I set out for work in the way they were supposed to. 

## Bugs
I came across a few bugs during the process that I had to find a solution for. I will firstly point out that I began my project on codeanywhere. However due to the technical issues I was switched over to Gitpod.

The first 2 bugs I came across were relatively easy fixes and came when I was trying to make the answers show up as green for correct or red for incorrect. THe bug was essentially that when I clicked the answer, nothing was happening. When I used a console log, I determined there were 2 errors. One was that the code couldn't use set.Attribute and the other wouldn't allow a .Add function. One of these issues was actually caused by a variable not being defined and the other was a minor type whereby I had try to add something onto a classlist by failed to use a capital L. Both of these issues were easy fixes once looked at the console logs.

Another bug I had in the early stages was that in order to hide elements until called on I was using the opacity styling and changing it to 0. However when I was doing this and trying to click buttons, I noticed that they were not working. This was due to the rules and code overlapping causing them to fail. I sought advice from tutors on this one who advised to not use opacity but to actually change the display to none. This fixed the issues immediately.

During the entire project I did have several minor bugs that occurred that were all of the same nature. These were essentially typo's or that when using variables later in code, they did not match the way they were oriignally defined causing the console to say variable not defined. All of these issues were fairly easy to fix as they were simply typos.

## Responsiveness
I have designed my quiz to work on mobile devices and desktops and the design is responsive to fit both of these.
 ![Responsiveness]()

# Validation Testing
HTML - I put my HTML through the W3C Validator and came up with no errors. There were a few minor suggestions, however these did not impact the site at all.

CSS - I put the CSS through the Jigsaw validator and came up with no errors

JScript - I put the javascript through the JShint validator and found no errors - the following metrics were returned:

There are 12 functions in this file.
Function with the largest signature take 1 arguments, while the median is 0.
Largest function has 14 statements in it, while the median is 5.5.
The most complex function has a cyclomatic complexity value of 5 while the median is 1.

# Deployment
Here are the steps I used to deploy my project:
1. Go ro settings section in the repository
2. Click on pages under the code and automation tab
3. Ensure source is set to deploy from branch
4. Set Branch to Main/ Root and click Saves
5. Pages began to build and deployment visible

Please see the deployment live link - https://tommid93.github.io/Ultimate-Sports-Quiz/

# Credit
## COntent
The background image for my project came rom Shutterstock. Please see the link below
https://www.shutterstock.com/image-photo/sport-background-close-urban-runners-legs-392510389

## Code
I mentioned in my introduction that as I had been learning javascript I was able to write most of the code with trial and error from what I knew. However one area I became stuck on was the following code:
time --;
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "0"; 

This is basically the code that stops the timer of the quiz when it gets to 0. Whilst I understood the timer I struggled to make it stop. I made some google searches and received help from the following website
https://code.mu/en/javascript/book/prime/timers/timer-stopping/
This immediately helped me to understand what do and I was able to adapt the code to fit what I wanted to do.

# Other
The final point that I wanted to bring up was my improvement to the commits to github. During my first project these were not good at the beginning. However I felt that for this project they were much improved and I committed regularly. I have also taken feedback on board from my mentor to ensure that the commits are written in the present tense and not past which I will fully implement for my next project.
