import getProjects from './lib/data/getProjects'
import Main from './ui/main/main'

export default async function Home() {

  const projects = await getProjects();

  return (
    <div>
      <Main projects={projects}/>
    </div>
  )
}
