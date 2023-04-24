import { pageRoot } from './constants'
const nav = [
  {
    text: 'QA',
    items: [
      { text: '知识点', link: '/qa/index', activeMath: '/qa/' },
      { text: '代码实践', link: '/practice/index', activeMath: '/practice/' },
      { text: '笔试题', link: '/exam/index', activeMath: '/exam/' }
    ]
  }
]

const addPrefix = (link: string) => {
  return pageRoot + link
}

const endNav = nav.map((i) => {
  const items = i.items?.map((i) => {
    return {
      ...i,
      link: addPrefix(i.link)
    }
  })
  const hasItems = i.items?.length > 0
  const isLink = i.link?.length > 0
  const baseRes = isLink ? { ...i, link: i.external ? i.link : addPrefix(i.link) } : { ...i }
  return hasItems ? { ...baseRes, items } : { ...baseRes }
})

export default endNav
