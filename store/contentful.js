import {createClient} from '~/plugins/contentful.js'

export const actions = {

  async fetchContents({commit}){
    
    const allContents = await createClient().getEntries({
      'content_type': process.env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.date',
    })

    commit('moldContents', allContents)
  }
}


export const mutations = {
  moldContents(state, allContents){

    const usingContents = allContents.items.map(p => p.fields)

    state.contents = usingContents
  }
}

export const state = () =>
  ({
    contents: null
  })

export const getters = {
  contentsByIndex: ({contents}) =>
    contents && contents.map(post =>
      ({
        title: post.title,
        subTitle: post.subTitle,
        date: post.date,
        district: post.district,
      })
    ),

  
}