import { Text, View, ScrollView, FlatList } from "react-native";
import SafeAreaView from "../components/SafeAreaView";
import VideoThumbanails from "../components/VideoThumbanails";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentVisibleIndex, setCurrentIndex } from "../features/visibleVideoSlice";

const data = [
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/8oMzoXvdLZXiRf3gYT2cO902QsIOxBL8yUv6yWBvWnsg80O8G9Pk-BUAhu7n1VcFS-02EBo0-w=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
        canonicalBaseUrl: "/@manlikeisaac",
        channelId: "UCj-Hs9XuzY15HE1q5R_GnJQ",
        title: "manlikeisaac",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 11,
      movingThumbnails: null,
      publishedTimeText: "3 weeks ago",
      stats: { views: 2289473 },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/xjEKbuRd-Bg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG-oAkEr2kQeymVB-fiOA7aQXlYw",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/xjEKbuRd-Bg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0ucq8k3E6YbI6h-J9In48dEHYaQ",
          width: 720,
        },
      ],
      title: "Playing Call of Duty until I get called the N-Word",
      videoId: "xjEKbuRd-Bg",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaQIY-V-JheNLs_4f5RawAGoxYr3xAcW6QqDGm689w=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
        canonicalBaseUrl: "/@StephanieSoo",
        channelId: "UCo9ZZ04kIhN_8xGxvnjaduQ",
        title: "Stephanie Soo",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 2231,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/D0aEX9pdBC0/mqdefault_6s.webp?du=3000&sqp=CI76-KYG&rs=AOn4CLAypJAI5VvXPPOF9yW0fYFHm75qBQ",
          width: 320,
        },
      ],
      publishedTimeText: "3 weeks ago",
      stats: { views: 2902144 },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/D0aEX9pdBC0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_S196VXZt8jmhoPCeAVUIMfcS1g",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/D0aEX9pdBC0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0DAr4eYxvfQLN0QvrLN4scwy2oQ",
          width: 720,
        },
      ],
      title: "We got married!",
      videoId: "D0aEX9pdBC0",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaRqKK2-fyXpcQPGt-eHEQLr1aGas5K2QDoPdJvIyg=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [],
        canonicalBaseUrl: "/@hockeypsychology",
        channelId: "UCcg171okllPcyT6Sm5iBb7A",
        title: "Hockey Psychology",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 425,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/2w04msg0Vso/mqdefault_6s.webp?du=3000&sqp=COyZ-aYG&rs=AOn4CLDLeyYQvT23cuBw0jJO7Shd1VFTSA",
          width: 320,
        },
      ],
      publishedTimeText: "3 days ago",
      stats: { views: 100852 },
      thumbnails: [
        {
          height: 270,
          url: "https://i.ytimg.com/vi/2w04msg0Vso/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNdgXErZwt0g0k3PjFJk8KIybTsw",
          width: 480,
        },
      ],
      title: "This 'Mistake' Changed NHL Hockey Forever.",
      videoId: "2w04msg0Vso",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/0q0ofFDdpcod_pvtqbVsX_tfISTvh-KlISPrMfRiMe90mTA-KQxrl4gnPOT9UVA7e3fCsoKJ9A=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [],
        canonicalBaseUrl: "/@luanamoanasignatureoceanfr8785",
        channelId: "UCHCVFZsNIjVmtN9DquslxKA",
        title: "Luana Moana Signature Oceanfront Maui",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 404,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/Bc8ijjkr6-A/mqdefault_6s.webp?du=3000&sqp=CMDg-KYG&rs=AOn4CLDEzF0O1bvgM0j7d7j7nEGegvJVOQ",
          width: 320,
        },
      ],
      publishedTimeText: "1 day ago",
      stats: { views: 258 },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/Bc8ijjkr6-A/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBwAmAAtAFigIMCAAQARhZIGUoQjAP&rs=AOn4CLCWqKzblby-WdVQchLQm0qlDspFSA",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/Bc8ijjkr6-A/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBwAmAAtAFigIMCAAQARhZIGUoQjAP&rs=AOn4CLAAWteibVR8DE0B8Ng_UpsP0uHxjw",
          width: 720,
        },
      ],
      title:
        "MAUI IS OPEN! MAUI IS OPEN TODAY! Aloha Come & Visit Us!  LUANA MOANA SIGNATURE OCEANFRONT MAUI",
      videoId: "Bc8ijjkr6-A",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaT0yv-MHwodoM8RYVI7Opi6sR54tAYwQ7LdnE8m1Xk=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
        canonicalBaseUrl: "/@MarkWiens",
        channelId: "UCyEd6QBSgat5kkC6svyjudA",
        title: "Mark Wiens",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 2140,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/LxjaWhvkgKU/mqdefault_6s.webp?du=3000&sqp=COPb-KYG&rs=AOn4CLAhgdmyn3DcRUm0281beDEkZ4yDXQ",
          width: 320,
        },
      ],
      publishedTimeText: "8 days ago",
      stats: { views: 1391554 },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/LxjaWhvkgKU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3ZRMVmQRLTEpuKqrYItTkyJUOGg",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/LxjaWhvkgKU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7JUBlk9BH6JiVrkJg8jQWL3AiZA",
          width: 720,
        },
      ],
      title:
        "Spiciest Food in Africa!! \ud83c\udf36 PALM NUT SOUP in a Village in Ivory Coast!!",
      videoId: "LxjaWhvkgKU",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/shu53Oh40-l2aQwvY3eLJzPBtPik8nEPW6QsQIQ8JezdsxioZsQ34ipJRIbNZwXx667hJLApOA=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
        canonicalBaseUrl: "/@kylehill",
        channelId: "UCFbtcTaMFnOAP0pFO1L8hVw",
        title: "Kyle Hill",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 856,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/aFlromB6SnU/mqdefault_6s.webp?du=3000&sqp=CMr3-KYG&rs=AOn4CLB_yE1SQM0dmspw2HqdA-fQVIuWDg",
          width: 320,
        },
      ],
      publishedTimeText: "2 years ago",
      stats: { views: 12856469 },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/aFlromB6SnU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOtU452PEgQSUx8W4FiBDbKqyPyQ",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/aFlromB6SnU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxAhXfQ-B2WmkHr1ypJ_fJLWRXtg",
          width: 720,
        },
      ],
      title: "Demon Core - The True Story",
      videoId: "aFlromB6SnU",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaQsNeb6ntIUzeyayV3r9fY-l8oH2OtaFQlHXUK0=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
        canonicalBaseUrl: "/@OneMedia.",
        channelId: "UCzcRQ3vRNr6fJ1A9rqFn7QA",
        title: "ONE Media",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 150,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/3jz6-TDkkJg/mqdefault_6s.webp?du=3000&sqp=CMCB-aYG&rs=AOn4CLAxtsVH67sKnWnRR3LM4wJlhwBUmQ",
          width: 320,
        },
      ],
      publishedTimeText: "2 days ago",
      stats: { views: 480337 },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/3jz6-TDkkJg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYa-LnNgfX_UQUJqSVHlGljrBzzA",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/3jz6-TDkkJg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHlTwyJX5DZnGioKuV9tjNzmCasA",
          width: 720,
        },
      ],
      title: "A MILLION MILES AWAY Trailer (2023) Michael Pe\u00f1a",
      videoId: "3jz6-TDkkJg",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaQsqWM9Vip0eHHGYzETKNmUsdaiHMS4q0N05lMQkg=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
        canonicalBaseUrl: "/@EnesYilmazer",
        channelId: "UCHWbZM3BIGgZksvXegx_h3w",
        title: "Enes Yilmazer",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 2052,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/Mw_AJOYzt0w/mqdefault_6s.webp?du=3000&sqp=CPSV-aYG&rs=AOn4CLDMaFwbYM39_EFSBZEchMB9uANHcA",
          width: 320,
        },
      ],
      publishedTimeText: "1 year ago",
      stats: { views: 7143419 },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/Mw_AJOYzt0w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBV_xAeJKceSrq-sb5iP-Im1lluTg",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/Mw_AJOYzt0w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgKxQGn9Ll9ecVnQwBYBlYr-XFyA",
          width: 720,
        },
      ],
      title: "Inside a $25,900,000 Fully OFF GRID Utah Mega Mansion",
      videoId: "Mw_AJOYzt0w",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/_s3C7XpwVKVr_5gDrmYJh9AOkU3wFlY9FWyZBVGVP_v7B09P5O4bbEZaWGpiuyT78Dk-aElE=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
        canonicalBaseUrl: "/@tzuyang6145",
        channelId: "UCfpaSruWW3S4dibonKXENjA",
        title: "tzuyang\ucbd4\uc591",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 900,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/dbDeFwNox5A/mqdefault_6s.webp?du=3000&sqp=CPCJ-aYG&rs=AOn4CLCFbkDaSkw03HGbtWdat7HZgDZQaw",
          width: 320,
        },
      ],
      publishedTimeText: "2 days ago",
      stats: { views: 871287 },
      thumbnails: [
        {
          height: 270,
          url: "https://i.ytimg.com/vi/dbDeFwNox5A/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDoh-AdrYbOC1iX9AvJOXEt7qb7OA",
          width: 480,
        },
      ],
      title:
        "I found a good restaurant that I couldn't forget for 10 years\ud83d\ude33 Eating show of galbi-guksu",
      videoId: "dbDeFwNox5A",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/NncdOpHt-t7QaZBIGIYqDz-6qv6j-_Gf3ilCnaRWiOSLLCOl7FOBz0q9lliRhYj6YwpAW_BEL8Y=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
        canonicalBaseUrl: "/@ufc",
        channelId: "UCvgfXK4nTYKudb0rFR6noLA",
        title: "UFC",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 509,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/uEs8r-MLozA/mqdefault_6s.webp?du=3000&sqp=CICb-aYG&rs=AOn4CLAggUwcecJnReDc_O_36D6hl1FrKg",
          width: 320,
        },
      ],
      publishedTimeText: "57 minutes ago",
      stats: { views: 43528 },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/uEs8r-MLozA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsdziG-7-KkwIjIO9tQpmVRYHnbA",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/uEs8r-MLozA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDf24RUuOrx6Yo0NyXMJqatihn6lA",
          width: 720,
        },
      ],
      title: "UFC 292 Embedded: Vlog Series - Episode 4",
      videoId: "uEs8r-MLozA",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaR3QjA3r8wnHe5cnzKrQuELizGNYGelG6OtHRS90A=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [],
        canonicalBaseUrl: "/@MandyWheelerRealEstate",
        channelId: "UCvxPnLjOyRfprXzDFtiIrAA",
        title: "Mandy Wheeler",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 903,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/frOunaLRFMw/mqdefault_6s.webp?du=3000&sqp=CKz4-KYG&rs=AOn4CLDmSOidjVjvcarDftscTdaxO2FIjQ",
          width: 320,
        },
      ],
      publishedTimeText: "15 hours ago",
      stats: { views: 1475 },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/frOunaLRFMw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJ_H7tuhKMSGctc5eSEyM_Eo_N-w",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/frOunaLRFMw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCCcrv1vHqkCIj45WegDvq6Oy1WA",
          width: 720,
        },
      ],
      title: "31 Elizabeth St. Portland, Maine, 04108",
      videoId: "frOunaLRFMw",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaQ7jRedfJibD6NcxjEhywR2XRwX-6YEuKzryyyZ3g=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
        canonicalBaseUrl: "/@BeastReacts",
        channelId: "UCUaT_39o1x6qWjz7K2pWcgw",
        title: "Beast Reacts",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 609,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/Dt-IFSvDJic/mqdefault_6s.webp?du=3000&sqp=CPTy-KYG&rs=AOn4CLDVi9-lXRTvTn3J5qEp1OsaYm6IoA",
          width: 320,
        },
      ],
      publishedTimeText: "1 year ago",
      stats: { views: 76081662 },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/Dt-IFSvDJic/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-iMwqS2sGXUxjFOMia3FL9QiWRw",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/Dt-IFSvDJic/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCW4sbOtmHXF5i9yUqBj3tf7ZP9Rg",
          width: 720,
        },
      ],
      title: "How Long Does A Pencil Last?",
      videoId: "Dt-IFSvDJic",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
        canonicalBaseUrl: "/@ABCNews",
        channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
        title: "ABC News",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 111,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/znBhvxcd-0Y/mqdefault_6s.webp?du=3000&sqp=CKLV-KYG&rs=AOn4CLA7s3-0AMkrA6FKCc3_nZ1p1wIX7A",
          width: 320,
        },
      ],
      publishedTimeText: "3 days ago",
      stats: { views: 497927 },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/znBhvxcd-0Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJhCJGVzmc6DKqIFEHxXgPa4nNXw",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/znBhvxcd-0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoWDKjSvnADR5tnGfc1i2FOQMiXw",
          width: 720,
        },
      ],
      title: "Mysterious Plum house explosion kills 5 | WNT",
      videoId: "znBhvxcd-0Y",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/6QyvnPp_MeBgQ6_mV-pnkdiKR6wwvAjYgJ9QTaEoP4tjsQ05WeseiAV1jQ7kIyV-LKMTTluLNkQ=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
        canonicalBaseUrl: "/@TheElenaYa",
        channelId: "UCl_P0sCqxOdQpMwuajdXkRg",
        title: "Diana and Roma EN",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 1774,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/p1kcQdwBFog/mqdefault_6s.webp?du=3000&sqp=CNCW-aYG&rs=AOn4CLBkbSabk-togrILT90PuStPODr95w",
          width: 320,
        },
      ],
      publishedTimeText: "1 year ago",
      stats: { views: 220199711 },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/p1kcQdwBFog/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWo0x3_iTqXj6ydsZiW8mP0_PipQ",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/p1kcQdwBFog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDycEZdTXA_ExMmNtV8NrSOlO_JLg",
          width: 720,
        },
      ],
      title: "Diana and Roma Learn to share toys. Funny stories about slime",
      videoId: "p1kcQdwBFog",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/YvbwbpyIQVWqB-MfnFLAnMn73s7dtApUKUtoYHttfcwLLxYbNXQ0y2XtacHzFF3sacjIr6agvQ=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
        canonicalBaseUrl: "/@Stanzipotenza",
        channelId: "UC2AHbLEqIvutOqS4UjumAHQ",
        title: "Stanzi",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 100,
      movingThumbnails: null,
      publishedTimeText: "2 months ago",
      stats: { views: 230326 },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/TjhzDqqMmHw/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgWAAoAKigIMCAAQARhlIE0oQzAP&rs=AOn4CLATssizh5OGybL6d8D1oKtehFngUQ",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/TjhzDqqMmHw/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgWAAoAKigIMCAAQARhlIE0oQzAP&rs=AOn4CLCffKA-KAtttzscPaskJ9zjQq75Bg",
          width: 720,
        },
      ],
      title: "Was step bro in the Bible? (Extended)",
      videoId: "TjhzDqqMmHw",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaQPiN-pSgu-uK5E9rMytUslY2H048_KQGLMkmsDfg=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
        canonicalBaseUrl: "/@MrBeastGaming",
        channelId: "UCIPPMRA040LQr5QPyJEbmXA",
        title: "MrBeast Gaming",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 610,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/xN8ENrfE-TY/mqdefault_6s.webp?du=3000&sqp=CJCb-aYG&rs=AOn4CLB7qFQFlb7ZPi0zLIJ5fTewD4j6Vg",
          width: 320,
        },
      ],
      publishedTimeText: "2 years ago",
      stats: { views: 135407059 },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/xN8ENrfE-TY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAwnynkAEr-G9tmIIBeKS7Yg1WWA",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/xN8ENrfE-TY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDDC29TrC0g8SDUFMi9a2GROOmsA",
          width: 720,
        },
      ],
      title: "If You Build a House, I'll Pay For It!",
      videoId: "xN8ENrfE-TY",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaTsJwWUROlaEM_H0j5QoEvf7JykSN7dYCJLLV2U-g=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
        canonicalBaseUrl: "/@filmspotofficial",
        channelId: "UCWOSgEKGpS5C026lY4Y4KGw",
        title: "FilmSpot Trailer",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 2820,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/DAEdVYqub0Y/mqdefault_6s.webp?du=3000&sqp=CKCQ-aYG&rs=AOn4CLAr0wf6lhugaed7rGdTMeo0RzGxSg",
          width: 320,
        },
      ],
      publishedTimeText: "3 weeks ago",
      stats: { views: 5089124 },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/DAEdVYqub0Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUFNprL2FBbggjj0ZE-FuquTIX3w",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/DAEdVYqub0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxt9Hse1nyVc0fZ8DWnYD8zVPStg",
          width: 720,
        },
      ],
      title: "BEST UPCOMING MOVIES 2023 (Trailers)",
      videoId: "DAEdVYqub0Y",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/UtJ5izTu53z5isTbiywJ07CvjXtaH55UUG1p2lC2Vv2uf7dPGZHRVqghDoGDaGXpu-wlW2-szzc=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [],
        canonicalBaseUrl: "/@TopDiscovery",
        channelId: "UCzpXbC_6o4_JmO4EGJbBd2w",
        title: "Top Discovery",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 1583,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/gqF0cgKo9U8/mqdefault_6s.webp?du=3000&sqp=CN7p-KYG&rs=AOn4CLAS0YIYydezAed3KcOcbzIeF8autQ",
          width: 320,
        },
      ],
      publishedTimeText: "3 months ago",
      stats: { views: 2843336 },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/gqF0cgKo9U8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA65qk7xdEA47ds-u1AWk-qfaCw1w",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/gqF0cgKo9U8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCw6b9ul959BK2C8QLPw5TmR8rgxQ",
          width: 720,
        },
      ],
      title: "People Laughed At His House Until They Went Inside",
      videoId: "gqF0cgKo9U8",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaSwq1S43YjhyADsZdO8xuJo1oqGyPhdfDM97FJiTQ=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
        canonicalBaseUrl: "/@JxmyHighroller",
        channelId: "UC3L9XPe0_FGfRG-CMGtBvFg",
        title: "JxmyHighroller",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 893,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/Lk4N2epJzgg/mqdefault_6s.webp?du=3000&sqp=CNCX-aYG&rs=AOn4CLDUespzUYC6kLqcheWPQfqoKu9_5Q",
          width: 320,
        },
      ],
      publishedTimeText: "1 month ago",
      stats: { views: 12472679 },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/Lk4N2epJzgg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1SqsMWSquwMRuU-Fy1s10xNy-Uw",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/Lk4N2epJzgg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSgJL3XjXt5_g8emG1NmJZRumkxg",
          width: 720,
        },
      ],
      title: "He Made A Million Dollar Shot And They Didn't Want To Pay Him",
      videoId: "Lk4N2epJzgg",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaSzWSS7kZV2OBRNCIyvLEvEUAIUQO4mfsg7-VSnQes=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
        canonicalBaseUrl: "/@NBCNews",
        channelId: "UCeY0bbntWzzVIaj2z3QigXg",
        title: "NBC News",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 3306,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/0qq69spGE_k/mqdefault_6s.webp?du=3000&sqp=CNyC-aYG&rs=AOn4CLApa_Ib5JV0Njnm3BSkQT6YSHOXZg",
          width: 320,
        },
      ],
      publishedTimeText: "Streamed 7 days ago",
      stats: { views: 1737811 },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/0qq69spGE_k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2NWmli0Xsk2rDVsyk5u_pXursWA",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/0qq69spGE_k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6Zb_3elZMKAqdiko2j94XSPCs3Q",
          width: 720,
        },
      ],
      title:
        "Watch: Virgin Galactic launches first spaceflight with tourists | NBC News",
      videoId: "0qq69spGE_k",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/5oUY3tashyxfqsjO5SGhjT4dus8FkN9CsAHwXWISFrdPYii1FudD4ICtLfuCw6-THJsJbgoY=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
        canonicalBaseUrl: "/@PewDiePie",
        channelId: "UC-lHJZR3Gqxm24_Vd_AJ5Yw",
        title: "PewDiePie",
      },
      badges: [],
      isLiveNow: false,
      lengthSeconds: 974,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/tKOlGCqDowQ/mqdefault_6s.webp?du=3000&sqp=COTv-KYG&rs=AOn4CLB7buo_tb-c7jzrigdNM3duxEY6fg",
          width: 320,
        },
      ],
      publishedTimeText: "6 days ago",
      stats: { views: 9642160 },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/tKOlGCqDowQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvkcRQKRakzHGbVrXp2FQcW7GlaA",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/tKOlGCqDowQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQJFBN5m3Kw4NmRuBn9RxUu2sQhw",
          width: 720,
        },
      ],
      title: "I'm a dad now",
      videoId: "tKOlGCqDowQ",
    },
  },
];

export default function YoutubeFeeds() {
  const dispatch = useDispatch()
  const currentVisibleVideo = useSelector(currentVisibleIndex)
  console.log({currentVisibleVideo});
  return (
    <SafeAreaView>
      <FlatList
        style={{ flex: 1, backgroundColor: "black" }}
        data={data}
        keyExtractor={({ video }) => video.videoId}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 97,
          minimumViewTime: 700,
        }}
        onViewableItemsChanged={useCallback((info) => {
          // for safer option we are going for the first viewable option
          const [visibleItem] = info.changed.filter(
            (entry) => entry.isViewable
          );
          console.log(visibleItem);
          dispatch(setCurrentIndex(visibleItem?.index))
        }, [])}
        renderItem={({index,
          item: {
            type,
            video: {
              author: { avatar, title: channelName },
              stats: { views },
              thumbnails,
              title,
              publishedTimeText,
              videoId,
            },
          },
        }) => {
          if (type === "video") {
            return (
              <View style={{ marginBottom: 20 }} key={videoId}>
                <VideoThumbanails
                  index={index}
                  channelName={channelName}
                  userURI={avatar[0].url}
                  thumbnailURI={thumbnails[0].url}
                  title={title}
                  views={views}
                  time={publishedTimeText}
                />
              </View>
            );
          }
        }}
      />
    </SafeAreaView>
  );
}
