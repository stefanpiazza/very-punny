const initialState = [
    
]

// const initialState = [{
//         "joke": "Did you hear about the guy whose whole left side was cut off?",
//         "punchLine": "He's all right now."
//     },
//     {
//         "joke": "Why don't some couples go to the gym?",
//         "punchLine": "Because some relationships don't work out."
//     },
//     {
//         "joke": "I wasn't originally going to get a brain transplant,",
//         "punchLine": "but then I changed my mind."
//     },
//     {
//         "joke": "Yesterday I accidentally swallowed some food coloring.",
//         "punchLine": "The doctor says I'm OK, but I feel like I've dyed a little inside."
//     },
//     {
//         "joke": "I wondered why the baseball was getting bigger.",
//         "punchLine": "Then it hit me."
//     },
//     {
//         "joke": "I'd tell you a chemistry joke",
//         "punchLine": "but I know I wouldn't get a reaction."
//     },
//     {
//         "joke": "A friend of mine tried to annoy me with bird puns",
//         "punchLine": "but I soon realized that toucan play at that game."
//     },
//     {
//         "joke": "Have you ever tried to eat a clock?",
//         "punchLine": "It's very time consuming."
//     },
//     {
//         "joke": "Did you hear about the guy who got hit in the head with a can of soda?",
//         "punchLine": "He was lucky it was a soft drink."
//     },
//     {
//         "joke": "If there was someone selling drugs in this place,",
//         "punchLine": "weed know."
//     }
// ];

export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADDED_PUN':
            return [
                ...state,
                action.payload
            ]
            break;

        case 'ADDED_PUNS':
            return [...state], action.payload

        case 'REMOVED_PUN':
            return state.filter((pun) => state.indexOf(pun) !== state.indexOf(action.payload))
            break;

        default:
            return state;
    }
}
