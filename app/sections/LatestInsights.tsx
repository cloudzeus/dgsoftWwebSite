import { getLatestPublicArticles } from "../lib/queries/public-articles";
import LatestInsightsClient from "./LatestInsightsClient";

export default async function LatestInsights() {
    const articles = await getLatestPublicArticles(3);
    return <LatestInsightsClient articles={articles as any[]} />;
}
