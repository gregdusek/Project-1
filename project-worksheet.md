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
|Day 1| Project Description | COMPLETE
|Day 1| Wireframes / Priority Matrix / Timeline | COMPLETE
|Day 2| Core Application Structure (HTML, CSS, etc.) | COMPLETE
|Day 3| Core Application Structure (HTML, CSS, etc.) | COMPLETE
|Day 4| MVP & Bug Fixes | COMPLETE
|Day 5| Final Touches | COMPLETE
|Day 6| Present | Incomplete


## Project Description

Hopper Fly fishing is a two player fishing game where the goal is to catch fish. Each player gets three total casts to catch fish. 
The game ends when both players have cast three times each. The player with the greater total weight of fish wins the game.

- Start button allows the game to start
- Rules button explains the rules & game controls
- Tie Fly button ties a fly
- Cast button casts the fly (each player has 3 total casts)
- Reel-In button reels in the line

BRAINSTORMING FISHING GAME: ( 2 players).
-Winning conditions: Player with the largest fish after 3 casts wins.
- Use a modal containing 2 buttons [Start Game][Instructions].
- Use carousel to pick fishing location.
- Rod/reel parameters (cast distance, line tension) - array?
- Fish parameters (type, size, stamina -> higher stamina is more difficult to reel in) - array

GAME ACTIONS & ACTION BUTTONS: (use click event listeners)
- Tie Fly
(BASIC)
	- Ties random fly from array of flys (dry fly, wet fly, hopper)
		-Modal states the fly that was tied.

- Cast Fly (random cast distance between 2 numbers)
(BASIC)
	- If no fly is tied, Modal states you can't fish with air, you need a fly.
	- Modal states fly landed on the water, waiting for fish
	(EXTENDED)
		- Random chance for a fish to strike when the fly lands on the water & you have to reel in.
		

- Reel In
(BASIC)
	-Button decrements from cast distance so it has to be pressed multiple times to reel in fish.
	- Action takes into account the fish stamina/line strength to potentially have your fishing line break
	(EXTENDED)
		- Use 2 reel in buttons (slow/fast)
			- slow reel-in takes decrements shorter distance with less chance of line breaking
			- fast reel-in decrements greater distance with greater chance of line breaking
			- random chance for a fish to strike when reeling in without a fish on the line

MORE ACTIONS
(EXTENDED)
	- Fish "fights back" by swimming away, incrementing the the reel in distance.
	- Fish strike action triggers a need to set the hook
		- starts a random invisible countdown for setting the hook
			- if hook isn't set, fish gets away
				- hook is set, you can real in
					- set hook button is used



## Wireframes
Wireframe of Hopper Fly Fishing

<a href="https://wireframepro.mockflow.com/view/Mfd188db4b5e7693fe34acb20a0bbafd31605487135938#/page/27bf803c53ad48ab8d69c976acae1fcc" rel="nofollow">Mockflow</a>

I used Mockflow to build my wireframe for Hopper Fly Fishing. Starting at the top left, the inital game is laid out in the browser.
The larger browser at the bottom shows a more detailed example of how the game should look upon completion.

## Time/Priority Matrix 

High Priority
- Build modal & carousel
	- Modal for rules
	- Carousel for background selection
- Player turn
	- Denotes who's fishing
- Game logic
	- Start game
		- button progresses game
	- Tie Fly
		- invokes fly array
		- button progresses game
	- Cast 
		- button progresses game
	- Reel in
		- Calculations for line tension vs fish stamina
		- button progresses game
	- Win/Lose logic
		- Built on player with higher total weight of fish
	- Build game screen
		- Modal with info
		- Carousel for background selection
		- HTML & Javascript
	- Reset game
		- Button resets game

Medium Priority
- CSS
	- Making the game more visually appealing
	- Icons for fish, reel, cast

Low Priority 
- Add in additional actions
	- Change from 3 casts per player to decrementing time limit (2 minutes?)
	- Add random chance of fish striking at fly landing on water initially
	- Add reel in slow/fast functionality
		- Fast decrements reel in length faster, higher chance of snapping line
		- Slow decrements slower, lower chance of snapping line, higher chance of fish swimming off
	- Add in set hook button
		- set hook triggers invisible decrementing timer
		- hook not set fast enough, fish jumps off and swims away
		- hook set in time, reel in
		
#### MVP 
- Build HTML/CSS using wireframe
	- Modal
	- Carousel
- Build game logic using JS
	- Start game
	- Tie Fly
	- Cast
	- Reel In
	- Reset Game
- Calculate number of fish caught
- Calculate sum weight of fish caught
- Add basic styling using css
- Build Win logic & add to DOM
- Add players to DOM

#### PostMVP 
- Refactor any JS or CSS.
	- Add in images
- Add in Additional Actions
	- Add in additional actions
	- Change from 3 casts per player to decrementing time limit (2 minutes?)
	- Add random chance of fish striking at fly landing on water initially
	- Add reel in slow/fast functionality
		- Fast decrements reel in length faster, higher chance of snapping line
		- Slow decrements slower, lower chance of snapping line, higher chance of fish swimming off
	- Add in set hook button
		- set hook triggers invisible decrementing timer
		- hook not set fast enough, fish jumps off and swims away
		- hook set in time, reel in

## Functional Components

Game Functions
- Rules - displays rules and controls
- Start Game - starts the game
- Reset Game - resets the game
- Tie fly - ties fly from fly array
- Cast - casts fly a random distance between 2 numbers
- Reel-In - reels in fly

Game States
- Begin game function
- Game - while playing
- Reset game function

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Modal | H | 4hr | hr | -hr|
| Carousel | H | 4hr | -hr | -hr|
| Build game logic | H | 16hr| -hr | -hr |
| Basic styling | H | 6hr | 2hr | -hr|
| Game Player HTML & CSS | H | 8hrs| 2hr | -hr |
| Add players to DOM | H | 2hr | -hr | -hr|
| Total | H | 40hrs| -hrs | -hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Fancy graphics/pics| L | 8hr | -hr | -hr|
| Refactor JS & CSS | M | 8hr | -hr | -hr|
| Additional functions| L | 24hr | -hr | -hr|
| Total | H | 40hrs| -hrs | -hrs |

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