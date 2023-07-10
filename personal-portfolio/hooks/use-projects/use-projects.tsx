import { useEffect, useState } from 'react';
import { Project, ProjectKind, sampleProjects } from '@showoff/personal-portfolio.entities.project';

export function useProjects(max?: number | undefined, type?: ProjectKind | undefined, projectsToUse: Project[] = sampleProjects()) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      const projectList = projectsToUse;
      const filteredProjects = type ? projectList.filter((project) => project.type === type) : projectList;
      if (max) {
        setProjects(filteredProjects.slice(0, max));
      } else {
        setProjects(filteredProjects);
      }
      setLoading(false);
    };
    loadProjects();
  }, [type]);

  return { projects, loading };
}
