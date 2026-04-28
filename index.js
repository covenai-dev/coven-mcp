/**
 * COVEN AI MCP Server
 *
 * This package points to the hosted COVEN AI MCP endpoint.
 * No local installation needed — the server runs remotely.
 *
 * Endpoint: https://api.covenai.io/mcp
 * Auth: Bearer token (get one at covenai.io/developers)
 *
 * Methodology: v2.0.1. Five scored dimensions plus one research signal.
 *   - Structure (25%)
 *   - Citability (25%)
 *   - Discoverability (15%)
 *   - Agent Interface (20%)
 *   - Transactability (15%)
 *   - Agent Correlation (0%, research signal — surfaced separately, not scored)
 *
 * Scan responses include `methodology_version: "2.0.1"` and the per-dimension
 * fields: structure_score, citability_score, discoverability_score,
 * agent_interface_score, transactability_score, agent_correlation_score,
 * and overall_score.
 */

export const MCP_ENDPOINT = "https://api.covenai.io/mcp";
export const MCP_VERSION = "1.2.0";
export const METHODOLOGY_VERSION = "2.0.1";
export const SCORED_DIMENSIONS = [
  { name: "Structure", weight: 0.25, field: "structure_score" },
  { name: "Citability", weight: 0.25, field: "citability_score" },
  { name: "Discoverability", weight: 0.15, field: "discoverability_score" },
  { name: "Agent Interface", weight: 0.20, field: "agent_interface_score" },
  { name: "Transactability", weight: 0.15, field: "transactability_score" }
];
export const RESEARCH_SIGNALS = [
  { name: "Agent Correlation", weight: 0, field: "agent_correlation_score" }
];
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
