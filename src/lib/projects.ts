// Project data type
export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    featured: boolean;
    image: string;
}

// Sample projects data
export const projects: Project[] = [
    {
        id: 'mobile-banking-app',
        title: 'Mobile Banking App',
        description: 'A modern banking app with intuitive UX and seamless transactions',
        tags: ['Mobile', 'Fintech', 'iOS'],
        featured: true,
        image: '/projects/banking.jpg'
    },
    {
        id: 'ecommerce-redesign',
        title: 'E-commerce Redesign',
        description: 'Complete redesign of an e-commerce platform focusing on conversion',
        tags: ['Web', 'E-commerce', 'Responsive'],
        featured: true,
        image: '/projects/ecommerce.jpg'
    },
    {
        id: 'fitness-tracker',
        title: 'Fitness Tracker Dashboard',
        description: 'Analytics dashboard for fitness enthusiasts to track their progress',
        tags: ['Dashboard', 'Analytics', 'Health'],
        featured: true,
        image: '/projects/fitness.jpg'
    },

];

export function getProject(id: string): Project | undefined {
    return projects.find(p => p.id === id);
}

export function getNextProject(currentId: string): Project | null {
    const currentIndex = projects.findIndex(p => p.id === currentId);
    if (currentIndex === -1 || currentIndex === projects.length - 1) {
        return projects[0]
    } else {
        return projects[currentIndex + 1];
    }
}

export function getPreviousProject(currentId: string): Project | null {
    const currentIndex = projects.findIndex(p => p.id === currentId);
    if (currentIndex <= 0) {
        return projects[projects.length - 1];
    } else {
        return projects[currentIndex - 1];

    }
}
