{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
  $('.artist').text(album.artist);
  $('#release-info').text(album.releaseInfo);
}

//  artist: 'Pablo Picasso',
  //releaseInfo: '1909 Spanish Records',
