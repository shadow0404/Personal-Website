export default function Divider() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-black/10" />
          <div className="text-black/20">•</div>
          <div className="flex-1 h-px bg-black/10" />
        </div>
      </div>
    </div>
  )
}

