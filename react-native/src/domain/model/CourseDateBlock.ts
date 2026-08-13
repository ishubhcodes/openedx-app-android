export interface CourseDateBlock {
  title: string;
  description: string;
  link: string;
  blockId: string;
  learnerHasAccess: boolean;
  complete: boolean;
  date: Date;
  dateType: DateType;
  assignmentType?: string;
}
