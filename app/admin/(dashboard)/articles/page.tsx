import { Metadata } from "next"
import { getArticles, getArticleCategories } from "@/app/lib/actions/article"
import { DataTableArticles } from "@/components/admin/articles/data-table-articles"

export const metadata: Metadata = { title: "Articles | Admin Dashboard" }

export default async function ArticlesPage() {
  const [articles, categories] = await Promise.all([
    getArticles(),
    getArticleCategories(),
  ])

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Νέα & Άρθρα</h1>
      </div>
      <DataTableArticles data={articles as any} allCategories={categories as any} />
    </div>
  )
}
