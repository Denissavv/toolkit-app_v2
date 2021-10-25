import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../models/iUser";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlise";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {



//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     }
//     catch (e) {
//         console.log(e)
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {

        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data
        }

        catch (e) {
            return thunkAPI.rejectWithValue(e)
        }


    }
)