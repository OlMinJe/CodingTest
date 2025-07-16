function solution(genres, plays) {
    const playCountMap = new Map();
    const songsMap = new Map();
    
    
    genres.forEach((genre, idx) => {
        const play = plays[idx];
        playCountMap.set(genre, (playCountMap.get(genre) || 0) + play);
        
        if (!songsMap.has(genre)) songsMap.set(genre, []);
        songsMap.get(genre).push([idx, play]);
    })

    const sortedGenres = [...playCountMap.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([genre]) => genre);

    const answer = [];

    for (const genre of sortedGenres) {
        const topSongs = songsMap
            .get(genre)
            .sort((a, b) => b[1] - a[1] || a[1] - b[0])
            .slice(0, 2);

        answer.push(...topSongs.map(([idx]) => idx));
    }

    return answer;
}
