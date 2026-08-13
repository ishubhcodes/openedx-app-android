export interface CourseAccessDetails {
  hasUnmetPrerequisites: boolean;
  isTooEarly: boolean;
  isStaff: boolean;
  auditAccessExpires?: Date;
  coursewareAccess?: CoursewareAccess;
}
