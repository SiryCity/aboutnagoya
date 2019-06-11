import {createClient} from '~/plugins/contentful.js'

export const actions = {

  async fetchContents({commit}){
    
    const contents = await createClient().getEntries({
      'content_type': process.env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.date',
    })

    commit('getPosts', contents)
  }
}


export const mutations = {
  getPosts(state, contents){

    const posts = contents.items.map(p =>
      ({
        ... p.fields,
        date: p.fields.date.split`T`[0]
      })
    )

    state.posts = posts
  }
}

export const state = () =>
  ({
    posts: null
  })

export const getters = {

  // indexのページに載る基本の
  indexPosts: ({posts}) =>
    posts && posts.map(post =>
      ({
        title: post.title,
        subTitle: post.subTitle,
        date: post.date,
        district: post.district,
      })
    ),

  // 区ごとのページに載るの
  sameDistrictPosts: ({posts}, _, __, rootGetters) =>
    district =>
      posts && posts.filter(post =>
        rootGetters['main/makeURL'](post.district) === district),

  // メイン記事のページに載るの
  datePosts: ({posts}) =>
    posts && posts.map(post =>
      ({
        title: post.title,
        subTitle: post.subTitle,
        date: post.date,
        district: post.district,
          
        bodyAbout: post.bodyAbout,
        bodyGeography: post.bodyGeography,
        bodyPeople: post.bodyPeople,
        bodyConclusion: post.bodyConclusion,

        coords: post.coords,
      })
    ),

    nearbyPosts: ({posts}, getters) =>
      date =>
        posts && getters.datePosts.reduce((prev, curr, i, posts) =>
          prev
          || curr.date !== date
            ? prev
            : {
              next: posts[i - 1] || null,
              curr,
              prev: posts[i + 1] || null,

              closer: posts.filter(post =>
                post.district === curr.district
                && post.title !== curr.title
              ),

              latest: posts.filter((post, j) =>
                j <= 2
              ),
            }
        , null)
  
}