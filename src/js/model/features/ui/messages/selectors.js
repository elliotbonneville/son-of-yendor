import ui from '~/model/features/ui/selectors';

export function getMessages(state) {
    return ui(state).messages;
}
