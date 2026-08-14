import { CourseCalendarEvent } from '../model/CourseCalendarEvent';
import { CourseCalendarState } from '../model/CourseCalendarState';
import { EnrollmentStatus } from '../model/EnrollmentStatus';
import { CourseDatesResult } from '../model/CourseDatesResult';

// In a real TS app, these entities would be defined in a DB layer.
export interface CourseCalendarEventEntity {
    id: string;
    courseId: string;
}

export interface CourseCalendarStateEntity {
    courseId: string;
}

// We define the interface that the repository and interactor will use
export interface CalendarRepository {
    getEnrollmentsStatus(): Promise<EnrollmentStatus>;
    getCourseDates(courseId: string): Promise<CourseDatesResult>;

    insertCourseCalendarEntityToCache(...courseCalendarEntity: CourseCalendarEventEntity[]): Promise<void>;
    getCourseCalendarEventsByIdFromCache(courseId: string): Promise<CourseCalendarEvent[]>;
    deleteCourseCalendarEntitiesByIdFromCache(courseId: string): Promise<void>;

    insertCourseCalendarStateEntityToCache(...courseCalendarStateEntity: CourseCalendarStateEntity[]): Promise<void>;
    getCourseCalendarStateByIdFromCache(courseId: string): Promise<CourseCalendarState | null>;
    getAllCourseCalendarStateFromCache(): Promise<CourseCalendarState[]>;

    clearCalendarCachedData(): Promise<void>;
    resetChecksums(): Promise<void>;

    updateCourseCalendarStateByIdInCache(
        courseId: string,
        checksum?: number,
        isCourseSyncEnabled?: boolean
    ): Promise<void>;
    deleteCourseCalendarStateByIdFromCache(courseId: string): Promise<void>;
}

export class CalendarInteractor {
    private repository: CalendarRepository;

    constructor(repository: CalendarRepository) {
        this.repository = repository;
    }

    async getEnrollmentsStatus(): Promise<EnrollmentStatus> {
        return this.repository.getEnrollmentsStatus();
    }

    async getCourseDates(courseId: string): Promise<CourseDatesResult> {
        return this.repository.getCourseDates(courseId);
    }

    async insertCourseCalendarEntityToCache(...courseCalendarEntity: CourseCalendarEventEntity[]): Promise<void> {
        await this.repository.insertCourseCalendarEntityToCache(...courseCalendarEntity);
    }

    async getCourseCalendarEventsByIdFromCache(courseId: string): Promise<CourseCalendarEvent[]> {
        return this.repository.getCourseCalendarEventsByIdFromCache(courseId);
    }

    async deleteCourseCalendarEntitiesByIdFromCache(courseId: string): Promise<void> {
        await this.repository.deleteCourseCalendarEntitiesByIdFromCache(courseId);
    }

    async insertCourseCalendarStateEntityToCache(...courseCalendarStateEntity: CourseCalendarStateEntity[]): Promise<void> {
        await this.repository.insertCourseCalendarStateEntityToCache(...courseCalendarStateEntity);
    }

    async getCourseCalendarStateByIdFromCache(courseId: string): Promise<CourseCalendarState | null> {
        return this.repository.getCourseCalendarStateByIdFromCache(courseId);
    }

    async getAllCourseCalendarStateFromCache(): Promise<CourseCalendarState[]> {
        return this.repository.getAllCourseCalendarStateFromCache();
    }

    async clearCalendarCachedData(): Promise<void> {
        await this.repository.clearCalendarCachedData();
    }

    async resetChecksums(): Promise<void> {
        await this.repository.resetChecksums();
    }

    async updateCourseCalendarStateByIdInCache(
        courseId: string,
        checksum?: number,
        isCourseSyncEnabled?: boolean
    ): Promise<void> {
        await this.repository.updateCourseCalendarStateByIdInCache(courseId, checksum, isCourseSyncEnabled);
    }

    async deleteCourseCalendarStateByIdFromCache(courseId: string): Promise<void> {
        await this.repository.deleteCourseCalendarStateByIdFromCache(courseId);
    }
}
