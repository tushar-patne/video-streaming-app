const YOUTUBE_API_KEY = "AIzaSyAP-LaEtIpMYQ_ONxkMbnB_VzHh_wTLTj0";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&regionCode=IN&maxResults=50&chart=mostPopular&key=" +
  YOUTUBE_API_KEY;
export const YOUTUBE_SEARCH_AUTOSUGGEST_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
// export const YOUTUBE_SEARCH_AUTOSUGGEST_API = "https://proxy.cors.sh/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_AUTOSUGGEST_API_2 =
  "https://suggestqueries-clients6.youtube.com/complete/search?client=youtube-reduced&hl=en&gs_ri=youtube-reduced&ds=yt&cp=3&gs_id=100&q=";
// export const YOUTUBE_SEARCH_AUTOSUGGEST_API_2 = "https://proxy.cors.sh/https://suggestqueries-clients6.youtube.com/complete/search?client=youtube-reduced&hl=en&gs_ri=youtube-reduced&ds=yt&cp=3&gs_id=100&q=";

export const LIVE_CHAT_MSG_LENGTH = 100;
