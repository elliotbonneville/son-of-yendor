export default (ui, { message }) => ({
    ...ui,
    messages: [...ui.messages, message],
});
