export interface CourseInfoOverview {
  name: string;
  number: string;
  org: string;
  start?: Date;
  startDisplay?: string;
  startType: string;
  end?: Date;
  isSelfPaced: boolean;
  media?: Media;
  courseSharingUtmParameters: CourseSharingUtmParameters;
  courseAbout: string;
}
