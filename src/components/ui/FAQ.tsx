export function FAQ({ question, answer }: { question: string; answer: React.ReactNode }) {
  return (
    <div className="glass-panel rounded-xl p-6">
      <h4 className="font-semibold text-foreground">{question}</h4>

      <div className="text-muted-foreground mt-2 text-sm md:text-base leading-relaxed">
        {answer}
      </div>
    </div>
  );
}
