export default function OAuth({ from }: { from: string }) {
	const handler = (url: string) => {
		window.location.href = url;
	};
	const apiBaseUrl = (import.meta.env.VITE_API_URL).replace(/\/$/, "");
	const urlGoogle = `${apiBaseUrl}/auth/google?state=${encodeURIComponent(from)}`
	const url42 = `${apiBaseUrl}/auth/school?state=${encodeURIComponent(from)}`
	return (
		<>
			<div className="grid grid-cols-2 gap-2">
				<button onClick={() => handler(url42)} type="button" className="flex h-11 items-center justify-center gap-2 rounded-xl border border-border/60 bg-surface/70 text-sm font-medium transition hover:border-primary/40">
					<span className="font-display font-bold text-primary">42</span> School
				</button>
				<button onClick={() => handler(urlGoogle)} type="button" className="flex h-11 items-center justify-center gap-2 rounded-xl border border-border/60 bg-surface/70 text-sm font-medium transition hover:border-primary/40">
					<span className="font-display font-bold text-[#EA4335]">G</span> Google
				</button>
			</div>
		</>
	);
}
