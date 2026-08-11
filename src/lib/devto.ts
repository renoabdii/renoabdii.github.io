const DEVTO_API = 'https://dev.to/api'

export interface DevtoArticle {
  id: number
  title: string
  description: string
  url: string
  cover_image: string | null
  tag_list: string[]
  user: { name: string }
  readable_publish_date: string
}

export async function fetchArticles(tag: string, page = 1): Promise<DevtoArticle[]> {
  const res = await fetch(`${DEVTO_API}/articles?tag=${tag}&page=${page}&per_page=20`)
  if (!res.ok) throw new Error('Failed to fetch articles')
  return res.json()
}

export const ARTICLE_TAGS = [
  'ai',
  'artificial-intelligence',
  'machine-learning',
  'deep-learning',
  'technology',
  'webdev',
  'react',
  'javascript',
  'typescript',
  'python',
  'programming',
  'devops',
  'cloud',
  'cybersecurity',
  'blockchain',
  'mobile',
  'database',
  'opensource',
] as const
