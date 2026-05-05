import { sanitizeRichTextHtml } from './utils/sanitize';

interface GamePlanDisplayProps {
  html: string;
  hasChanges?: boolean;
  emptyLabel?: string;
}

export function GamePlanDisplay({
  html,
  hasChanges = false,
  emptyLabel = 'Ingen Game Plan ännu.',
}: GamePlanDisplayProps) {
  const safeHtml = sanitizeRichTextHtml(html || '');

  return (
    <div style={{ position: 'relative' }}>
      {hasChanges && (
        <div
          title="Nya uppdateringar i Game Plan"
          style={{
            position: 'absolute',
            top: '-4px',
            right: '-4px',
            width: '12px',
            height: '12px',
            background: '#10b981',
            borderRadius: '50%',
            border: '2px solid #fff',
          }}
        />
      )}

      {safeHtml.trim() ? (
        <div
          className="prose prose-sm max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground/80 prose-p:leading-relaxed prose-strong:font-bold prose-strong:text-foreground prose-li:text-foreground/80 prose-a:text-accent"
          dangerouslySetInnerHTML={{ __html: safeHtml }}
        />
      ) : (
        <div
          className="rounded-xl border border-dashed border-foreground/10 bg-muted/50 px-5 py-4 text-center text-sm text-muted-foreground"
        >
          {emptyLabel}
        </div>
      )}
    </div>
  );
}
