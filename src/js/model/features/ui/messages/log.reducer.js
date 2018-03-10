export default (ui, { message, color }) => ({
    ...ui,
    messages: [...ui.messages, { text: message, color }],
});
