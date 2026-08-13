export interface EnrolledCourseData {
  id: string;
  name: string;
  number: string;
  org: string;
  start?: Date;
  startDisplay: string;
  startType: string;
  end?: Date;
  dynamicUpgradeDeadline: string;
  subscriptionId: string;
  coursewareAccess?: CoursewareAccess;
  media?: Media;
  courseImage: string;
  courseAbout: string;
  courseSharingUtmParameters: CourseSharingUtmParameters;
  courseUpdates: string;
  courseHandouts: string;
  discussionUrl: string;
  videoOutline: string;
  isSelfPaced: boolean;
}
