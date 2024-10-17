*Updated 10/16/2024*
# About
This project aims to teach students of varying ages about the basics of computers and Artificial intelligence.

## Structure
There are 2 separate websites as part of this project. `demo.html` is the website that is part of the installations in Offerdahl West and the Quentin Burdick Building. `demo-elementary.html` has the same content as `demo.html`, but is geared towards a younger audience, namely, elementary and middle school students, whereas `demo.html` is for prospective and current students.

## Content
Both websites are built on HTML5 and Bootstrap 5.3. The general layout includes pre-expanded accordion items to separate content with a sleep screen that activates on page load and after a 3 minute inactivity timeout.
### `demo.html`
This demo also includes two interactive demos to demonstrate various gates and an SR-Latch. These are iframe components imported from [CircuitVerse](https://www.circuitverse.org), where I designed the interactive logic gates.

### Morse Code Demo
The Morse code demo is also an iframe of [RxMorse](https://github.com/moutend/RxMorse), a GitHub project.

### Sleep Screen
The sleep screen is an animated div that lives at the top of the body.

![image](https://github.com/user-attachments/assets/d5a30dac-a7d9-4690-89b4-236d4b0afeb2)
 

The animation looks like this, and will repeat every minute the screen isn't touched or clicked:

https://github.com/user-attachments/assets/8e9c0cc5-4b55-461b-8ade-b7080723f2b6


The animation portion lives in `sleep-screen.js`. The eventListeners for "click" and "touchstart" ensure the screen goes away once touched or clicked. This starts the timeout function, where it will wait for 3 minutes of inactivity before re-appearing.


