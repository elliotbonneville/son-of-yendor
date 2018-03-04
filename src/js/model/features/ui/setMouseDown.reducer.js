export default function (state, { mouseDown, mouseDownPosition }) {
    return {
        ...state,
        mouseDown,
        mousePosition: mouseDownPosition,
        mouseDownPosition,
    };
}
