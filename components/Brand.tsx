export default function Brand({inverse = false}: {inverse?:boolean}) {
  return <span className="inline-flex items-center gap-2.5" aria-label="Zentra tecnologia">
    <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-[12px] bg-gradient-to-br from-[#8d51ff] via-[#6849ff] to-[#28cfd1] text-xl font-black italic text-white shadow-[0_10px_32px_#7651ff55]">
      Z<span className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-white/30 blur-lg"/>
    </span>
    <span className={`text-[27px] font-black tracking-[-.075em] ${inverse?"text-white":"text-white"}`}>zentra<span className="text-[#9f80ff]">.</span></span>
  </span>;
}
