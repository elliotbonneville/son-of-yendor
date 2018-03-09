export default function (state, { mousePosition }) {
    return {
        ...state,
        mouseDown: false,
        mousePosition,
        lastMouseDownPosition: mousePosition,
    };
}
