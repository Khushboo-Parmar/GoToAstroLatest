import { createSlice } from "@reduxjs/toolkit";

const userdata = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        adduser(state,action){
            return [action.payload];
        },
        async remove(){
            await AsyncStorage.removeItem('persist:root');
           return [];
        }
    }
})

export const {adduser,remove} = userdata.actions;
export default userdata.reducer;