import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: import.meta.env.VITE_UPSTASH_REDIS_REST_URL,
  token: import.meta.env.VITE_UPSTASH_REDIS_REST_TOKEN,
})

const PROJECTS_KEY = 'cursor:projects'

export async function getProjects() {
  try {
    const projects = await redis.get(PROJECTS_KEY)
    return projects || []
  } catch (error) {
    console.error('Failed to fetch projects:', error)
    return []
  }
}

export async function saveProject(project) {
  try {
    const projects = await getProjects()
    const updatedProjects = [project, ...projects]
    await redis.set(PROJECTS_KEY, updatedProjects)
    return updatedProjects
  } catch (error) {
    console.error('Failed to save project:', error)
    throw error
  }
} 