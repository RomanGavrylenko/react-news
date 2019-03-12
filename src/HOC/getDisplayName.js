export function getDisplayName(OriginComponent) {
    return OriginComponent.displayName || OriginComponent.name || 'Component';
}