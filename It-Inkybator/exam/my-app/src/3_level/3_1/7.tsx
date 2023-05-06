type StateType = {
    volume: number // in percents
    trackUrl: string // 'https://blabla.com/track01.mp3',
    currentPlayPosition: number // milliseconds,
}

export const reducer = (state: StateType, action: any) => {
    switch (action.type) {
        case 'TRACK-MUTED':
            return {
                ...state,
                trackUrl: action.url
            }
        case 'TRACK-MUTED':
            return {
                ...state,
                volume: 0
            }
        case 'TRACK-MUTED':
            return {
                ...state,
                currentPlayPosition: 0
            }
        default:
            return state
    }
}

const muteTrackAC = () => ({type: 'TRACK-MUTED'})
const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// перемотатьНаНачало:
const rewindToStart = () => ({type: 'TRACK-REWOUND-TO-START'})

// Какие типы должны быть вместо XXX, YYY и ZZZ?
// Ответ дать через пробел, например:   'BLABLA' 'HEYНЕY' 'HIPHOP'