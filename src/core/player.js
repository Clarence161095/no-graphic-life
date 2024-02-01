import { createSlice } from '@reduxjs/toolkit';

const startPlayer = {
  name: '',
  hp: 100,
  level: 1,
  exp: 0,
  stats: {
    strength: 5,
    dexterity: 5,
    stamina: 5,
    intelligence: 5,
  },
  position: {
    map: 'start',
    place: 'mom_house',
  },
  status: [],
  inventory: [],
  equipment: {
    head: null,
    body: null,
    legs: null,
    feet: null,
    leftHand: null,
    rightHand: null,
    ring: null,
    necklace: null,
  },
  skills: [],
  quests: [],
  history: [],
};

const initPlayer = localStorage.getItem('player')
  ? JSON.parse(localStorage.getItem('player'))
  : startPlayer;

export const playerSlice = createSlice({
  name: 'player',
  initialState: initPlayer,
  reducers: {
    setPlayer: (state, action) => {
      return action.payload;
    },
    resetPlayer: () => {
      return startPlayer;
    },
    updatePlayer: (state, action) => {
      return { ...state, ...action.payload };
    },
    updatePlayerStats: (state, action) => {
      return { ...state, stats: { ...state.stats, ...action.payload } };
    },
    updatePlayerPosition: (state, action) => {
      return { ...state, position: { ...state.position, ...action.payload } };
    },
    updatePlayerStatus: (state, action) => {
      return { ...state, status: [...state.status, action.payload] };
    },
    updatePlayerInventory: (state, action) => {
      return { ...state, inventory: [...state.inventory, action.payload] };
    },
    updatePlayerEquipment: (state, action) => {
      return { ...state, equipment: { ...state.equipment, ...action.payload } };
    },
    updatePlayerSkills: (state, action) => {
      return { ...state, skills: [...state.skills, action.payload] };
    },
    updatePlayerQuests: (state, action) => {
      return { ...state, quests: [...state.quests, action.payload] };
    },
    updatePlayerHistory: (state, action) => {
      return { ...state, history: [...state.history, action.payload] };
    },
  },
});

export const {
  setPlayer,
  resetPlayer,
  updatePlayer,
  updatePlayerStats,
  updatePlayerPosition,
  updatePlayerStatus,
  updatePlayerInventory,
  updatePlayerEquipment,
  updatePlayerSkills,
  updatePlayerQuests,
  updatePlayerHistory,
} = playerSlice.actions;
export const selectPlayer = (state) => state.player;
export default playerSlice.reducer;
