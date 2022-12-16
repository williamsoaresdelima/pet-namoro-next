import Link from "next/link";

export default function CallLogin() {
	return (
		<div>
			<span className="callLogin">
				Já é cadastrado? Click <Link href={`/api/auth/signin`}> aqui!</Link>
			</span>
			<style jsx>{`
        .callLogin {
					display: flex;
					gap: 4px;
					justify-content: center;
					padding-top: 12px;
        }
        `}</style>
		</div>
	)
}