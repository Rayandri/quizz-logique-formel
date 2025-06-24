"use client"

import { notFound } from "next/navigation"
import ScoreScreen from "@/components/ScoreScreen"
import PageContainer from "@/components/common/PageContainer"
import { getSubjectById } from "@/lib/subjects"

interface SubcategoryResultsPageProps {
  params: { 
    subject: string
    subcategory: string 
  }
}

export default function SubcategoryResultsPage({ params }: SubcategoryResultsPageProps) {
  const subject = getSubjectById(params.subject)
  
  if (!subject) {
    notFound()
  }

  if (!subject.subcategories) {
    notFound()
  }

  const subcategory = subject.subcategories.find(sub => sub.id === params.subcategory)
  
  if (!subcategory) {
    notFound()
  }

  return (
    <PageContainer 
      title={`Résultats - ${subcategory.name}`}
      showBackButton={false}
    >
      <ScoreScreen subject={params.subcategory as any} />
    </PageContainer>
  )
} 
