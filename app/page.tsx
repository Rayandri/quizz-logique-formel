"use client"

import SubjectSelection from "@/components/SubjectSelection"
import PageContainer from "@/components/common/PageContainer"

export default function HomePage() {
  return (
    <PageContainer title="Quiz de Logique - EPITA" showMainMenu={false}>
      <SubjectSelection />
    </PageContainer>
  )
}
