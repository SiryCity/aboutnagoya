import {createClient} from '~/plugins/contentful.js'

export const actions = {
  async nuxtServerInit ({commit, rootState}) {

    rootState.contentful.posts || commit(
      'contentful/getPosts',
      (
        await createClient().getEntries({
          'content_type': process.env.CTF_BLOG_POST_TYPE_ID,
          order: '-fields.date',
        })
      ),
      { root: true }
    )

  }
}