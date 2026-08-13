export interface CourseProgress {
  verifiedMode: string;
  accessExpiration: string;
  certificateData?: CertificateData;
  completionSummary?: CompletionSummary;
  courseGrade?: CourseGrade;
  creditCourseRequirements: string;
  end: string;
  enrollmentMode: string;
  gradingPolicy?: GradingPolicy;
  hasScheduledContent: boolean;
  sectionScores: ('SectionScore', False)[];
  studioUrl: string;
  username: string;
  userHasPassingGrade: boolean;
  verificationData?: VerificationData;
  disableProgressGraph: boolean;
}
