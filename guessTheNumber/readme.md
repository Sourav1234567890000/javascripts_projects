Think of it like a **security checkpoint** 🚦
```
User clicks submit
       ↓
Is input invalid?  → YES → stop ✋
       ↓ NO
Is game over?      → YES → stop ✋
       ↓ NO
Check the guess    → correct? → stop ✋
       ↓ NO
Keep playing...



<!-- code structure -->
Global Variables & Constants
        ↓
controller()        → handles all event listeners
        ↓
validateFields()    → validates input
        ↓
gameOver()          → checks if game is over
        ↓
checkGuess()        → processes the guess
        ↓
giveHint()          → gives hot/cold hints
        ↓
guessListUpdate()   → updates guess list UI
        ↓
playAgain()         → resets the game
        ↓
controller()        → initializes everything