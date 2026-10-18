import type { ButtonHTMLAttributes } from "react";

type DreamButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const styles = `
	.dream-button {
		position: relative;
		display: grid;
		place-items: center;
		width: 200px;
		height: 100px;
		padding: 1rem;
		overflow: hidden;
		border: 2px solid transparent;
		border-radius: 0.6rem;
		background-color: #8b79bd;
		color: #fff;
		mix-blend-mode: multiply;
		font: inherit;
		font-size: 1.1rem;
		cursor: pointer;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
		isolation: isolate;
		transition: background-color 160ms ease, border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease;
	}

	.dream-button:hover:not(:disabled) {
		transform: translateY(-2px);
		border-color: #efd7f3;
		background: #7c6ea1;
		box-shadow: 0 0 12px #e879f9, 0 0 30px rgba(232, 121, 249, 0.75);
		mix-blend-mode: difference;
	}

	.dream-button:focus-visible {
		outline: 3px solid #cac5d9;
		outline-offset: 3px;
	}

	.dream-button:disabled {
		cursor: not-allowed;
	}

	.dream-button__label {
		position: relative;
		z-index: 1;
	}

	.dream-button__grid {
		position: absolute;
		inset: 0;
		display: grid;
		place-content: center;
		grid-template-columns: repeat(3, 25px);
		gap: 35px;
		transform: translateY(-5px) scale(1.3);
		pointer-events: none;
	}

	.dream-button__grid span {
		width: 20px;
		height: 20px;
		border-radius: 1px;
		background: white;
		animation: dream-button-descend 5s ease-in-out infinite;
	}

	.dream-button__grid span:nth-child(2) { animation-delay: 0.5s; }
	.dream-button__grid span:nth-child(3) { animation-delay: 1s; }
	.dream-button__grid span:nth-child(4) { animation-delay: 1.5s; }
	.dream-button__grid span:nth-child(5) { animation-delay: 2s; }
	.dream-button__grid span:nth-child(6) { animation-delay: 2.5s; }

	@keyframes dream-button-descend {
		0% { transform: rotate(45deg) translateY(-200px); opacity: 0.25; }
		50% { transform: rotate(0deg) translateY(0); opacity: 1; }
		100% { transform: rotate(315deg) translateY(100px) scale(0.5); opacity: 0.25; }
	}

	@media (prefers-reduced-motion: reduce) {
		.dream-button,
		.dream-button__grid span {
			transition: none;
			animation: none;
		}
	}
`;

export function DreamButton({
	children = "Button",
	className,
	type = "button",
	"aria-label": ariaLabel = "Kliknij mnie",
	...buttonProps
}: DreamButtonProps) {
	const buttonClassName = ["dream-button", className].filter(Boolean).join(" ");

	return (
		<>
			<style>{styles}</style>
			<button
				{...buttonProps}
				type={type}
				aria-label={ariaLabel}
				className={buttonClassName}
			>
				<span className="dream-button__label">{children}</span>
				<span className="dream-button__grid" aria-hidden="true">
					{Array.from({ length: 6 }, (_, index) => (
						<span key={index} />
					))}
				</span>
			</button>
		</>
	);
}

export default DreamButton;