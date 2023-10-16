type ProfileData = {
    name: string,
    nickname: string,
    phone: string,
    email?: string,
    github: string,
    linkedin?: string,
    fullVersionLink?: string,
    location: string,
    website?: string,
}

type enducationData = {
    name: string,
    description: string,
    date: string,
}

type certificate = {
    name: string,
    date: string,
    description: string,
    link: string,
}

type experiences = {
    name: string,
    description: string
}

export type projects = {
    name: string,
    description: string,
    link: string,
    technologies: string[],
    images: string[]
    date?: string,
}

type skills = {
    name: string,
    description: string
}

export type Data = {
    profile: ProfileData,
    skills: skills[],
    projects: projects[],
    experiences: experiences[],
    educations: enducationData[],
    certifications: certificate[],
    languages: string[],
    interests: string[],
}