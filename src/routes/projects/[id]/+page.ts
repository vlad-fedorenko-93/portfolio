import type { PageLoad } from './$types';
import { getProject, getNextProject, getPreviousProject } from '$lib/projects';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
    const project = getProject(params.id);

    if (!project) {
        throw error(404, 'Project not found');
    }

    const nextProject = getNextProject(params.id);
    const previousProject = getPreviousProject(params.id);

    // Dynamically import the markdown content
    let content;
    try {
        const module = await import(`../../../content/projects/${params.id}.svx`);
        content = module.default;
    } catch (e) {
        console.error('Failed to load project content:', e);
        content = null;
    }

    return {
        project,
        content,
        nextProject,
        previousProject
    };
};
