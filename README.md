# SparkHacks 2026 - Lost Solitary

## How to run the server
```
cd ./client
npm i
```

```
npm run dev
```

## To enable audio

```
Go to site setting by browser on local

Change audio site setting to allowed

```

> Server is available on http://localhost:5173









# Inspiration
We were inspired by psychological narrative and visual novel–style games where player choices shape the story. Instead of focusing on action or puzzles, we designed the prison itself as the mystery where the player wakes up with no memory of their crime while everyone else seems to know who they are. This allowed us to explore themes of identity, memory, and guilt, while blending a 3D environment with 2D dialogue scenes to make interactions feel more personal and immersive.
What it does

# What it does
The game is a choice-based interactive narrative set inside a mysterious prison. The player explores the environment, speaks with inmates and guards, and makes decisions through dialogue that shape how the story unfolds. Each interaction reveals pieces of the player’s forgotten past, and the choices they make influence relationships, events, and ultimately the ending they receive. By combining 3D exploration with 2D dialogue scenes, the game creates an immersive experience where the player uncovers the truth about their identity while trying to escape.

# How we built it
We built this project using React to structure and template the overall user interface, CSS for color and animation for the UI and ThreeJS for the 3D scenes, models and backgrounds of the gameplay. React and CSS were also combined to implement the 2D user interface elements layered on top of the 3D environment, such as the dialogue text area and story progression components.


# Challenges we ran into
When we began this project, we had to face the struggle of relearning some components in CSS and HTML for front end development of this project. Another challenge we have come across while developing this project is creating a choice based decision making system that the user can interact with, we have decided to use json in the goal of giving the user more freedom in their decision making process for each character. We also had to manage communication between React’s UI components and the ThreeJS scene so that player movement, interactions, and dialogue progression stayed synchronized. 


# Accomplishments that we're proud of
One of our proudest achievements is mixing 2d and 3d for some elements of this project. We overlayed a 2d TextBox without a game engine that displays the choices as well as the current speaker to the player to see on their UI. 
We also built a flexible JSON-driven dialogue system that allows branching decisions and multiple narrative paths. This makes it easy to expand the story while keeping the gameplay simple and accessible.Finally, we’re proud that we created a complete narrative experience not just a technical demo. Players can reach different endings depending on how they interpret the world and the people around them, turning the game into a psychological journey rather than a simple escape scenario.

# What we learned
We learned how to use models to make a more immersive experience for users. We also learned how to use Twine to prebuild and model our code and story for the user. Learned how to parameterize sources useStates and more on react. In addition, learning how to mix 2D and 3D visual displays and writing deep in depth story and settings.

# What's next for our project
Finish implementing the story into the game. We worked hard to build a narrative for the user and if given enough time later in the future, have this game prepared and ready for the player to go through. Another implementation we wish to meet later on for the story is for the models to display an avatar wireframe in which we can control the models for the users display instead of staying in their default pose. We also want to give more additional visuals such as sound effects and interactions for the users to have besides just chat control.
