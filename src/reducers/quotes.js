export default (state = [], action) => {
  switch(action.type) {
    case "ADD_QUOTE":
      debugger
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      let quotes = state.filter(s => s.id !== action.quoteId)
      return quotes
    case "UPVOTE_QUOTE":
      let quoteUp = state.find(s => s.id === action.quoteId)
      quoteUp.votes += 1
      return [...state]
    case "DOWNVOTE_QUOTE":
        let quoteDo = state.find(s => s.id === action.quoteId)
        quoteDo.votes === 0 ? quoteDo.votes : (quoteDo.votes -= 1)
        return [...state]
    default:
      return state;
  }
}

