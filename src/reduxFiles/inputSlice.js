import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    lat:null,
    lng:null
  },
  center:{ lat: 48.8584, lng: 2.2945 },
  pickUp: {
    lat:null,
    lng:null
  },
  dropUp: {
    lat:null,
    lng:null
  },
  routeState:false,
  totalDistance:null,
  totalDuration:null,
  userCount:null,
  data:null,
  loading:false,

};

const inputSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCurrentUser: (state,action) => {
      state.user = action.payload
    },
    setUserCenter: (state,action) => {
      state.center = action.payload
    },
    setPickUp: (state,action) => {
      state.pickUp = action.payload
    },
    setDropup: (state,action) => {
      state.dropUp = action.payload
    },
    setRouteState: (state,action) => {
      state.routeState = action.payload
    },
    setTotalDistance: (state,action) => {
      state.totalDistance = action.payload
    },
    setTotalDuration: (state,action) => {
      state.totalDuration = action.payload
    },
    setUserCount: (state,action) => {
      state.userCount = action.payload
    },
    setData: (state,action) => {
      state.data = action.payload
    },
    setLoading: (state,action) => {
      state.loading = action.payload
    },

  },
});

export const { setCurrentUser,setUserCenter,setPickUp,setDropup,setRouteState,setTotalDistance, setTotalDuration,setUserCount,setData,setLoading} = inputSlice.actions;
export default inputSlice.reducer;
