export interface EnrolledCourse {
  auditAccessExpires?: Date;
  created: string;
  mode: string;
  isActive: boolean;
  course: EnrolledCourseData;
  certificate?: Certificate;
  progress: Progress;
  courseStatus?: CourseStatus;
  courseAssignments?: CourseAssignments;
}
