export type State = {
    status: 'initial' | 'loading' | 'invalid' | 'submitted'
}
export const initialState: State = {
    status: 'initial'
};

export const reducer = (state: any, action: any) => state;
