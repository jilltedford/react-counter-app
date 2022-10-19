export default function CountReducer(state, action) {
  switch (action.type) {
    case 'increment_count': {
      return {
        count: state.count + 1
      };
    }
    case 'decrement_count': {
      return {
        count: state.count - 1
      };
    }
    default: {
      throw Error('Unknown action:' + action.type);
    }
  } 
};
