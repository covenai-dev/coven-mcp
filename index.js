/**
 * COVEN AI MCP Server
 * 
 * This package points to the hosted COVEN AI MCP endpoint.
 * No local installation needed — the server runs remotely.
 * 
 * Endpoint: https://coven-mission-control-production.up.railway.app/mcp
 * Auth: Bearer token (get one at covenai.io/developers)
 */

export const MCP_ENDPOINT = "https://coven-mission-control-production.up.railway.app/mcp";
export const MCP_VERSION = "1.1.0";
export const TOOLS = [
  "scan_website",
  "list_audit_products",
  "place_audit_order",
  "get_audit_status",
  "check_geo_score",
  "score_citability",
  "generate_llmstxt",
  "geo_optimise"
];
