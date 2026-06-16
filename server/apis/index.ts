/**
 * API Registry - Minimal test for production build.
 */
import AutoLookupViewer from './v2/auto-lookup-viewer.js';

const apis = {
  AutoLookupViewer,
} as const;

export default apis;

/** Type for useApi inference - exported for client type-only imports */
export type ApiRegistry = typeof apis;
