import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './core/player'

export default configureStore({
  reducer: {
    player: playerReducer,
    // game: gameReducer,
    // board: boardReducer
  }
})
