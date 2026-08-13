export interface CourseEnrollmentDetails {
  id: string;
  courseUpdates: string;
  courseHandouts: string;
  discussionUrl: string;
  courseAccessDetails: CourseAccessDetails;
  certificate?: Certificate;
  enrollmentDetails: EnrollmentDetails;
  courseInfoOverview: CourseInfoOverview;
}
