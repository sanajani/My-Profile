import { configureStore } from '@reduxjs/toolkit'

import activeReducer from '../features/active_or_not/activeSlicer'

export const store = configureStore({
    reducer:{
        active:activeReducer
    }
})