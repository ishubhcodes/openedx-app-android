export interface CoursewareAccess {
  hasAccess: boolean;
  errorCode: string;
  developerMessage: string;
  userMessage: string;
  additionalContextUserMessage: string;
  userFragment: string;
}
