import { User } from "../../store";

export interface DeleteProp {
    onDelete: () => void,
}

export interface EditProp {
    onEdit: () => void,
}

export interface AddProp {
    onAdd: () => void,
}

export interface UserSectionProps {
    user: User,
}