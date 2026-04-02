# COVEN AI MCP Server

8 MCP tools for website auditing and AI visibility optimisation.

## Endpoint

```
https://api.covenai.io/mcp
```

## Tools

| Tool | Description | Auth |
|------|-------------|------|
| `scan_website` | 8-dimension site scan (SEO, speed, copy, local, competitors, social, security, GEO) | Optional |
| `check_geo_score` | Score any site's GEO readiness — 0–85, A–F grade | Optional |
| `score_citability` | LLM-powered content citability analysis (Princeton rubric) | Required |
| `generate_llmstxt` | Generate a ready-to-deploy llms.txt file | Optional |
| `geo_optimise` | Full GEO audit with deployable content patches | Optional |
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
→ Grade D, 46/85 — here are the 3 critical fixes

geo_optimise("yoursite.com")  
→ 4 deployable patches: llms.txt, FAQ HTML block, schema JSON-LD, passage rewrite

generate_llmstxt("yoursite.com")
→ Complete /llms.txt file, ready to deploy

scan_website("example.com")
→ 8-dimension report: SEO 78/100, GEO & AI Readiness 52/100...
```

## Auth

Most tools work without auth. To place audit orders or use the monitoring API, you need a COVEN API key.

Get one at [covenai.io/developers](https://covenai.io/developers).

## Links

- Homepage: [covenai.io](https://covenai.io)
- Docs: [covenai.io/developers](https://covenai.io/developers)
- Free GEO tools: [covenai.io/llms-generator](https://covenai.io/llms-generator)
