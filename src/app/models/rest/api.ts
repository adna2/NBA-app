export interface Team {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
}

export interface Meta {
    total_pages: number;
    current_page: number;
    next_page: number;
    per_page: number;
    total_count: number;
}

export interface TeamsApiResponse {
    data: Team[];
    meta: Meta;
}

export interface Game {
    id: number;
    date: string;
    home_team: Team;
    home_team_score: number;
    period: number;
    postseason: boolean;
    season: number;
    status: string;
    time: string;
    visitor_team: Team;
    visitor_team_score: number;
}

export interface GamesApiResponse {
    data: Game[];
    meta: Meta;
}


