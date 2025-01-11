import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: import.meta.env.VITE_UPSTASH_KV_REST_API_URL,
  token: import.meta.env.VITE_UPSTASH_KV_REST_API_TOKEN
})

const PROJECTS_KEY = 'cursor:projects'

export async function getProjects() {
  try {
    console.log('Fetching projects...');
    const projects = await redis.get(PROJECTS_KEY)
    console.log('Projects fetched:', projects);
    return projects || []
  } catch (error) {
    console.error('Failed to fetch projects:', error)
    throw error // Let the error boundary catch this
  }
}

export async function saveProject(project) {
  try {
    console.log('Saving project:', project);
    const projects = await getProjects()
    const updatedProjects = [project, ...projects]
    await redis.set(PROJECTS_KEY, updatedProjects)
    console.log('Project saved successfully');
    return updatedProjects
  } catch (error) {
    console.error('Failed to save project:', error)
    throw error
  }
} 