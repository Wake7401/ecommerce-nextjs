"use client"

import { Store } from "@prisma/client"

interface SettingFormProps {
    initialData: Store;
}

export const SettingForm: React.FC<SettingFormProps> = ({initialData}) => {
    return <div> Setting form </div>
}