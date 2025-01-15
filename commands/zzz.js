const {
  king
} = require("../france/king");
const yts = require("yt-search");
king({
  'nomCom': "play",
  'categorie': "Search",
  'reaction': '💿'
}, async (_0x331cb3, _0x5ed62b, _0x29cdd3) => {
  const {
    ms: _0x289345,
    repondre: _0x19cdef,
    arg: _0x225777
  } = _0x29cdd3;
  if (!_0x225777[0]) {
    _0x19cdef("Please insert a song name.");
    return;
  }
  try {
    let _0x427bd8 = _0x225777.join(" ");
    let _0x314dd5 = [];
    const _0x51b8e0 = await yts(_0x427bd8);
    _0x314dd5 = _0x51b8e0.videos;
    if (_0x314dd5 && _0x314dd5.length > 0) {
      const _0x48db1a = _0x314dd5[0].url;
      const _0x336852 = await fetch("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp3?url=" + encodeURIComponent(_0x48db1a) + "&apikey=" + "giftedtechk");
      const _0x7c7652 = await _0x336852.json();
      if (_0x7c7652.status === 200 && _0x7c7652.success) {
        const _0x181eae = _0x7c7652.result.download_url;
        const _0x2a6b56 = {
          'image': {
            'url': _0x314dd5[0].thumbnail
          },
          'caption': "*FLASH-MD SONG PLAYER*\n\n╭───────────────◆\n│⿻ *Title:* " + _0x7c7652.result.title + "\n│⿻ *Quality:* " + _0x7c7652.result.type + "\n│⿻ *Duration:* " + _0x314dd5[0].timestamp + "\n│⿻ *Viewers:* " + _0x314dd5[0].views + "\n│⿻ *Uploaded:* " + _0x314dd5[0].ago + "\n│⿻ *Artist:* " + _0x314dd5[0].author.name + "\n╰────────────────◆\n⦿ *Direct YtLink:* " + _0x48db1a + "\n\n╭────────────────◆\n│ *_Powered by ©France King._*\n╰─────────────────◆"
        };
        await _0x5ed62b.sendMessage(_0x331cb3, _0x2a6b56, {
          'quoted': _0x289345
        });
        await _0x5ed62b.sendMessage(_0x331cb3, {
          'audio': {
            'url': _0x181eae
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x289345
        });
        _0x19cdef("Download Success...");
      } else {
        _0x19cdef("Failed to download audio. Please try again later.");
      }
    } else {
      _0x19cdef("No audio found.");
    }
  } catch (_0x2d1cdc) {
    console.error("Error from API:", _0x2d1cdc);
    _0x19cdef("An error occurred while searching or downloading the audio.");
  }
});
king({
  'nomCom': "song",
  'categorie': "Search",
  'reaction': '💿'
}, async (_0x230f93, _0x194dfe, _0x220b24) => {
  const {
    ms: _0x33d811,
    repondre: _0x5ed249,
    arg: _0x19155c
  } = _0x220b24;
  if (!_0x19155c[0]) {
    _0x5ed249("Please insert a song name.");
    return;
  }
  try {
    let _0x2cc67e = _0x19155c.join(" ");
    let _0x25c73a = [];
    const _0x389cf0 = await yts(_0x2cc67e);
    _0x25c73a = _0x389cf0.videos;
    if (_0x25c73a && _0x25c73a.length > 0) {
      const _0x273c8f = _0x25c73a[0].url;
      const _0x33a1c5 = await fetch("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp3?url=" + encodeURIComponent(_0x273c8f) + "&apikey=" + "giftedtechk");
      const _0x2f9118 = await _0x33a1c5.json();
      if (_0x2f9118.status === 200 && _0x2f9118.success) {
        const _0x1714c1 = _0x2f9118.result.download_url;
        const _0xe02f75 = {
          'image': {
            'url': _0x25c73a[0].thumbnail
          },
          'caption': "*FLASH-MD SONG PLAYER*\n\n╭───────────────◆\n│⿻ *Title:* " + _0x2f9118.result.title + "\n│⿻ *Quality:* " + _0x2f9118.result.type + "\n│⿻ *Duration:* " + _0x25c73a[0].timestamp + "\n│⿻ *Viewers:* " + _0x25c73a[0].views + "\n│⿻ *Uploaded:* " + _0x25c73a[0].ago + "\n│⿻ *Artist:* " + _0x25c73a[0].author.name + "\n╰────────────────◆\n⦿ *Direct YtLink:* " + _0x273c8f + "\n\n╭────────────────◆\n│ *_Powered by ©France King._*\n╰─────────────────◆"
        };
        await _0x194dfe.sendMessage(_0x230f93, _0xe02f75, {
          'quoted': _0x33d811
        });
        await _0x194dfe.sendMessage(_0x230f93, {
          'document': {
            'url': _0x1714c1
          },
          'mimetype': "audio/mpeg"
        }, {
          'quoted': _0x33d811
        });
        _0x5ed249("Download Success...");
      } else {
        _0x5ed249("Failed to download audio. Please try again later.");
      }
    } else {
      _0x5ed249("No audio found.");
    }
  } catch (_0x5119e8) {
    console.error("Error from API:", _0x5119e8);
    _0x5ed249("An error occurred while searching or downloading the audio.");
  }
});
king({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0x417693, _0x38ae7a, _0x524708) => {
  const {
    ms: _0x3ab854,
    repondre: _0x5e07ab,
    arg: _0xfed1ce
  } = _0x524708;
  if (!_0xfed1ce[0]) {
    _0x5e07ab("Please insert a song/video name.");
    return;
  }
  try {
    let _0x1bc316 = _0xfed1ce.join(" ");
    let _0x1aaaa0 = [];
    const _0x52a0a5 = await yts(_0x1bc316);
    _0x1aaaa0 = _0x52a0a5.videos;
    if (_0x1aaaa0 && _0x1aaaa0.length > 0) {
      const _0x40e0d7 = _0x1aaaa0[0].url;
      const _0x1bb1dd = await fetch("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp4?url=" + encodeURIComponent(_0x40e0d7) + "&apikey=" + "giftedtechk");
      const _0x8d13d2 = await _0x1bb1dd.json();
      if (_0x8d13d2.status === 200 && _0x8d13d2.success) {
        const _0x38a284 = _0x8d13d2.result.download_url;
        const _0x4bf970 = {
          'image': {
            'url': _0x1aaaa0[0].thumbnail
          },
          'caption': "B.M.B VIDEO PLAYER\n\n©Ibrahim Adams"    };
        await _0x38ae7a.sendMessage(_0x417693, _0x4bf970, {
          'quoted': _0x3ab854
        });
        await _0x38ae7a.sendMessage(_0x417693, {
          'video': {
            'url': _0x38a284
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x3ab854
        });
        _0x5e07ab("*VIDEO INFO*\n\n╭───────────────◆\n│⿻ *Title:* " + _0x8d13d2.result.title + "\n│⿻ *Quality:* " + _0x8d13d2.result.type + "\n│⿻ *Duration:* " + _0x1aaaa0[0].timestamp + "\n│⿻ *Viewers:* " + _0x1aaaa0[0].views + "\n│⿻ *Uploaded:* " + _0x1aaaa0[0].ago + "\n│⿻ *Artist:* " + _0x1aaaa0[0].author.name + "\n╰────────────────◆\n⦿ *Direct YtLink:* " + _0x40e0d7 + "\n\n╭────────────────◆\n│ *_Powered by ©France King._*\n╰─────────────────◆");
  
                  
      } else {
        _0x5e07ab("Failed to download the video. Please try again later.");
      }
    } else {
      _0x5e07ab("No videos found.");
    }
  } catch (_0x2a9235) {
    console.error("Error from API:", _0x2a9235);
    _0x5e07ab("An error occurred while searching or downloading the video.");
  }
});
