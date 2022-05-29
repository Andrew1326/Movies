import { AlertProps } from "@chakra-ui/react"

export type TMyAlertProps = { 
    description: string, 
    title?: string 
}

export type TAlertProps = AlertProps & TMyAlertProps