export const ACTION_TYPE = 'ACTION_TYPE'

export function egAction(text) {
    return { type: ACTION_TYPE, text };
}