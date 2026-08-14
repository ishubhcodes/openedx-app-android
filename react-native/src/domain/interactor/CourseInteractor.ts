import { CourseStructure } from '../model/CourseStructure';
// Note: DownloadModel is technically part of db module, we will assume an any type for now or create a stub.

export interface DownloadModel {
    id: string;
    // other fields...
}

export interface CourseInteractor {
    getCourseStructure(
        courseId: string,
        isNeedRefresh?: boolean
    ): Promise<CourseStructure>;

    getCourseStructureFromCache(courseId: string): Promise<CourseStructure>;

    getAllDownloadModels(): Promise<DownloadModel[]>;
}
