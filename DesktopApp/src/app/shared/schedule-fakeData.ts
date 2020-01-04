import { Schedule, GameResult } from "./interfaces/schedule-interfaces";

// Fake Games
let lehiGame1: Schedule = {
    home: 0,
    away: 1,
    date: new Date(2019, 11, 26),
    gameId: 1
};

let lehiGame2: Schedule = {
    home: 0,
    away: 2,
    date: new Date(2019, 11, 27),
    gameId: 2
};

let lehiGame3: Schedule = {
    home: 1,
    away: 0,
    date: new Date(2019, 12, 3),
    gameId: 3
};

let lehiGame4: Schedule = {
    home: 2,
    away: 0,
    date: new Date(2019, 12, 9),
    gameId: 4
};

let salemGame1: Schedule = {
    home: 0,
    away: 1,
    date: new Date(2019, 11, 26),
    gameId: 1
};

let salemGame2: Schedule = {
    home: 1,
    away: 0,
    date: new Date(2019, 12, 3),
    gameId: 2
};

let salemGame3: Schedule = {
    home: 2,
    away: 1,
    date: new Date(2019, 12, 5),
    gameId: 3
};

let salemGame4: Schedule = {
    home: 1,
    away: 2,
    date: new Date(2019, 12, 10),
    gameId: 4
};

let sampleGame1: Schedule = {
    home: 0,
    away: 2,
    date: new Date(2019, 11, 27),
    gameId: 1
};

let sampleGame2: Schedule = {
    home: 2,
    away: 1,
    date: new Date(2019, 12, 5),
    gameId: 2
};

let sampleGame3: Schedule = {
    home: 2,
    away: 0,
    date: new Date(2019, 12, 9),
    gameId: 3
};

let sampleGame4: Schedule = {
    home: 1,
    away: 2,
    date: new Date(2019, 12, 10),
    gameId: 4
};

// Fake Game Results

let lehiGame1Result: GameResult = {
    gameId: 1,
    homeScore: 55,
    awayScore: 47
};

let lehiGame2Result: GameResult = {
    gameId: 2,
    homeScore: 63,
    awayScore: 52
};

let lehiGame3Result: GameResult = {
    gameId: 3,
    homeScore: 35,
    awayScore: 49
};

let lehiGame4Result: GameResult = {
    gameId: 4,
    homeScore: 87,
    awayScore: 35
};

let salemGame1Result: GameResult = {
    gameId: 1,
    homeScore: 55,
    awayScore: 47
};

let salemGame2Result: GameResult = {
    gameId: 2,
    homeScore: 35,
    awayScore: 49
};

let salemGame3Result: GameResult = {
    gameId: 3,
    homeScore: 44,
    awayScore: 43
};

let salemGame4Result: GameResult = {
    gameId: 4,
    homeScore: 28,
    awayScore: 61
};

let sampleGame1Result: GameResult = {
    gameId: 1,
    homeScore: 63,
    awayScore: 52
};

let sampleGame2Result: GameResult = {
    gameId: 2,
    homeScore: 44,
    awayScore: 43
};

let sampleGame3Result: GameResult = {
    gameId: 3,
    homeScore: 87,
    awayScore: 35
};

let sampleGame4Result: GameResult = {
    gameId: 4,
    homeScore: 28,
    awayScore: 61
};