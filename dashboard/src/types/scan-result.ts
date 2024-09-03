// defines several TypeScript interfaces that related to project
export interface ScanResult {
  id: string;
  repositoryName: string;
  status: string;
}

export interface Finding {
  type: string;
  ruleId: string;
  location: Location;
  metadata: Metadata;
}

interface Metadata {
  severity: string;
  description: string;
}

interface Location {
  path: string;
  positions: Positions;
}

interface Positions {
  begin: Begin;
}

interface Begin {
  line: number;
}
