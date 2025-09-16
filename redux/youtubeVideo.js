function setYoutubeTitle(title) {
  return {
    type: "YOUTUBE_TITLE",
    payload: title,
  };
}

function viewCount() {
  return {
    type: "VIEW_COUNT",
  };
}

function upvoteYoutube() {
  return {
    type: "YOUTUBE_VOTE",
  };
}

function downvoteYoutube() {
  return {
    type: "YOUTUBE_DOWN",
  };
}

const initialState = {
  title: "",
  viewCount: 0,
  votes: {
    up: 0,
    down: 0,
  },
};

function youtubeVideoReducer(youtubeVideo = initialState, action) {
  switch (action.type) {
    case "YOUTUBE_TITLE":
      return {
        ...youtubeVideo,
        title: action.payload,
      };
    case "VIEW_COUNT":
      return {
        ...youtubeVideo,
        viewCount: youtubeVideo.viewCount + 1,
      };
    case "YOUTUBE_VOTE":
      return {
        ...youtubeVideo,
        votes: {
          ...youtubeVideo.votes,
          up: youtubeVideo.votes.up + 1,
        },
      };
    case "YOUTUBE_DOWN":
      return {
        ...youtubeVideo,
        votes: {
          ...youtubeVideo.votes,
          down: youtubeVideo.votes.down + 1,
        },
      };
    default:
      return youtubeVideo;
  }
}
