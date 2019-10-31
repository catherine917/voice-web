export interface WeeklyChallenge {
  week: number;
  user: {
    speak: number;
    speak_total: number;
    listen: number;
    listen_total: number;
  };
  team: {
    invite: number;
    invite_total: number;
  };
}

export interface Challenge {
  position: number;
  name: string;
  logo: string;
  points: number;
  approved: number;
  accuracy: number;
  cursor?: [number, number];
}

export interface TeamChallenge {
  team: {
    name: string;
    points: number;
    approved: number;
    accuracy: number;
  };
  member: Array<Challenge>;
}
