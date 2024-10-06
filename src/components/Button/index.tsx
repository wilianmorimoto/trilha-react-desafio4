import { ButtonContainer } from "./styles"
import { IButtonProps } from "./types"

const Button = ({ title, onClick, disabled }: IButtonProps) => {
	return (
		<>
			{disabled ? (
				<ButtonContainer disabled onClick={onClick}>
					{title}
				</ButtonContainer>
			) : (
				<ButtonContainer onClick={onClick}>{title}</ButtonContainer>
			)}
		</>
	)
}

export default Button
