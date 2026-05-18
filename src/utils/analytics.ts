export const trackEvent = ({
    action,
    category,
    label,
    value,
}: {
    action: string;
    category: string;
    label?: string;
    value?: number;
}) => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
        
        if (import.meta.env && import.meta.env.DEV) {
            console.log(`[GA Event Tracked]: ${action}`, { category, label, value });
        }
    } else {
        if (import.meta.env && import.meta.env.DEV) {
            console.warn(`[GA Event Blocked/Missing]: ${action}`, { category, label, value });
        }
    }
};
