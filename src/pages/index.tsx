import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 
type Product = {
  id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: { rate: number; count: number; }
}

export const getServerSideProps: GetServerSideProps<{
  repo: Array<Product>
}> = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const repo = await res.json()
  console.log('repo', repo)
  return { props: { repo } }
}
 
export default function Page({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main style={{display: "flex", height: "100vh", justifyContent: "center", alignItems: "center"}}>
      {repo.map(item => <div key={item.id} >
        {item.title}
      </div>
        )}
    </main>
  )
}