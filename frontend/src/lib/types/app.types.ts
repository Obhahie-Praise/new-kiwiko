export interface SurveyFormData {
    role: "investor" | "founder" | "";
    consent: boolean;
    userId: string;
}

export interface WaitlistTypes {
    name: string
    email: string
}

export interface Project {
    id: string;
    name: string;
    description: string | null;
    repoUrl: string;
    websiteUrl: string | null;
    createdAt: Date;
    ownerId: string;
    githubRepoId: number;
    githubRepoOwner: string;
    githubRepoName: string;
}
