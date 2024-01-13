import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'

const rootPersistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel1,
  whitelist: ['global'],
}

const rootReducer = combineReducers({})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const persistedReducer = persistReducer(rootPersistConfig, rootReducer as any)

export const store = configureStore({
  reducer: (state, action) => {
    if (action.type === 'app/clear') state = {}
    return persistedReducer(state, action)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
