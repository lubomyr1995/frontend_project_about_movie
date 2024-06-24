export interface IUser {
    id?: number;
    user: string;
    success?: boolean;
    guest_session_id?: string;
    expires_at?: string
}