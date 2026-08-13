export interface EncodedVideos {
  youtube?: VideoInfo;
  hls?: VideoInfo;
  fallback?: VideoInfo;
  desktopMp4?: VideoInfo;
  mobileHigh?: VideoInfo;
  mobileLow?: VideoInfo;
}
