# COVEN AI MCP Server

MCP tools for website auditing and AI visibility measurement, scored against the
COVEN v2.0.1 methodology.

Measurement, not middleware.

## Endpoint

```
https://api.covenai.io/mcp
```

## Methodology

Scans use the COVEN v2.0.1 rubric. Five dimensions are scored and combined into
an overall score; one further signal is surfaced separately for research, with
no weight on the score.

| Dimension | Weight | Field |
|---|---|---|
| Structure | 25% | `structure_score` |
| Citability | 25% | `citability_score` |
| Discoverability | 15% | `discoverability_score` |
| Agent Interface | 20% | `agent_interface_score` |
| Transactability | 15% | `transactability_score` |
| Agent Correlation (research signal, not scored) | 0% | `agent_correlation_score` |

Scan responses include `methodology_version: "2.0.1"`, the per-dimension fields
above, and an `overall_score`.

## Tools

| Tool | Description | Auth |
|------|-------------|------|
| `scan_website` | v2.0.1 site scan across the five scored dimensions, with Agent Correlation reported as a research signal | Optional |
| `check_geo_score` | Score a site's readiness for agent traffic — 0–85, A–F grade | Optional |
| `score_citability` | Content citability analysis under the v2.0.1 Citability dimension | Required |
| `generate_llmstxt` | Generate a ready-to-deploy `llms.txt` file | Optional |
| `geo_optimise` | Full agent-readiness audit with deployable content patches | Optional |
| `list_audit_products` | List available audit reports and prices | Optional |
| `place_audit_order` | Order a full AI audit report | Required (Pro+) |
| `get_audit_status` | Poll audit delivery status | Required |

## Quick Start

### Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "coven-ai": {
      "url": "https://api.covenai.io/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_COVEN_API_KEY"
      }
    }
  }
}
```

### Cursor

Add to `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "coven-ai": {
      "url": "https://api.covenai.io/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_COVEN_API_KEY"
      }
    }
  }
}
```

Get an API key at [covenai.io/developers](https://covenai.io/developers).

## Examples

```
check_geo_score("brightlocal.com")
→ Grade D, 46/85 — three priority fixes returned

geo_optimise("yoursite.com")
→ Four deployable patches: llms.txt, FAQ HTML block, schema JSON-LD, passage rewrite

generate_llmstxt("yoursite.com")
→ Complete /llms.txt file, ready to deploy

scan_website("example.com")
→ v2.0.1 report: Structure 72, Citability 64, Discoverability 58,
  Agent Interface 49, Transactability 41, Agent Correlation 0.31 (research signal)
```

## Auth

Most tools work without authentication. Audit orders and the monitoring API
require a COVEN API key.

Get one at [covenai.io/developers](https://covenai.io/developers).

## Links

- Homepage: [covenai.io](https://covenai.io)
- Docs: [covenai.io/developers](https://covenai.io/developers)
- Free tools: [covenai.io/llms-generator](https://covenai.io/llms-generator)
