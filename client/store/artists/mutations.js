export const SET_ARTISTS = (state, artists) => {
    state.artists = artists
}

export const SET_GRID = (state, len) => {
    state.grid.row_count2 = len / 2
    state.grid.row_count3 = len / 3
    state.grid.row_count4 = len / 4
}