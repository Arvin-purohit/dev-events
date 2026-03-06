<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Dev Events Next.js App Router project. The following changes were made:

- **`instrumentation-client.ts`** (new): Initializes PostHog client-side using the Next.js 15.3+ `instrumentation-client` pattern. Configured with a reverse proxy (`/ingest`), exception capture, and debug mode in development.
- **`next.config.ts`** (updated): Added reverse proxy rewrites for `/ingest` and `/ingest/static` to route PostHog requests through the app, reducing tracking-blocker interference.
- **`components/ExploreBtn.tsx`** (updated): Added `posthog.capture('explore_events_clicked')` to the button's click handler.
- **`components/EventCard.tsx`** (updated): Added `'use client'` directive and `posthog.capture('event_card_clicked', {...})` on link click, including properties for event title, slug, location, and date.
- **`.env.local`** (updated): Added `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables.

| Event Name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the "Explore Events" button to scroll to the events list | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on an event card; includes `event_title`, `event_slug`, `event_location`, `event_date` properties | `components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard**: [Analytics basics](https://us.posthog.com/project/333282/dashboard/1336260)
- **Insight**: [Explore Events Button Clicks](https://us.posthog.com/project/333282/insights/GNfjmDIY) — daily trend of explore button clicks
- **Insight**: [Event Card Clicks Trend](https://us.posthog.com/project/333282/insights/QZ9nYSbA) — daily trend of event card clicks
- **Insight**: [Most Popular Events Clicked](https://us.posthog.com/project/333282/insights/QMvsMVKj) — bar chart breakdown by event title
- **Insight**: [Event Discovery Funnel](https://us.posthog.com/project/333282/insights/ZU8Ta7CY) — conversion funnel: page view → explore click → event card click
- **Insight**: [Unique Users Exploring Events](https://us.posthog.com/project/333282/insights/ko3yL1CH) — daily unique users engaging with explore and event card actions

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
