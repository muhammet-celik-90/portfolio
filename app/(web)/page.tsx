import getProjects from './lib/data/getProjects'
import getSelectedProjects from './lib/data/getSelectedProjects';
import Main from './ui/main/main'

export default async function Home() {

  const projects = await getProjects();
  const selectedProjects = await getSelectedProjects();

  return (
    <div>
      <Main selectedProjects={selectedProjects}/>
    </div>
  )
}
