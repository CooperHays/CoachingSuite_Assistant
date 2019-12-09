export interface Schedule {
    home: number,
    away: number,
    date: Date,
    gameId: number
}

export interface GameResult {
    gameId: number,
    homeScore: number,
    awayScore: number
}
