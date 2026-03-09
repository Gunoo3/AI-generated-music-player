A desktop overlay music player with a collapsible music list. The user can add their own music to the list by dragging and dropping their music file into the program. The user can also delete any music from the list. It can pause and continue the music, and skip forward/backward through the music list using the buttons on the player. It can display the title of the playing music.

### Experience Description

The audience should feel nostalgic when looking at the program. They should relate and reference the look of the program to the early evolution of technology in the 2000s. 

### Who Is It For?

Casual user who enjoys listening to music in the background. Or an early playful technology enthusiast. 

## 2. Interaction Model

### How Does It Work?

The users can play the music of their choice by dragging and dropping their downloaded music files into the program. The music will then be added to the music list. They can delete music from the list by using the button on the right of every music title on the list. They can pause, continue, and skip the music by using the buttons on the left side of the main title display. The music list can be collapsed using the long button tab on the underside of the main display.

### Key States

| State | What Happens | Transitions To |
|-------|-------------|----------------|
| play | Display the current music title, play the current music | --------|
| pause | Display the current music title, pause the current music | --------|
| skip forward | Display the next music title, play the next music on the music list | play |
| skip back | Display the previous music title, play the previous music on the music list | play |
| delete | delete selected music from the list |-------|

## 3. Features and Requirements

### Core Features (Must Have)

| Feature | Description | Priority |
|---------|-------------|----------|
| Drag & drop | Able to drag Mp3, Wav files and drop into the program, display the added music to the list | High |
| delete | Able to delete any music from the list | high |
| buttons | The displayed functional play/pause, skip forward, and skip back buttons | high |
| collapsible music list | The button tab that will display the music list downward in full when pressed | medium |
| draggable | The entire program can be dragged around the screen when grabbed | medium |

### Nice-to-Have Features

| Feature | Description | Priority |
|---------|-------------|----------|
| Animation | Short buttons animation when pressed | medium |
| moving title | The current music title alphabet disappears to the left side of the display and reappears on the right side | low |

### Out of Scope

video player
image display
flexible size
customizable colours.

## 4. Visual and Audio Requirements

### Visual Style

Describe the look: The program has a horizontal pill shape. The colour will be a gradient silver with highlighted shadows. It will have a metallic look. The buttons will be on the right side in the shape of a circle within a circle, cut in half by a vertical line. The inner circle contains the play and pause icons right next to each other, but separated by a line. The skip forward and skip back buttons will be on the outer circle, also separated by a line. The music title will be displayed in a black bar on the topside of the program. The playlist button tab will be displayed at the bottom of the program. Both the current music title and playlist button will take up the rest of the space of the program on the left side of the music control buttons. When pressed on the music list tab, the music list will expand down and list every music in the order of upload. Each list will contain the music title on the left and a delete button on the right.

### Audio

Depending on the current music playing

### Performance Targets

- support Mp3, Wav files
- support up to 3Gb file size upload
- Same music and file quality after upload


## 5. Technical Approach

### Technology Stack

- **Platform:** pc
- **Languages:** javascript, C#, Python
- **Key Libraries:** p5.js, Three.js

### Technical Constraints

- must be able to run offline
- must be able to save the playlist when the program is closed

## 6. Success Criteria

- The user can drag and drop music into the program successfully
- The program automatically plays the next music and changes the title to the next music after the current one ends
- The music list increases and decreases in size depending on the amount of music on the list
- The play/pause, skip forward, and skipback buttons work as intended
