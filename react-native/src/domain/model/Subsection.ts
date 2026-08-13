export interface Subsection {
  assignmentType: string;
  blockKey: string;
  displayName: string;
  hasGradedAssignment: boolean;
  override: string;
  learnerHasAccess: boolean;
  numPointsEarned: number;
  numPointsPossible: number;
  percentGraded: number;
  problemScores: ('ProblemScore', False)[];
  showCorrectness: string;
  showGrades: boolean;
  url: string;
}
