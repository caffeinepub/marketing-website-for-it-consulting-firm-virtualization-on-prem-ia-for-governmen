# Specification

## Summary
**Goal:** Fix deployment failures caused by an invalid generated project domain/slug by ensuring the deployment-facing name/slug source produces a valid domain label.

**Planned changes:**
- Update the project’s deployment-facing name/slug source so it generates a valid domain label (5–50 characters; only lowercase letters, numbers, and hyphens) without parentheses, plus signs, spaces, or non-ASCII hyphen characters.
- Update `project_state.json` to replace the current project name value used for domain/slug generation with a slug-safe value that meets the same constraints.

**User-visible outcome:** Deployments proceed past the domain/slug validation step without failing due to invalid domain/slug characters or length.
