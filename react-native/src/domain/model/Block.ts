export interface Block {
  id: string;
  blockId: string;
  lmsWebUrl: string;
  legacyWebUrl: string;
  studentViewUrl: string;
  type: BlockType;
  displayName: string;
  graded: boolean;
  studentViewData?: StudentViewData;
  studentViewMultiDevice: boolean;
  blockCounts: BlockCounts;
  descendants: ('string', False)[];
  descendantsType: BlockType;
  completion: number;
  containsGatedContent: boolean;
  downloadModel?: DownloadModel;
  assignmentProgress?: AssignmentProgress;
  due?: Date;
  offlineDownload?: OfflineDownload;
}
