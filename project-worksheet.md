# Project Overview


### Key Project 1 Dates
- Nov 16 - Project Approvals
- Nov 17 - Nov 22 - Project Week! We will not meet during normal class times. You will be meeting with your squad at the times instructed by your Squad lead.
- Nov 23 - Project Presentations

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Incomplete
|Day 1| Wireframes / Priority Matrix / Timeline | Incomplete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

GAME IDEA:
Fly fishing game ( 2 players).
Win State : Catch the bigger fish and/or most fish.
Lose State: Catch the least fish or lesser of weight.
Modal & carousel to choose fishing location
Rod/reel parameters (cast distance, line strength, luck) - array
Fish parameters (type, size, stamina -> higher stamina is more difficult to reel in) - array
Actions:
Tie your fly
Cast your fly (random cast distance between 2 numbers)
Fly lands & fish strike (random chance to have fish strike when fly lands)
Reel in (random distance between 2 numbers)
Fish strike (random chance for fish to strike)
Set hook & reel in (take into account fish stamina

Action buttons: (event listeners need for each button)
	Tie Fly: 
Array of fly’s [dry fly, wet fly, hopper] - make array
Alert box for type of fly tied stating ready to fish.

	Cast: 
Function(?) to check if fly has been tied.
If a fly is tied, you cast.
If the fly is not tied, an alert pops up advising to tie a fly.
	
	Set Hook:
		Random timer begins to run, triggered off of fish striking
		Wait too long to set the hook and fish will get away.
		Set the hook fast enough and you start to reel the fish in.
	
	Reel In:
		Reel in speed
			Slow - uses less stamina
			Fast - more stamina
				Lose too much stamina, line breaks, and fish gets away


## Wireframes

https://support.mockflow.com/article/108-how-to-share-projects-in-mockflow

## Time/Priority Matrix 

![Link](https://res.cloudinary.com/jkeohan/image/upload/a_270/v1591621734/project1_matrix_ocy5gc_h1kg0m.jpg)

Include a full list of features that have been prioritized based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  

Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MVP and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- Add game player stats to the dom
- Render html on the page
- Allow user to choose player 
- Restart the game when the user loses

You should have at least 10 items here

#### PostMVP 

- Anything else that is not MVP

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Modal | H | 1hr | 1.5hr | -hr|
| Carousel | H | 3hr | -hr | -hr|
| Adding Form | H | 1.5hr| -hr | -hr |
| Other sections and flex | M | 4hr | 2hr | -hr|
| Game Player HTML & CSS | H | 3hrs| 2hr | -hr |
| Create Classes in JS for Enemies | H | 3hr | -hr | -hr|
| Game play main function | L | 1hr | -hr | -hr|
| Total | H | 15.5hrs| -hrs | -hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Play game for 3 rounds | L | 3hr | -hr | -hr|
| Interactive Banner | M | 4hr | -hr | -hr|
| Materialize | H | 4hr | -hr | -hr|
| Bootstrap | H | 4hr | -hr | -hr|
| Make own icon | L | 4hr | -hr | -hr|
| Total | H | 20hrs| -hrs | -hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object