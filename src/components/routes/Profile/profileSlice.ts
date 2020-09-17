import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ProfileState {
  isExpDetailsOpen: boolean
  user: Record<string, any> | null
  experiences: {
    fetching: boolean
    fetched: boolean
    fetchError: null | Error
    fetchTimedOut: boolean
    items: Record<string, any>[]
  }
}

export const initialState: ProfileState = {
  isExpDetailsOpen: false,
  user: null,
  experiences: {
    fetching: false,
    fetched: false,
    fetchError: null,
    fetchTimedOut: false,
    items: [],
  },
}

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    // ACTIONS MODIFIYING REDUX STATE
    closeExperienceDetails(state) {
      state.isExpDetailsOpen = false
    },
    openExperienceDetails(state) {
      state.isExpDetailsOpen = true
    },
    fetchingExperiences(state) {
      state.experiences.fetching = true
      state.experiences.fetched = false
      state.experiences.fetchError = null
      state.experiences.fetchTimedOut = false
    },
    fetchedExperiences(state) {
      state.experiences.fetching = false
      state.experiences.fetched = true
    },
    fetchExperiencesFailed(state, { payload }: PayloadAction<Error>) {
      state.experiences.fetching = false
      state.experiences.fetchError = payload
    },
    fetchExperiencesTimedOut(state) {
      state.experiences.fetching = false
      state.experiences.fetchTimedOut = true
    },
  },
})

export const {
  closeExperienceDetails,
  openExperienceDetails,
  fetchingExperiences,
  fetchedExperiences,
  fetchExperiencesFailed,
  fetchExperiencesTimedOut,
} = profileSlice.actions

export default profileSlice.reducer
