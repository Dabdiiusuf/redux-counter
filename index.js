const redux = require("redux");

const initialState = {
  count: 0,
  favoriteThings: [],
  youtubeVideo: {
    title: "",
    viewCount: 0,
    votes: {
      up: 0,
      down: 0,
    },
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});
