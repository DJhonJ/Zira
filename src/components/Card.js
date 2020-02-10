import React from 'react';
import { View, FlatList, Text, StyleSheet, ScrollView } from 'react-native'

import ListItem from './ListItem.js';
import Loading from './Loading.js';

const data = [
  {
   "kind": "youtube#searchResult",
   "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/jws9iHo0OcKU1H6RnX7kVUvZoPo\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "WnN3gxs9m_A"
   },
   "snippet": {
    "publishedAt": "2020-02-08T16:34:42.000Z",
    "channelId": "UC4scJCb9y8JJXQGuZNXR7Hg",
    "title": "Los LEGENDARIOS estan AQUI #36 MUNDO PIXELMON",
    "description": "Mi canal de Twitch! https://www.twitch.tv/frigoadri GRACIAS POR EL APOYO, SE AGRADECE MUCHÍSIMO! ----Sigueme en Twitter y en Instagram-----...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/WnN3gxs9m_A/default_live.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/WnN3gxs9m_A/mqdefault_live.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/WnN3gxs9m_A/hqdefault_live.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "FrigoAdri Pictures",
    "liveBroadcastContent": "live"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/8yTD86YIYXhrynfPySOjP2Rsvss\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "j17o4UkWEYI"
   },
   "snippet": {
    "publishedAt": "2018-07-09T09:26:56.000Z",
    "channelId": "UCVxKOydaf__6aYUiUkh5yqw",
    "title": "Mundo Lyrics",
    "description": "Songlyrics.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/j17o4UkWEYI/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/j17o4UkWEYI/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/j17o4UkWEYI/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "King Roman",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/Nl-K7bJvwtSTis6etDzqIGQktn4\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "xKk655CDFn8"
   },
   "snippet": {
    "publishedAt": "2018-03-04T13:00:03.000Z",
    "channelId": "UCdfq8-581QVUtVsa8ChVnDQ",
    "title": "IV of Spades perform &quot;Mundo&quot; LIVE on Wish 107.5 Bus",
    "description": "IV of Spades perform their newest song, \"Mundo\" live on the Wish 107.5 Bus! Though the Wish award-winning troupe shied away from their usual uptempo, ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/xKk655CDFn8/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/xKk655CDFn8/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/xKk655CDFn8/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "Wish 107.5",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/wFEJK4YKA18D79FVS6PSJHJ5Ztw\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "32tdR0cz_z4"
   },
   "snippet": {
    "publishedAt": "2018-04-06T09:25:29.000Z",
    "channelId": "UCgTY1Y6HLAt2X2kbYJMQnWQ",
    "title": "IV OF SPADES - Mundo (Lyrics Video)",
    "description": "Please like, share Subscribe! Follow IV of Spades: Facebook: https://www.facebook.com/IVOfSpadesPh/ Youtube: https://www.youtube.com/channel/UCKwe.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/32tdR0cz_z4/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/32tdR0cz_z4/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/32tdR0cz_z4/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "Dave Production",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/8lDpKH-vOkpfirxBC0H9Gk3NfgI\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "j1HedNREpmY"
   },
   "snippet": {
    "publishedAt": "2020-01-10T09:59:23.000Z",
    "channelId": "UCS09CkK8fjPJ_nHD6fcGMSw",
    "title": "Mundo - Raphiel Shannon [Official Lyric Video]",
    "description": "The official lyric video of \"Mundo\" by Raphiel Shannon. Check out “Raphiel Shannon” on: Facebook: /raphielshannonn Twitter: @raphielshannonn Instagram: ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/j1HedNREpmY/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/j1HedNREpmY/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/j1HedNREpmY/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "Viva Records",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/TnAMbW5FPU_b5XkjH0M5nQ5Oovg\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "1P1cEEp2KpU"
   },
   "snippet": {
    "publishedAt": "2019-02-22T14:14:37.000Z",
    "channelId": "UCdfq8-581QVUtVsa8ChVnDQ",
    "title": "IV of Spades perform &quot;Mundo&quot; LIVE on Wish 107.5",
    "description": "Phenomenal funk rock act IV of Spades perform an emotionally-charged rendition of their hit song, \"Mundo\" live at the 4th Wish 107.5 Music Awards! The 4th ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/1P1cEEp2KpU/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/1P1cEEp2KpU/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/1P1cEEp2KpU/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "Wish 107.5",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/Z2ovVriZsKonFMWZK7LAJF0D3aE\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "8oVMiiJmyNw"
   },
   "snippet": {
    "publishedAt": "2020-01-13T17:00:08.000Z",
    "channelId": "UCLk0vqad8dXss0QGwCHTRxg",
    "title": "UNDISPUTED BEST MUNDO STRATEGY! SANGUINE MUNDO IS TRULY UNFAIR! MUNDO SEASON 10! - League of Legends",
    "description": "Sanguine Mundo Top Gameplay! League of legends Dr. Mundo Season 10 gameplay! Check my 2nd Channel SRO Highlights: https://goo.gl/yWrlUv LIKE ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/8oVMiiJmyNw/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/8oVMiiJmyNw/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/8oVMiiJmyNw/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "SoloRenektonOnly",
    "liveBroadcastContent": "none"
   }
  }
];

class Card extends React.Component {
  render() {
    const { load, data } = this.props;

    if(load){
        return(
          <Loading />
        )
    }

    return(
      <View style={ styles.container }>
          <FlatList
          style={ styles.card }
          data={data}
          renderItem={ ({item}) => <ListItem image={item.snippet.thumbnails.high.url} title={item.snippet.title}
                                             autor={item.snippet.channelTitle} /> }
          keyExtractor={item => item.id.videoId} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 7
  },
  card: {
  }
});

export default Card;
