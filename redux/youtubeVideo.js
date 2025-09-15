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

function youtubeVideoReducer(youtubeVideo = {}, action) {
  switch (action.type) {
    case "YOUTUBE_TITLE":
      return {
        ...state,
        youtubeVideo: {
          ...state.youtubeVideo,
          title: action.payload,
        },
      };
    case "VIEW_COUNT":
      return {
        ...state,
        youtubeVideo: {
          ...state.youtubeVideo,
          viewCount: state.youtubeVideo.viewCount + 1,
        },
      };
    case "YOUTUBE_VOTE":
      return {
        ...state,
        youtubeVideo: {
          ...state.youtubeVideo,
          votes: {
            ...state.youtubeVideo.votes,
            up: state.youtubeVideo.votes.up + 1,
          },
        },
      };
    case "YOUTUBE_DOWN":
      return {
        ...state,
        youtubeVideo: {
          ...state.youtubeVideo,
          votes: {
            ...state.youtubeVideo.votes,
            down: state.youtubeVideo.votes.down + 1,
          },
        },
      };
    default:
      return youtubeVideo;
  }
}
