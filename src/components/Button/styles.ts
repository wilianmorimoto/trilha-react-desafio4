import styled from "styled-components"
import { IButtonStyle } from "./types"

export const ButtonContainer = styled.button<IButtonStyle>`
	width: 100%;
	height: 42px;
	background-color: #81259d;
	color: #fff;

	border: 1px solid #81259d;
	border-radius: 21px;

	&:disabled {
		opacity: 0.6;
	}

	&:hover {
		opacity: 0.6;
		cursor: pointer;
	}
`
