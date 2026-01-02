import React from 'react';
import { cn } from '../../utils/cn';

export const ToolPlaceholder: React.FC<{ name: string }> = ({ name }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                    <label className="text-[10px] font-bold text-foreground-muted uppercase tracking-[0.2em] pl-1">Input</label>
                    <div className="h-96 glass-input !p-0 overflow-hidden focus-within:ring-1 focus-within:ring-border-glass">
                        <textarea
                            className="w-full h-full bg-transparent border-none outline-none resize-none p-4 font-mono text-sm text-foreground placeholder:text-foreground-muted"
                            placeholder="Paste your content here..."
                        />
                    </div>
                </div>
                <div className="space-y-3">
                    <label className="text-[10px] font-bold text-foreground-muted uppercase tracking-[0.2em] pl-1">Output</label>
                    <div className="h-96 glass-input !p-0 overflow-hidden bg-[var(--color-glass-input)]">
                        <pre className="w-full h-full overflow-auto custom-scrollbar p-4 font-mono text-sm text-emerald-400">
                            {`// Output for ${name} will appear here`}
                        </pre>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-3">
                {['Format', 'Minify', 'Validate', 'Reset'].map((action) => (
                    <button
                        key={action}
                        className={cn(
                            "glass-button px-8 py-2.5 font-semibold text-xs uppercase tracking-widest text-foreground-secondary hover:text-foreground",
                            action === 'Format' && "glass-button-primary bg-indigo-500/80 hover:bg-indigo-500 text-white shadow-none hover:shadow-indigo-500/20"
                        )}
                    >
                        {action}
                    </button>
                ))}
            </div>
        </div>
    );
};
