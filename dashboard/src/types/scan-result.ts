export interface ScanResult {
  repositoryName: string;
  scanStatus: string;
  findings: number;
  timestamp: string;
}

export interface Finding {
  ruleId: string;
  description: string;
  severity: string;
  path: string;
}
