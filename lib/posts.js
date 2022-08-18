import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData(){
  const filenames = fs.readdirSync(postsDirectory)
  const allPostsData = filenames.map(fn => {
    const id = fn.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fn)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      id,
      ...matterResult.data,
    }
  })

  return allPostsData.sort(( { date: a }, { date: b }) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  })
}

export function getAllPostIds() {
  const filenames = fs.readdirSync(postsDirectory)
  // must return an array of { params } 
  return filenames.map(fn => {
    return {
      params: {
        // `id` below must match `[id]` in the filename of the dynamic path file
        id: fn.replace(/\.md$/, ''),
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  const processedContent = await remark()
  .use(html)
  .process(matterResult.content)
  const contentHtml = processedContent.toString()
  return {
    id, 
    contentHtml,
    ...matterResult.data,
  }
}