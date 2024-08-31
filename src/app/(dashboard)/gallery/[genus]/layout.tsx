import Page from "./page"

export async function generateMetadata({ params }: { params: { genus: string } }) {
  return {
    title: `${params.genus} | saurdata`,
  }
}
export default Page
