const INTI = [
  {
    id: 0,
    name: "nitish saini",
    number: 123456789,
    email:"ni@gmail.com"
  },
  {
    id: 1,
    name: "anmol dhiman",
    number: 2234567892,
    email:"an@gmail.com"
  },
];
const ConatactReducers = (state = INTI, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
        state = [...state  , action.payload]
        return state;
     case "UPDATE_CONTACT":
      const updatestate = state.map(contact=>contact.id===action.payload.id ? action.payload:contact)
      state = updatestate;
      return state
      case "DELETE_CONTACT":
        const filterContact = state.filter(contact => contact.id!==action.payload && contact) 
        state = filterContact;
        return state;
    default:
      return state;
  }
};
export default ConatactReducers;