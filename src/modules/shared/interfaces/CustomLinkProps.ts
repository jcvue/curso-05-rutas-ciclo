export interface CustomLinkProps {
    to: string | { name: string; params?: any };
    text: string;
    external?: boolean;
}
