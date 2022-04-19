import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';




export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    sendMessageisOpen : false
  },
  
  reducers: {
    opensendMessage: (state) => {
      
      state.sendMessageisOpen = true
    },
    closesendMessage: (state) => {
      state.sendMessageisOpen = false
    },
    
  },
  
});

export const { opensendMessage,closesendMessage} =mailSlice.actions;


export const selectsendMessageisOpen = (state) => state.mail.sendMessageisOpen;


export default mailSlice.reducer;
