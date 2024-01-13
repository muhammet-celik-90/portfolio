import getSelectedProjects from './lib/data/getSelectedProjects';
import Main from './ui/main/main'

export default async function Home() {

  const selectedProjects = await getSelectedProjects();

  return (
    <div>
      <Main selectedProjects={selectedProjects}/>
    </div>
  )
}
