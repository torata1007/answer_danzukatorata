function getShowroomVideos() {
  var query = 'SHOWROOM';
  var results = [];
  var nextPageToken = '';
  
  while (results.length < 100) {
    var response = YouTube.Search.list('id,snippet', { q: query, maxResults: 50, pageToken: nextPageToken });
    if (!response.items) break;

    response.items.forEach(item => {
      if (item.id.videoId && results.length < 100) 
        results.push("https://www.youtube.com/watch?v=" + item.id.videoId);
    });

    if (!(nextPageToken = response.nextPageToken)) break;
  }

  results.forEach(url => Logger.log(url));
}
