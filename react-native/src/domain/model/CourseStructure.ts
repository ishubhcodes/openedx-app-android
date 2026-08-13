export interface CourseStructure {
  root: string;
  blockData: ('Block', False)[];
  id: string;
  name: string;
  number: string;
  org: string;
  start?: Date;
  startDisplay: string;
  startType: string;
  end?: Date;
  coursewareAccess?: CoursewareAccess;
  media?: Media;
  certificate?: Certificate;
  isSelfPaced: boolean;
  progress?: Progress;
}
