export default function (state, { mousePosition }) {
    return {
        ...state,
        mouseDown: true,
        mousePosition,
        firstMouseDownPosition: mousePosition,
    };
}
