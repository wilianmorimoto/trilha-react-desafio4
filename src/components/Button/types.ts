export interface IButtonProps {
	title: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	disabled?: boolean
}

export interface IButtonStyle {
	children?: React.ReactNode
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	disabled?: boolean
}
