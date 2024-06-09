import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store'

// Define a type for the slice state
export interface Blog {
  postId: string
}

// Define the initial state using that type
const initialState: Blog = {
  postId: ''
}

export const postsSlice = createSlice({
  name: 'blog',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    startEditPost(state, action: PayloadAction<string>) {
      state.postId = action.payload
    },
    cancelEditPost(state) {
      state.postId = ''
    }
  }
})

export const { startEditPost, cancelEditPost } = postsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const postIdSelector = (state: RootState) => state.posts.postId

export default postsSlice.reducer
