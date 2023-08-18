import Image from 'next/image'
import Main from '../components/Main'
import Card from '../components/Card'
import getSortedPostsData from '../lib/posts';
export default function Blog() {
  const allPostsData = getSortedPostsData();
  return (
    <Main >
      <div className="grid grid-flow-col gap-4 auto-cols-[minmax(0,_2fr)]">
      </div>
      <div className="grid grid-flow-col gap-4 auto-cols-[minmax(0,_2fr)]">
        {
          allPostsData.map(({
            slug,
            title
          }, index) => {
            return (
              <div key={index}>
                <Card 
                  slug={slug}
                  title={title}
                  description={slug}
                  tags={[]}
                />
              </div>

            )
          })
        }
      </div>
    </Main>
  )
}
