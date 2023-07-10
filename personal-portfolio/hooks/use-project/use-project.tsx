import { useState, useEffect } from 'react';
import { Project, sampleProjects } from '@showoff/personal-portfolio.entities.project';

export type UseProjectProps = {
  /**
   * the project id to fetch
   */
  id: string

  /**
   * the projects to filter from
   */
  projects?: Project[]
};

export function useProject({ id, projects = sampleProjects() }: UseProjectProps) {
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadProject = async () => {
      if (!id) {
        return;
      }
      setLoading(true);
      const projectToShow = projects.find((eachProject) => eachProject.id === id);
      setProject(projectToShow);
      setLoading(false);
    }
    loadProject();
  }, [id]);

  return { project, loading };
}
