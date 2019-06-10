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
  indexPosts: ({posts}) =>
    posts && posts.map(post =>
      ({
        title: post.title,
        subTitle: post.subTitle,
        date: post.date,
        district: post.district,
      })
    ),

  sameDistrictPosts: ({posts}, _, __, rootGetters) =>
    district =>
      posts && posts.filter(post =>
        rootGetters['main/makeURL'](post.district) === district),

  
  
}